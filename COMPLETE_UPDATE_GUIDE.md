# Complete Image & Video Update Guide

## Summary

You want to:

1. Replace ALL old images with new ones from `/public/new_images/` (especially
   from 2018 folder)
2. Make videos fetch from database instead of being hardcoded

## Step-by-Step Implementation

### STEP 1: Setup Database for Videos

Run this SQL in Supabase:

```sql
-- See DATABASE_SETUP_VIDEOS.md for complete SQL
CREATE TABLE cms_videos (...);
INSERT INTO cms_videos (...) VALUES (...);
```

### STEP 2: Add Backend Endpoint

Add to your backend:

```
GET /api/cms/videos
GET /api/cms/videos?featured=true
```

### STEP 3: Update Frontend Code

I'll update these files:

1. `lib/api.ts` - ✅ Already added `getVideos()` function
2. `app/page.tsx` - Update to fetch videos and use new images
3. `app/gallery/page.tsx` - Use new images
4. Other pages as needed

## Quick Start - What to Do Now

### Option A: Do Everything Automatically

Tell me: **"Update everything now"** and I'll:

1. Update homepage to fetch videos from DB
2. Replace all image paths to use `/new_images/2018/` folder
3. Update all pages systematically

### Option B: Step by Step

Tell me which to do first:

1. **"Update videos first"** - I'll make videos dynamic
2. **"Update images first"** - I'll replace all image paths
3. **"Update homepage only"** - I'll focus on homepage first

### Option C: Manual Control

You tell me exactly which page/section to update and I'll do it.

## What I Need from You

1. **For Videos:**

   - Run the SQL in Supabase (from DATABASE_SETUP_VIDEOS.md)
   - Add backend endpoint (or I can use direct Supabase access)
   - Provide actual YouTube video URLs to use

2. **For Images:**
   - Confirm you want to use images from `/new_images/2018/` folder
   - Or tell me which year/month folder to use for each section

## Current Status

✅ Video API function added to `lib/api.ts` ✅ New images available in
`/public/new_images/` ⏳ Waiting for your direction on how to proceed

## Recommendation

I recommend: **"Update homepage first"** because it's the most visible page.

This will:

- Fetch videos from database
- Use new images from 2018 folder
- Show you the pattern for other pages

Then we can apply the same pattern to other pages.

**Ready to proceed? Just tell me:**

- "Update homepage now" - I'll do homepage completely
- "Update everything" - I'll do all pages
- Or specify what you want first
