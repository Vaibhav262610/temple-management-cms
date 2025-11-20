# Donation 500 Error - Fixed & Debug Guide

## What I Fixed

### 1. **Added Better Error Handling**

- Now logs the exact error message from backend
- Shows detailed error in console
- Catches both JSON and text error responses

### 2. **Added More Fields to Donation Data**

Now sending:

```json
{
	"name": "John Doe",
	"email": "john@example.com",
	"phone": "123-456-7890",
	"amount": 100,
	"message": "Optional message",
	"payment_method": "online",
	"campaign_id": "1",
	"campaign_name": "Temple Maintenance & Development",
	"status": "pending"
}
```

### 3. **Added Console Logging**

- Logs data being sent
- Logs response from backend
- Logs any errors

## How to Debug

### Step 1: Open Browser Console

1. Go to http://localhost:3000/donation
2. Press F12 → Console tab
3. Fill out the form
4. Click "Donate Now"

### Step 2: Check Console Output

**You should see:**

```
Submitting donation: { name: "...", email: "...", ... }
```

**Then either:**

- ✅ `Donation result: { ... }` (Success!)
- ❌ `Donation API Error: { ... }` (Shows exact error)

### Step 3: Check the Error Message

The console will show the **exact error** from your backend. Common issues:

#### Error: "Missing required field: user_id"

**Solution:** Backend expects `user_id` field

```typescript
// Add to donationData:
user_id: null, // or get from auth
```

#### Error: "Invalid amount format"

**Solution:** Backend expects different number format

```typescript
// Try:
amount: amount.toFixed(2), // "100.00"
// or
amount: Math.round(amount * 100), // 10000 (cents)
```

#### Error: "Campaign not found"

**Solution:** Backend expects different campaign_id format

```typescript
// Try:
campaign_id: parseInt(selectedCampaign), // number instead of string
```

#### Error: "Database constraint violation"

**Solution:** Backend database has required fields we're not sending

## Test the Endpoint Directly

Test with curl to see what the backend expects:

```bash
curl -X POST https://temple-backend-production-7324.up.railway.app/api/donations \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "123-456-7890",
    "amount": 100,
    "message": "Test donation"
  }'
```

**Check the response:**

- If 200/201: Success! Note what fields worked
- If 400: Missing required fields (check error message)
- If 500: Backend error (check backend logs)

## Common Backend Requirements

Different backends might expect:

### Option 1: Minimal Fields

```json
{
	"name": "John Doe",
	"email": "john@example.com",
	"amount": 100
}
```

### Option 2: With User ID

```json
{
	"user_id": "uuid-here",
	"name": "John Doe",
	"email": "john@example.com",
	"amount": 100
}
```

### Option 3: With Payment Info

```json
{
	"donor_name": "John Doe",
	"donor_email": "john@example.com",
	"donation_amount": 100,
	"payment_method": "online",
	"campaign": "Temple Maintenance"
}
```

## Next Steps

1. **Check browser console** for the exact error message
2. **Share the error** with me so I can fix the exact issue
3. **Or check your backend code** to see what fields it expects

## Quick Fix: Minimal Data

If you want to test with minimal data first:

```typescript
// In app/donation/page.tsx, change donationData to:
const donationData = {
	name: formData.name,
	email: formData.email,
	amount: amount,
};
```

This sends only the essential fields. If this works, we know the backend doesn't
want the extra fields.

## Backend Database Schema

Your backend likely has a `donations` table. Check what columns it has:

```sql
-- Common schema:
CREATE TABLE donations (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(50),
  amount DECIMAL(10,2),
  message TEXT,
  payment_method VARCHAR(50),
  status VARCHAR(50),
  created_at TIMESTAMP
);
```

Make sure the fields we're sending match the database columns!

## Test Now

1. Restart dev server
2. Go to /donation
3. Fill form and submit
4. Check console for exact error
5. Share the error message with me

The detailed error logging will tell us exactly what's wrong!
