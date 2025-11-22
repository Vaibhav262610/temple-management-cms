// Backend API Endpoint Template for Contact Form
// Add this to your Railway backend server

// Example using Express.js
const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY // Use service key for backend
);

/**
 * POST /api/contact
 * Submit a contact form
 */
router.post('/contact', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: name, email, subject, message',
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email address',
            });
        }

        // Insert into database
        const { data, error } = await supabase
            .from('cms_contact')
            .insert([
                {
                    name: name.trim(),
                    email: email.trim().toLowerCase(),
                    phone: phone ? phone.trim() : null,
                    subject: subject.trim(),
                    message: message.trim(),
                    status: 'new',
                },
            ])
            .select()
            .single();

        if (error) {
            console.error('Database error:', error);
            return res.status(500).json({
                success: false,
                message: 'Failed to save contact form',
                error: error.message,
            });
        }

        // Optional: Send email notification to admin
        // await sendEmailNotification(data);

        res.status(201).json({
            success: true,
            message: 'Contact form submitted successfully',
            data: {
                id: data.id,
                created_at: data.created_at,
            },
        });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
});

/**
 * GET /api/contact
 * Get all contact submissions (admin only)
 */
router.get('/contact', async (req, res) => {
    try {
        const { status, limit = 50, offset = 0 } = req.query;

        let query = supabase
            .from('cms_contact')
            .select('*', { count: 'exact' })
            .order('created_at', { ascending: false })
            .range(offset, offset + limit - 1);

        if (status) {
            query = query.eq('status', status);
        }

        const { data, error, count } = await query;

        if (error) {
            console.error('Database error:', error);
            return res.status(500).json({
                success: false,
                message: 'Failed to fetch contact submissions',
                error: error.message,
            });
        }

        res.json({
            success: true,
            data,
            pagination: {
                total: count,
                limit: parseInt(limit),
                offset: parseInt(offset),
            },
        });
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
});

/**
 * PATCH /api/contact/:id
 * Update contact submission status
 */
router.patch('/contact/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const validStatuses = ['new', 'read', 'replied', 'archived'];
        if (status && !validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
            });
        }

        const { data, error } = await supabase
            .from('cms_contact')
            .update({ status })
            .eq('id', id)
            .select()
            .single();

        if (error) {
            console.error('Database error:', error);
            return res.status(500).json({
                success: false,
                message: 'Failed to update contact submission',
                error: error.message,
            });
        }

        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'Contact submission not found',
            });
        }

        res.json({
            success: true,
            message: 'Contact submission updated',
            data,
        });
    } catch (error) {
        console.error('Error updating contact:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
});

module.exports = router;

// In your main server file (e.g., index.js or app.js), add:
// const contactRoutes = require('./routes/contact');
// app.use('/api', contactRoutes);
