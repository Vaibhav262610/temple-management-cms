-- Useful SQL queries for managing contact form submissions

-- 1. View all contact submissions (most recent first)
SELECT 
    id,
    name,
    email,
    phone,
    subject,
    LEFT(message, 100) as message_preview,
    status,
    created_at
FROM cms_contact
ORDER BY created_at DESC
LIMIT 50;

-- 2. Count submissions by status
SELECT 
    status,
    COUNT(*) as count
FROM cms_contact
GROUP BY status
ORDER BY count DESC;

-- 3. View only new (unread) submissions
SELECT 
    id,
    name,
    email,
    subject,
    created_at
FROM cms_contact
WHERE status = 'new'
ORDER BY created_at DESC;

-- 4. Search by email
SELECT 
    id,
    name,
    email,
    subject,
    message,
    status,
    created_at
FROM cms_contact
WHERE email ILIKE '%example.com%'
ORDER BY created_at DESC;

-- 5. Get submissions from last 7 days
SELECT 
    id,
    name,
    email,
    subject,
    status,
    created_at
FROM cms_contact
WHERE created_at >= NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;

-- 6. Mark a submission as read
UPDATE cms_contact
SET status = 'read'
WHERE id = 'YOUR-SUBMISSION-ID-HERE';

-- 7. Mark a submission as replied
UPDATE cms_contact
SET status = 'replied'
WHERE id = 'YOUR-SUBMISSION-ID-HERE';

-- 8. Archive old submissions (older than 90 days and already replied)
UPDATE cms_contact
SET status = 'archived'
WHERE status = 'replied'
AND created_at < NOW() - INTERVAL '90 days';

-- 9. Get full details of a specific submission
SELECT 
    id,
    name,
    email,
    phone,
    subject,
    message,
    status,
    created_at,
    updated_at
FROM cms_contact
WHERE id = 'YOUR-SUBMISSION-ID-HERE';

-- 10. Export all submissions (for backup or analysis)
SELECT 
    name,
    email,
    phone,
    subject,
    message,
    status,
    created_at
FROM cms_contact
ORDER BY created_at DESC;

-- 11. Get daily submission count for last 30 days
SELECT 
    DATE(created_at) as submission_date,
    COUNT(*) as submissions
FROM cms_contact
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY DATE(created_at)
ORDER BY submission_date DESC;

-- 12. Find duplicate submissions (same email within 1 hour)
SELECT 
    email,
    COUNT(*) as submission_count,
    MIN(created_at) as first_submission,
    MAX(created_at) as last_submission
FROM cms_contact
WHERE created_at >= NOW() - INTERVAL '1 hour'
GROUP BY email
HAVING COUNT(*) > 1;

-- 13. Delete test submissions (be careful!)
-- DELETE FROM cms_contact
-- WHERE email LIKE '%test%' OR email LIKE '%example.com%';

-- 14. Get statistics
SELECT 
    COUNT(*) as total_submissions,
    COUNT(CASE WHEN status = 'new' THEN 1 END) as new_count,
    COUNT(CASE WHEN status = 'read' THEN 1 END) as read_count,
    COUNT(CASE WHEN status = 'replied' THEN 1 END) as replied_count,
    COUNT(CASE WHEN status = 'archived' THEN 1 END) as archived_count,
    MIN(created_at) as first_submission,
    MAX(created_at) as latest_submission
FROM cms_contact;
