# Check Database Schema for Donations Table

## Current Issue

The backend keeps saying columns don't exist. We need to see the actual table
structure.

## What I Changed

Now using snake_case naming (like other endpoints):

```json
{
	"donor_name": "John Doe",
	"donor_email": "john@example.com",
	"donor_phone": "123-456-7890",
	"amount": 100,
	"message": "Optional message"
}
```

## Test This First

1. Refresh http://localhost:3000/donation
2. Fill form and submit
3. Check console

## If Still Fails - Check Database

### Option 1: Using Supabase Dashboard

1. Go to https://supabase.com
2. Open your project
3. Go to "Table Editor"
4. Find `donations` table
5. Click on table to see columns
6. Take a screenshot and share

### Option 2: Using SQL

Run this query in Supabase SQL Editor:

```sql
-- Get table structure
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'donations'
ORDER BY ordinal_position;
```

### Option 3: Check Backend Code

Look at your backend project for the donations model/schema:

- Find `models/donation.js` or similar
- Look for the table definition
- Check what column names are used

## Common Database Naming Patterns

### Pattern 1: Snake Case (Most Common)

```sql
CREATE TABLE donations (
  id UUID,
  donor_name VARCHAR,
  donor_email VARCHAR,
  donor_phone VARCHAR,
  amount DECIMAL,
  message TEXT
);
```

### Pattern 2: Camel Case

```sql
CREATE TABLE donations (
  id UUID,
  donorName VARCHAR,
  donorEmail VARCHAR,
  donorPhone VARCHAR,
  amount DECIMAL,
  message TEXT
);
```

### Pattern 3: Simple Names

```sql
CREATE TABLE donations (
  id UUID,
  name VARCHAR,
  email VARCHAR,
  phone VARCHAR,
  amount DECIMAL,
  message TEXT
);
```

## Quick Test - Try Minimal Data

If you want to test with absolute minimum:

```typescript
// In app/donation/page.tsx, try:
const donationData = {
	amount: amount,
};
```

If this works, we know the table exists and we just need to find the right
column names.

## Backend Endpoint Check

Your backend is at:

```
https://temple-backend-production-7324.up.railway.app
```

Check if there's API documentation or a README in your backend project that
shows the expected format.

## Next Steps

1. ✅ Try the current code (with snake_case)
2. ❌ If fails, check database schema
3. 📋 Share the column names
4. ✅ I'll update the code to match exactly

The error message will tell us exactly which column name is wrong!
