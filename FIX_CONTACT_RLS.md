# 🔧 Fix Contact Form RLS Error

## The Problem

You're getting: **"new row violates row-level security policy for table
cms_contact"**

This means the RLS policies are too restrictive.

## The Solution (2 minutes)

### Step 1: Run the Fix Script

1. Go to Supabase Dashboard: https://supabase.com/dashboard
2. Click **SQL Editor**
3. Click **New Query**
4. Copy and paste from: `migrations/fix_cms_contact_policies.sql`
5. Click **Run** ▶️

### Step 2: Test Again

```bash
npm run dev
```

1. Visit: http://localhost:3000/contact-us
2. Fill the form
3. Submit
4. Should work now! ✅

## What Changed?

The original policies had `TO anon, authenticated` which was too restrictive.
The fix removes that restriction and allows all inserts.

**Before:**

```sql
CREATE POLICY "Allow public insert on cms_contact"
ON cms_contact
FOR INSERT
TO anon, authenticated  -- ❌ Too restrictive
WITH CHECK (true);
```

**After:**

```sql
CREATE POLICY "Allow public insert on cms_contact"
ON cms_contact
FOR INSERT
WITH CHECK (true);  -- ✅ Allows all inserts
```

## Verify It Works

After running the fix:

1. Submit a test form
2. Check Supabase → Table Editor → `cms_contact`
3. Your submission should be there!

## Still Having Issues?

If you still get errors, you can temporarily disable RLS for testing:

```sql
-- TEMPORARY: Disable RLS for testing
ALTER TABLE cms_contact DISABLE ROW LEVEL SECURITY;
```

Then test the form. If it works, the issue is definitely with RLS policies.

To re-enable RLS after testing:

```sql
ALTER TABLE cms_contact ENABLE ROW LEVEL SECURITY;
```

Then run the fix script again.
