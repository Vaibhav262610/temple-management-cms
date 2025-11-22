# Contact Form Database Setup

## Step 1: Create the Database Table

You need to run the SQL migration to create the `cms_contact` table in your
Supabase database.

### Option A: Using Supabase Dashboard (Recommended)

1. Go to your Supabase project: https://supabase.com/dashboard
2. Navigate to **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste the contents of `migrations/create_cms_contact_table.sql`
5. Click **Run** to execute the SQL

### Option B: Using Supabase CLI

```bash
# If you have Supabase CLI installed
supabase db push
```

## Step 2: Verify the Table

After running the migration, verify the table was created:

1. Go to **Table Editor** in Supabase Dashboard
2. Look for the `cms_contact` table
3. You should see these columns:
   - `id` (UUID, Primary Key)
   - `name` (VARCHAR)
   - `email` (VARCHAR)
   - `phone` (VARCHAR, optional)
   - `subject` (VARCHAR)
   - `message` (TEXT)
   - `status` (VARCHAR, default: 'new')
   - `created_at` (TIMESTAMP)
   - `updated_at` (TIMESTAMP)

## Step 3: Test the Contact Form

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Navigate to: http://localhost:3000/contact-us

3. Fill out the form with test data:

   - Name: Test User
   - Email: test@example.com
   - Phone: +1 555-123-4567
   - Subject: Test Submission
   - Message: This is a test message

4. Click **Send Message**

5. Check Supabase Dashboard → Table Editor → `cms_contact` to see the submission

## How It Works

The contact form now works with a **fallback mechanism**:

1. **First**, it tries to submit to your backend API: `POST /api/contact`
2. **If the backend is unavailable**, it automatically saves directly to
   Supabase using the `cms_contact` table

This ensures contact form submissions are never lost, even if the backend is
down.

## Viewing Submissions

### In Supabase Dashboard:

1. Go to **Table Editor**
2. Select `cms_contact` table
3. View all submissions with filters by status, date, etc.

### Future: Admin Portal

You can later create an admin interface to:

- View all contact submissions
- Mark submissions as "read", "replied", "archived"
- Search and filter by email, date, status
- Export submissions to CSV

## Security

The table has Row Level Security (RLS) enabled:

- ✅ Anyone can INSERT (submit contact forms)
- ✅ Only authenticated users can SELECT (view submissions)
- ✅ Only authenticated users can UPDATE (change status)

## Status Values

The `status` field can have these values:

- `new` - Just submitted (default)
- `read` - Admin has viewed it
- `replied` - Admin has responded
- `archived` - Closed/archived

You can update these manually in Supabase or through an admin interface.
