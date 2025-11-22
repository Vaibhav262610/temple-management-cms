# 🚀 Quick Setup - Contact Form Database

## 3 Simple Steps

### Step 1: Create Database Table (2 minutes)

1. Open: https://supabase.com/dashboard
2. Click: **SQL Editor** (left sidebar)
3. Click: **New Query**
4. Copy & paste from: `migrations/create_cms_contact_table.sql`
5. Click: **Run** ▶️

✅ Done! Table created.

### Step 2: Test It (1 minute)

```bash
npm run dev
```

1. Visit: http://localhost:3000/contact-us
2. Fill the form with any test data
3. Click: **Send Message**
4. See success message ✅

### Step 3: View Submission (30 seconds)

1. Go to Supabase Dashboard
2. Click: **Table Editor**
3. Select: `cms_contact`
4. See your test submission! 🎉

## That's It!

Your contact form is now saving all submissions to the database.

## View Submissions Anytime

**Supabase Dashboard:**

- Table Editor → `cms_contact`

**SQL Queries:**

- Use queries from `admin-queries/contact-submissions.sql`

## Need More Help?

- Full setup guide: `CONTACT_FORM_SETUP.md`
- Testing guide: `TEST_CONTACT_FORM.md`
- Complete docs: `CONTACT_FORM_COMPLETE.md`
