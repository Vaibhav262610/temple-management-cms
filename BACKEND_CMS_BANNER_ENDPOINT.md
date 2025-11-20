# Backend CMS Banner Endpoint - Implementation Guide

## Problem

Frontend is getting 404 error when calling `/api/cms/banner` because the
endpoint doesn't exist yet.

## Database Structure (From Your Screenshot)

```
Table: cms_banner
Columns:
- id (uuid)
- title (text) - "Home Banner"
- link_url (text) - Image URL
- is_active (bool) - TRUE
- created_at (timestamptz)
- updated_at (timestamptz)
```

## Solution: Add This Endpoint to Your Backend

### Option 1: Using Express.js + Supabase

Add this to your backend routes (e.g., `routes/cms.js` or `routes/banner.js`):

```javascript
const express = require("express");
const router = express.Router();
const { createClient } = require("@supabase/supabase-js");

// Initialize Supabase client
const supabase = createClient(
	process.env.SUPABASE_URL,
	process.env.SUPABASE_SERVICE_KEY
);

// GET /api/cms/banner - Fetch all active banners
router.get("/cms/banner", async (req, res) => {
	try {
		const { data, error } = await supabase
			.from("cms_banner")
			.select("*")
			.eq("is_active", true)
			.order("created_at", { ascending: false });

		if (error) {
			console.error("Supabase error:", error);
			return res.status(500).json({
				message: "Failed to fetch banners",
				error: error.message,
			});
		}

		// Transform data to match frontend expectations
		const transformedData = data.map((banner) => ({
			id: banner.id,
			title: banner.title,
			subtitle: banner.subtitle || null,
			description: banner.description || null,
			image_url: banner.link_url, // Map link_url to image_url
			button_text: banner.button_text || null,
			button_link: banner.button_link || null,
			status: banner.is_active ? "active" : "inactive",
			created_at: banner.created_at,
			updated_at: banner.updated_at,
		}));

		res.json(transformedData);
	} catch (error) {
		console.error("Server error:", error);
		res.status(500).json({
			message: "Internal server error",
			error: error.message,
		});
	}
});

// GET /api/cms/banner/:id - Fetch single banner
router.get("/cms/banner/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const { data, error } = await supabase
			.from("cms_banner")
			.select("*")
			.eq("id", id)
			.single();

		if (error) {
			return res.status(404).json({
				message: "Banner not found",
				error: error.message,
			});
		}

		// Transform data
		const transformedData = {
			id: data.id,
			title: data.title,
			subtitle: data.subtitle || null,
			description: data.description || null,
			image_url: data.link_url,
			button_text: data.button_text || null,
			button_link: data.button_link || null,
			status: data.is_active ? "active" : "inactive",
			created_at: data.created_at,
			updated_at: data.updated_at,
		};

		res.json(transformedData);
	} catch (error) {
		console.error("Server error:", error);
		res.status(500).json({
			message: "Internal server error",
			error: error.message,
		});
	}
});

module.exports = router;
```

### Option 2: Using Next.js API Routes (If backend is Next.js)

Create file: `pages/api/cms/banner.js` or `app/api/cms/banner/route.ts`

```typescript
// app/api/cms/banner/route.ts
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
	process.env.SUPABASE_URL!,
	process.env.SUPABASE_SERVICE_KEY!
);

export async function GET() {
	try {
		const { data, error } = await supabase
			.from("cms_banner")
			.select("*")
			.eq("is_active", true)
			.order("created_at", { ascending: false });

		if (error) {
			return NextResponse.json(
				{ message: "Failed to fetch banners", error: error.message },
				{ status: 500 }
			);
		}

		// Transform data to match frontend expectations
		const transformedData = data.map((banner: any) => ({
			id: banner.id,
			title: banner.title,
			subtitle: banner.subtitle || null,
			description: banner.description || null,
			image_url: banner.link_url, // Map link_url to image_url
			button_text: banner.button_text || null,
			button_link: banner.button_link || null,
			status: banner.is_active ? "active" : "inactive",
			created_at: banner.created_at,
			updated_at: banner.updated_at,
		}));

		return NextResponse.json(transformedData);
	} catch (error: any) {
		return NextResponse.json(
			{ message: "Internal server error", error: error.message },
			{ status: 500 }
		);
	}
}
```

## How to Add to Your Backend

### Step 1: Locate Your Backend Project

Your backend is hosted at:
`https://temple-backend-production-7324.up.railway.app`

### Step 2: Add the Route

1. Open your backend project
2. Find the routes folder (usually `routes/` or `api/`)
3. Create a new file `cms.js` or add to existing routes
4. Copy the code above

### Step 3: Register the Route

In your main server file (e.g., `server.js` or `index.js`):

```javascript
const cmsRoutes = require("./routes/cms");
app.use("/api", cmsRoutes);
```

### Step 4: Update Database Schema (If Needed)

Your current table might be missing some columns. Run this SQL to add them:

```sql
-- Add missing columns if they don't exist
ALTER TABLE cms_banner
ADD COLUMN IF NOT EXISTS subtitle VARCHAR(255),
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS button_text VARCHAR(100),
ADD COLUMN IF NOT EXISTS button_link VARCHAR(255);

-- Update your existing row
UPDATE cms_banner
SET
  subtitle = 'Welcome to Shri Shirdi Sai Baba Mandir',
  description = 'Sabka Malik Ek – God is One. We are devotees of Shri Shirdi Sai Baba, following His teachings of love, compassion, and service to humanity.',
  button_text = 'Become a Devotee',
  button_link = '/contact-us'
WHERE title = 'Home Banner';
```

### Step 5: Test the Endpoint

After deploying, test with:

```bash
curl https://temple-backend-production-7324.up.railway.app/api/cms/banner
```

Expected response:

```json
[
	{
		"id": "051f2af6-f250-44a6-ad01-0769b7d5b472",
		"title": "Home Banner",
		"subtitle": "Welcome to Shri Shirdi Sai Baba Mandir",
		"description": "Sabka Malik Ek – God is One...",
		"image_url": "https://www.shutterstock.com/image-vector/...",
		"button_text": "Become a Devotee",
		"button_link": "/contact-us",
		"status": "active",
		"created_at": "2025-11-19T21:12:38.860986+00:00",
		"updated_at": "2025-11-19T21:12:38.860986+00:00"
	}
]
```

## Quick Fix: Temporary Workaround

If you can't add the backend endpoint immediately, you can temporarily use
Supabase directly from the frontend:

```typescript
// lib/api.ts - Temporary direct Supabase access
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getHomeBanner() {
	try {
		const { data, error } = await supabase
			.from("cms_banner")
			.select("*")
			.eq("is_active", true)
			.order("created_at", { ascending: false });

		if (error) throw error;

		return data.map((banner: any) => ({
			id: banner.id,
			title: banner.title,
			image_url: banner.link_url,
			// Add other fields as needed
		}));
	} catch (error) {
		console.error("Failed to fetch banner:", error);
		return null;
	}
}
```

## Summary

1. ✅ Frontend is ready and waiting for the endpoint
2. ⏳ Backend needs `/api/cms/banner` endpoint added
3. ⏳ Database might need additional columns
4. ⏳ Deploy backend changes
5. ✅ Frontend will automatically work once endpoint is live

Once you add the endpoint to your backend and deploy, the banner will show
automatically!
