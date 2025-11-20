# Banner Debugging Guide

## Changes Made

I've added debugging features to help identify the issue:

### 1. Console Logging

The page now logs:

- `"Banner API Response:"` - Shows raw data from API
- `"Found home banner:"` - Shows the matched banner
- `"No banner data received"` - If API returns null

### 2. Debug Panel (Development Only)

A black box in the bottom-right corner shows the banner data being used (only in
development mode)

### 3. Support for Multiple Column Names

The code now supports both naming conventions:

- `image_url` or `imageUrl`
- `button_text` or `buttonText`
- `button_link` or `buttonLink`

## How to Debug

### Step 1: Open Browser Console

1. Open your site in browser
2. Press F12 to open Developer Tools
3. Go to "Console" tab
4. Refresh the page
5. Look for the log messages

### Step 2: Check What You See

**If you see:**

```
Banner API Response: null
```

→ The API endpoint is not returning data. Check backend.

**If you see:**

```
Banner API Response: [{ ... }]
```

→ API is working! Check if title matches "home banner"

**If you see:**

```
Found home banner: { title: "home banner", ... }
```

→ Banner found! Check if the data fields are correct.

### Step 3: Verify Database

Make sure your `cms_banner` table has a row where:

- `title` = "home banner" (case insensitive)
- `image_url` has a valid URL
- Other fields are filled

**Example SQL to check:**

```sql
SELECT * FROM cms_banner WHERE LOWER(title) = 'home banner';
```

### Step 4: Check Backend Endpoint

Test the API directly:

```bash
curl https://temple-backend-production-7324.up.railway.app/api/cms/banner
```

**Expected response:**

```json
[
	{
		"id": "...",
		"title": "home banner",
		"subtitle": "...",
		"description": "...",
		"image_url": "https://...",
		"button_text": "...",
		"button_link": "..."
	}
]
```

## Common Issues & Solutions

### Issue 1: API Returns Empty Array `[]`

**Cause:** No data in database **Solution:** Insert a row with title "home
banner"

### Issue 2: API Returns 404

**Cause:** Backend endpoint doesn't exist **Solution:** Add the
`/api/cms/banner` endpoint to your backend

### Issue 3: Banner Shows Default Content

**Cause:** Title doesn't match "home banner" **Solution:** Update database row
title to exactly "home banner"

### Issue 4: Image Not Showing

**Cause:** Invalid image URL **Solution:** Use a full URL like `https://...` or
valid relative path

## Quick Test

Add this to your database:

```sql
INSERT INTO cms_banner (title, subtitle, description, image_url, button_text, button_link)
VALUES (
  'home banner',
  'Test Subtitle',
  'This is a test banner from the database!',
  'https://images.pexels.com/photos/5243162/pexels-photo-5243162.jpeg',
  'Test Button',
  '/contact-us'
);
```

Then refresh your homepage and check:

1. Console logs
2. Debug panel (bottom-right)
3. Banner content

## Remove Debug Code

Once working, remove the debug panel by deleting these lines from
`app/page.tsx`:

```tsx
{/* Debug Info - Remove after testing */}
{process.env.NODE_ENV === 'development' && banner && (
  <div style={{ ... }}>
    ...
  </div>
)}
```

## Need More Help?

Share the console output and I can help identify the exact issue!
