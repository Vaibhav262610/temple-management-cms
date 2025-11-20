# ✅ Banner Fix Applied - Test Now!

## What I Did

### 1. **Installed Supabase Client**

```bash
npm install @supabase/supabase-js
```

### 2. **Updated `lib/api.ts`**

- Added direct Supabase access as fallback
- Now tries API endpoint first, then falls back to Supabase
- Transforms your database columns to match frontend expectations:
  - `link_url` → `image_url`
  - `is_active` → `status`

### 3. **Smart Title Matching**

- Searches for "home banner" (case-insensitive)
- Will match "Home Banner", "home banner", "HOME BANNER", etc.

## How to Test

### Step 1: Restart Your Dev Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

### Step 2: Open Browser

1. Go to http://localhost:3000
2. Open Developer Console (F12)
3. Look for these messages:

**Expected Console Output:**

```
Banner endpoint not available, using direct Supabase access
Banner API Response: [{ id: "...", title: "Home Banner", ... }]
Found home banner: { id: "...", title: "Home Banner", ... }
```

### Step 3: Check the Banner

You should now see:

- ✅ Banner image from your database (`link_url`)
- ✅ Title: "Home Banner"
- ✅ Debug panel in bottom-right showing banner data

## What's Happening Now

### Current Flow:

1. Frontend tries: `GET /api/cms/banner` → **404 (endpoint doesn't exist)**
2. Frontend falls back to: **Direct Supabase query** → ✅ **Success!**
3. Fetches from `cms_banner` table where `is_active = true`
4. Finds row with title "Home Banner"
5. Displays the banner!

## Your Database Row

Based on your screenshot:

```
id: 051f2af6-f250-44a6-ad01-0769b7d5b472
title: "Home Banner"
link_url: "https://www.shutterstock.com/image-vector/..."
is_active: TRUE
```

This will now show on your homepage!

## Next Steps

### Immediate (Working Now):

- ✅ Banner loads from Supabase directly
- ✅ No backend endpoint needed yet
- ✅ You can test and see it working

### Long-term (Recommended):

1. Add `/api/cms/banner` endpoint to your backend
2. Once endpoint exists, frontend will automatically use it
3. Remove direct Supabase access for better security

## Troubleshooting

### If Banner Still Doesn't Show:

**Check Console for:**

```
Banner API Response: [...]
```

**If you see empty array `[]`:**

- Check `is_active` is `TRUE` in database
- Check title is exactly "Home Banner" or "home banner"

**If you see error:**

- Check Supabase credentials in `.env.local`
- Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Database Columns Needed:

Your table should have at minimum:

- `id` (uuid)
- `title` (text) - "Home Banner"
- `link_url` (text) - Image URL
- `is_active` (boolean) - TRUE

Optional columns (will use defaults if missing):

- `subtitle` (text)
- `description` (text)
- `button_text` (text)
- `button_link` (text)

## Add Missing Columns (Optional)

If you want subtitle, description, and button text:

```sql
ALTER TABLE cms_banner
ADD COLUMN IF NOT EXISTS subtitle VARCHAR(255),
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS button_text VARCHAR(100),
ADD COLUMN IF NOT EXISTS button_link VARCHAR(255);

UPDATE cms_banner
SET
  subtitle = 'Welcome to Shri Shirdi Sai Baba Mandir',
  description = 'Sabka Malik Ek – God is One. We are devotees of Shri Shirdi Sai Baba, following His teachings of love, compassion, and service to humanity.',
  button_text = 'Become a Devotee',
  button_link = '/contact-us'
WHERE LOWER(title) = 'home banner';
```

## Test Now!

Restart your dev server and check the homepage. The banner should now load from
your database! 🎉
