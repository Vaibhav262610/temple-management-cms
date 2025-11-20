# Simple Banner Background Solution

## What It Does

✅ **Only changes the background image** from your database  
✅ **Keeps all text content the same** (static)  
✅ **No loading states or complex logic**

## How It Works

1. Fetches banner data from `cms_banner` table (via Supabase)
2. Looks for row with title "home banner" (case-insensitive)
3. Uses the `link_url` field as background image
4. Falls back to default image if nothing found

## Database Setup

Your `cms_banner` table needs:

- `title` = "Home Banner" (or "home banner")
- `link_url` = Your image URL
- `is_active` = TRUE

Example:

```
title: "Home Banner"
link_url: "https://www.shutterstock.com/image-vector/simple-gray-avatar-icons-representing-688hu-2582814323.jpg"
is_active: TRUE
```

## Test It

1. Restart dev server: `npm run dev`
2. Open http://localhost:3000
3. Background image should load from your database

## Change Background Image

Just update the `link_url` in your database:

```sql
UPDATE cms_banner
SET link_url = 'https://your-new-image-url.com/image.jpg'
WHERE LOWER(title) = 'home banner';
```

Refresh the page - new background appears!

## Static Content (Not Changed)

These remain hardcoded:

- Title: "Welcome to Shri Shirdi Sai Baba Mandir"
- Description: "Sabka Malik Ek – God is One..."
- Buttons: "Become a Devotee" and "Donate Us"

Only the **background image** is dynamic from the database.
