# Banner API Setup Guide

## Issue Fixed

The frontend was trying to fetch banner data from `/api/cms/banner` but the
endpoint didn't exist yet, causing a "Route not found" error.

## Solution Applied

Updated the `getHomeBanner()` function to gracefully handle missing endpoints:

- Returns `null` if endpoint doesn't exist (404)
- Logs warnings instead of throwing errors
- Frontend shows default content if API fails

## Backend Setup Required

To enable dynamic banner content, add this endpoint to your backend:

### Endpoint: `GET /api/cms/banner`

**Response Format:**

```json
[
	{
		"id": "uuid",
		"title": "home banner",
		"subtitle": "Optional subtitle",
		"description": "Sabka Malik Ek – God is One. We are devotees of Shri Shirdi Sai Baba...",
		"image_url": "https://your-cdn.com/banner-image.jpg",
		"button_text": "Become a Devotee",
		"button_link": "/contact-us",
		"created_at": "2025-01-01T00:00:00Z",
		"updated_at": "2025-01-01T00:00:00Z"
	}
]
```

### Database Table: `cms_banner`

```sql
CREATE TABLE cms_banner (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255),
  description TEXT,
  image_url TEXT,
  button_text VARCHAR(100),
  button_link VARCHAR(255),
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert default home banner
INSERT INTO cms_banner (title, subtitle, description, image_url, button_text, button_link)
VALUES (
  'home banner',
  'Welcome to Shri Shirdi Sai Baba Mandir',
  'Sabka Malik Ek – God is One. We are devotees of Shri Shirdi Sai Baba, following His teachings of love, compassion, and service to humanity.',
  '/temple/assets/img/banner/9.jpg',
  'Become a Devotee',
  '/contact-us'
);
```

### Backend Implementation Example (Node.js/Express)

```javascript
// routes/cms.js
router.get("/cms/banner", async (req, res) => {
	try {
		const { data, error } = await supabase
			.from("cms_banner")
			.select("*")
			.eq("status", "active")
			.order("created_at", { ascending: false });

		if (error) throw error;

		res.json(data);
	} catch (error) {
		console.error("Error fetching banner:", error);
		res.status(500).json({ message: "Failed to fetch banner" });
	}
});
```

## Current Behavior

**Without Backend Endpoint:**

- Frontend shows default hardcoded banner content
- No errors displayed to user
- Console shows warning: "Banner endpoint not available: 404"

**With Backend Endpoint:**

- Frontend fetches and displays dynamic banner from database
- Admin can update banner content via CMS
- Changes reflect immediately on homepage

## Testing

1. **Test without backend:** Page loads with default content ✅
2. **Test with backend:**
   - Add the endpoint to your backend
   - Insert data into `cms_banner` table with title "home banner"
   - Refresh homepage - should show database content

## Admin Panel Integration

To allow admins to edit the banner, create an admin page at `/admin/banner`
that:

1. Fetches current banner data
2. Provides form to edit: title, subtitle, description, image_url, button_text,
   button_link
3. Submits updates via `PUT /api/cms/banner/:id`

## Next Steps

1. ✅ Frontend updated to handle missing endpoint gracefully
2. ⏳ Add `GET /api/cms/banner` endpoint to backend
3. ⏳ Create `cms_banner` table in database
4. ⏳ Insert default banner data
5. ⏳ Build admin interface for banner management
