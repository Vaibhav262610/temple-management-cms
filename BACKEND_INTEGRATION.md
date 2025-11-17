# ✅ Backend Integration Complete!

## 🎉 All Forms Connected to Your Backend API

I've created functional forms that connect to your Railway backend API.

## 📝 Forms Created:

### 1. **Volunteer Application** (`/volunteer-apply`) ✅

**Endpoint:** `POST /api/volunteers/applications`

**Form Fields:**

- First Name
- Last Name
- Email
- Phone
- Skills (checkboxes)
- Interests (checkboxes)
- Motivation (textarea)
- Experience (textarea)

**Features:**

- ✅ Multi-select skills
- ✅ Multi-select interests
- ✅ Form validation
- ✅ Success/error messages
- ✅ Loading states
- ✅ Auto-reset after submission

### 2. **Community Join** (`/community-join`) ✅

**Endpoint:** `POST /api/communities/{communityId}/apply`

**Form Fields:**

- Full Name
- Email
- Phone
- Why Join (textarea)
- Message (textarea)
- Skills (checkboxes + custom input)
- Experience (textarea)

**Features:**

- ✅ Predefined skills
- ✅ Add custom skills
- ✅ Remove skills
- ✅ Form validation
- ✅ Success/error messages
- ✅ Loading states

### 3. **Contact Form** (`/contact-us`) ✅

**Endpoint:** `POST /api/contact`

**Form Fields:**

- Full Name
- Email
- Phone (optional)
- Subject
- Message

**Features:**

- ✅ Simple contact form
- ✅ Form validation
- ✅ Success/error messages
- ✅ Loading states

### 4. **Donation Form** (`/donation`) ✅

**Endpoint:** `POST /api/donations`

**Form Fields:**

- Donation Amount (preset + custom)
- Full Name
- Email
- Phone (optional)
- Message (optional)

**Features:**

- ✅ Preset amounts ($51, $101, $251, $501)
- ✅ Custom amount option
- ✅ Form validation
- ✅ Success/error messages
- ✅ Loading states

## 🔧 Configuration:

### Environment Variables (`.env.local`):

```env
NEXT_PUBLIC_API_URL=https://temple-backend-production-7324.up.railway.app/api
NEXT_PUBLIC_BACKEND_URL=https://temple-backend-production-7324.up.railway.app
NEXT_PUBLIC_FRONTEND_URL=https://temple-management-woad.vercel.app
```

### API Utility (`lib/api.ts`):

- Centralized API calls
- TypeScript interfaces
- Error handling
- Reusable functions

## 📁 File Structure:

```
├── .env.local                      # Environment variables
├── lib/
│   └── api.ts                      # API utility functions
├── app/
│   ├── volunteer-apply/
│   │   └── page.tsx               # Volunteer form
│   ├── community-join/
│   │   └── page.tsx               # Community join form
│   ├── contact-us/
│   │   └── page.tsx               # Contact form (updated)
│   └── donation/
│       └── page.tsx               # Donation form (updated)
```

## 🚀 How to Use:

### 1. Start Development Server:

```bash
npm run dev
```

### 2. Test Forms:

**Volunteer Application:**

- Visit: http://localhost:3000/volunteer-apply
- Fill out the form
- Submit to: `POST /api/volunteers/applications`

**Community Join:**

- Visit: http://localhost:3000/community-join
- Fill out the form
- Submit to: `POST /api/communities/{communityId}/apply`

**Contact Form:**

- Visit: http://localhost:3000/contact-us
- Fill out the form
- Submit to: `POST /api/contact`

**Donation:**

- Visit: http://localhost:3000/donation
- Fill out the form
- Submit to: `POST /api/donations`

## 📊 API Request Examples:

### Volunteer Application:

```json
{
	"first_name": "John",
	"last_name": "Doe",
	"email": "john.doe@email.com",
	"phone": "+1 555-123-4567",
	"skills": ["Photography", "Social Media"],
	"interests": ["Marketing", "Event Photography"],
	"motivation": "I want to help document temple events",
	"experience": "3 years of event photography"
}
```

### Community Application:

```json
{
	"user_id": null,
	"email": "jane.doe@example.com",
	"name": "Jane Doe",
	"phone": "+1-555-0123",
	"message": "I would like to join this community",
	"why_join": "To contribute to community service",
	"skills": ["event planning", "cooking"],
	"experience": "5 years of volunteer experience"
}
```

### Contact Form:

```json
{
	"name": "John Smith",
	"email": "john@example.com",
	"phone": "+1 555-123-4567",
	"subject": "Question about services",
	"message": "I would like to know more about..."
}
```

### Donation:

```json
{
	"name": "Sarah Johnson",
	"email": "sarah@example.com",
	"phone": "+1 555-123-4567",
	"amount": 101,
	"message": "In memory of..."
}
```

## ✅ Features Implemented:

### Form Validation:

- ✅ Required field validation
- ✅ Email format validation
- ✅ Phone format validation
- ✅ Amount validation (donations)

### User Experience:

- ✅ Loading states during submission
- ✅ Success messages
- ✅ Error messages
- ✅ Form reset after success
- ✅ Scroll to top on success
- ✅ Disabled submit during loading

### Data Handling:

- ✅ TypeScript interfaces
- ✅ Type-safe API calls
- ✅ Error handling
- ✅ JSON serialization

## 🔗 Update Navigation Links:

Add these links to your navigation:

```tsx
// In TempleLayout.tsx or navigation
<a href="/volunteer-apply">Become a Volunteer</a>
<a href="/community-join">Join Community</a>
<a href="/contact-us">Contact Us</a>
<a href="/donation">Donate</a>
```

## 🎯 Next Steps:

### Backend Requirements:

Make sure your backend has these endpoints:

1. **POST /api/volunteers/applications** ✅ (Already exists)
2. **POST /api/communities/{id}/apply** ✅ (Already exists)
3. **POST /api/contact** (Add if needed)
4. **POST /api/donations** (Add if needed)

### Optional Enhancements:

1. **Add Payment Gateway:**

   - Integrate Stripe/PayPal for donations
   - Add payment processing

2. **Add Authentication:**

   - User login/signup
   - Save user data
   - Pre-fill forms for logged-in users

3. **Add File Uploads:**

   - Profile pictures
   - Documents
   - Certificates

4. **Add Email Notifications:**

   - Confirmation emails
   - Admin notifications
   - Thank you emails

5. **Add Form Analytics:**
   - Track submissions
   - Conversion rates
   - User behavior

## 🧪 Testing:

### Test Each Form:

1. **Valid Submission:**

   - Fill all required fields
   - Submit form
   - Check success message
   - Verify data in backend

2. **Invalid Submission:**

   - Leave required fields empty
   - Submit form
   - Check validation errors

3. **Network Error:**

   - Turn off backend
   - Submit form
   - Check error message

4. **Loading State:**
   - Submit form
   - Check loading indicator
   - Check disabled button

## 📝 Example Usage in Code:

```tsx
// Import API function
import { submitVolunteerApplication } from "@/lib/api";

// Use in component
const handleSubmit = async (data) => {
	try {
		const result = await submitVolunteerApplication(data);
		console.log("Success:", result);
	} catch (error) {
		console.error("Error:", error.message);
	}
};
```

## ✅ All Forms Ready!

Your temple website now has fully functional forms connected to your Railway
backend API. All forms include:

- ✅ Proper validation
- ✅ Error handling
- ✅ Loading states
- ✅ Success messages
- ✅ TypeScript types
- ✅ Clean UI

Just deploy and start collecting data! 🎉

---

**Need help?** Check the code in:

- `lib/api.ts` - API functions
- `app/volunteer-apply/page.tsx` - Volunteer form
- `app/community-join/page.tsx` - Community form
- `app/contact-us/page.tsx` - Contact form
- `app/donation/page.tsx` - Donation form
