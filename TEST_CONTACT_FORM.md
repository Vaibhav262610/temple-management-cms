# Testing Contact Form

## Quick Test Steps

### 1. Run the SQL Migration

First, create the `cms_contact` table in Supabase:

1. Open Supabase Dashboard: https://supabase.com/dashboard
2. Go to **SQL Editor**
3. Copy the SQL from `migrations/create_cms_contact_table.sql`
4. Run it

### 2. Start Your Dev Server

```bash
npm run dev
```

### 3. Test the Form

1. Go to: http://localhost:3000/contact-us
2. Fill in the form:
   - **Name**: John Doe
   - **Email**: john@example.com
   - **Phone**: +1 555-123-4567
   - **Subject**: Test Contact Form
   - **Message**: This is a test message to verify the contact form is working.
3. Click **Send Message**
4. You should see a success message

### 4. Verify in Database

1. Go to Supabase Dashboard → **Table Editor**
2. Select `cms_contact` table
3. You should see your test submission with:
   - All the data you entered
   - `status: 'new'`
   - `created_at` timestamp

## What Changed?

✅ **Created `cms_contact` table** - Stores all contact form submissions ✅
**Updated `lib/api.ts`** - Now saves directly to Supabase if backend is
unavailable ✅ **Fallback mechanism** - Works even if Railway backend is down

## Expected Behavior

When someone submits the contact form:

1. **First attempt**: Try to send to Railway backend API
2. **If backend fails**: Automatically save directly to Supabase
3. **Success message**: User sees confirmation
4. **Data saved**: Submission is stored in `cms_contact` table

## Viewing Submissions

### Current: Supabase Dashboard

- Go to Table Editor → `cms_contact`
- View all submissions
- Filter by status, date, email

### Future: Admin Portal

You can build an admin interface to:

- View all contact submissions
- Reply to contacts
- Mark as read/replied/archived
- Export to CSV

## Status Management

Update submission status in Supabase:

```sql
-- Mark as read
UPDATE cms_contact
SET status = 'read'
WHERE id = 'submission-id';

-- Mark as replied
UPDATE cms_contact
SET status = 'replied'
WHERE id = 'submission-id';

-- Archive
UPDATE cms_contact
SET status = 'archived'
WHERE id = 'submission-id';
```

## Troubleshooting

### Form shows error after submission

- Check browser console for errors
- Verify Supabase credentials in `.env.local`
- Ensure the `cms_contact` table exists
- Check RLS policies are enabled

### Data not appearing in database

- Verify the SQL migration ran successfully
- Check Supabase logs for errors
- Ensure RLS policy allows anonymous inserts

### Need help?

Check `CONTACT_FORM_SETUP.md` for detailed setup instructions.
