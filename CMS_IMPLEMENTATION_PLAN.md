# 🎯 CMS Implementation Plan

## Tasks to Complete:

### 1. ✅ Remove "Create Community" Functionality

- Remove `/community-create` page
- Remove "Create Community" button from homepage
- Keep only: Volunteer, Join Community, Donation, Contact

### 2. 📝 CMS for Home Banner

**Endpoint:** `GET/POST /api/cms/banner` **Fields:**

- Title
- Subtitle
- Background Image URL
- CTA Button Text
- CTA Button Link

### 3. 📝 CMS for Puja Page

**Endpoint:** `GET/POST /api/cms/pujas` **Fields:**

- Puja Name
- Description
- Image URL
- Category
- Schedule
- Price (if applicable)

### 4. 📝 CMS for About Page

**Endpoint:** `GET/POST /api/cms/about` **Fields:**

- Mission Statement
- Vision Statement
- History
- Team Members
- Statistics (devotees, years, events)

### 5. 📝 CMS for Donation Page

**Endpoint:** `GET/POST /api/cms/donations` **Fields:**

- Donation Campaigns
- Campaign Name
- Description
- Goal Amount
- Current Amount
- Image URL

### 6. 🖼️ Gallery Page

**Endpoint:** `GET/POST /api/cms/gallery` **Fields:**

- Image URL
- Title
- Description
- Category (Events, Temple, Festivals, etc.)
- Date

### 7. 📺 Broadcast Page Updates

**Endpoint:** `GET/POST /api/cms/broadcasts` **Fields:**

- Live Stream URL
- Schedule
- Past Broadcasts
- Video Title
- Video URL
- Thumbnail
- Date

## Implementation Steps:

### Step 1: Backend API Endpoints

Create these endpoints in your backend:

```typescript
// Banner CMS
GET  /api/cms/banner
POST /api/cms/banner
PUT  /api/cms/banner/:id

// Pujas CMS
GET  /api/cms/pujas
POST /api/cms/pujas
PUT  /api/cms/pujas/:id
DELETE /api/cms/pujas/:id

// About CMS
GET  /api/cms/about
POST /api/cms/about
PUT  /api/cms/about/:id

// Donations CMS
GET  /api/cms/donations
POST /api/cms/donations
PUT  /api/cms/donations/:id
DELETE /api/cms/donations/:id

// Gallery CMS
GET  /api/cms/gallery
POST /api/cms/gallery
PUT  /api/cms/gallery/:id
DELETE /api/cms/gallery/:id

// Broadcasts CMS
GET  /api/cms/broadcasts
POST /api/cms/broadcasts
PUT  /api/cms/broadcasts/:id
DELETE /api/cms/broadcasts/:id
```

### Step 2: Frontend Pages

Update these pages to fetch from CMS:

1. **Homepage (`app/page.tsx`)**

   - Fetch banner data
   - Display dynamic banner

2. **Puja Page (`app/puja/page.tsx`)**

   - Fetch pujas from CMS
   - Display puja cards dynamically

3. **About Page (`app/about-us/page.tsx`)**

   - Fetch about content
   - Display mission, vision, team

4. **Donation Page (`app/donation/page.tsx`)**

   - Fetch donation campaigns
   - Display progress bars

5. **Gallery Page (`app/gallery/page.tsx`)** - NEW

   - Fetch gallery images
   - Display in grid with lightbox

6. **Broadcast Page (`app/broadcast/page.tsx`)**
   - Fetch live stream URL
   - Fetch past broadcasts
   - Display schedule

### Step 3: Admin Panel

You'll need an admin panel to manage CMS content. This should be in your
separate admin portal project.

## Quick Implementation:

### 1. Remove Create Community

Delete these files:

- `app/community-create/page.tsx`

Update `app/page.tsx`:

- Remove "Create Community" card
- Keep 4 cards in a row

### 2. Create Gallery Page

```typescript
// app/gallery/page.tsx
"use client";

import { useState, useEffect } from "react";
import TempleLayout from "@/components/TempleLayout";

export default function Gallery() {
	const [images, setImages] = useState([]);

	useEffect(() => {
		// Fetch from API
		fetch("/api/cms/gallery")
			.then((res) => res.json())
			.then((data) => setImages(data));
	}, []);

	return (
		<TempleLayout title="Gallery">
			<div className="section section-padding">
				<div className="container">
					<div className="row">
						{images.map((img) => (
							<div key={img.id} className="col-lg-4 col-md-6">
								<img src={img.url} alt={img.title} />
							</div>
						))}
					</div>
				</div>
			</div>
		</TempleLayout>
	);
}
```

### 3. Update Broadcast Page

```typescript
// app/broadcast/page.tsx
"use client";

import { useState, useEffect } from "react";
import TempleLayout from "@/components/TempleLayout";

export default function Broadcast() {
	const [liveStream, setLiveStream] = useState(null);
	const [schedule, setSchedule] = useState([]);
	const [pastBroadcasts, setPastBroadcasts] = useState([]);

	useEffect(() => {
		fetch("/api/cms/broadcasts")
			.then((res) => res.json())
			.then((data) => {
				setLiveStream(data.liveStream);
				setSchedule(data.schedule);
				setPastBroadcasts(data.pastBroadcasts);
			});
	}, []);

	return (
		<TempleLayout title="Live Broadcast">
			{/* Live stream section */}
			{/* Schedule section */}
			{/* Past broadcasts section */}
		</TempleLayout>
	);
}
```

## Database Schema:

### Banner Table

```sql
CREATE TABLE cms_banner (
  id UUID PRIMARY KEY,
  title TEXT,
  subtitle TEXT,
  background_image_url TEXT,
  cta_button_text TEXT,
  cta_button_link TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

### Pujas Table

```sql
CREATE TABLE cms_pujas (
  id UUID PRIMARY KEY,
  name TEXT,
  description TEXT,
  image_url TEXT,
  category TEXT,
  schedule TEXT,
  price DECIMAL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

### Gallery Table

```sql
CREATE TABLE cms_gallery (
  id UUID PRIMARY KEY,
  image_url TEXT,
  title TEXT,
  description TEXT,
  category TEXT,
  date DATE,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

### Broadcasts Table

```sql
CREATE TABLE cms_broadcasts (
  id UUID PRIMARY KEY,
  title TEXT,
  video_url TEXT,
  thumbnail_url TEXT,
  is_live BOOLEAN DEFAULT false,
  scheduled_at TIMESTAMP,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

## Next Steps:

1. **Backend First:**

   - Create database tables
   - Create API endpoints
   - Test with Postman

2. **Frontend:**

   - Update pages to fetch from CMS
   - Add loading states
   - Add error handling

3. **Admin Panel:**

   - Create forms to manage content
   - Add image upload
   - Add CRUD operations

4. **Testing:**
   - Test all CMS features
   - Test image uploads
   - Test live updates

## Priority Order:

1. ✅ Remove Create Community (Quick)
2. 🖼️ Gallery Page (Medium)
3. 📺 Broadcast Page Updates (Medium)
4. 📝 Home Banner CMS (High)
5. 📝 Puja Page CMS (High)
6. 📝 About Page CMS (Medium)
7. 📝 Donation Page CMS (Medium)

## Estimated Time:

- Remove Create Community: 10 minutes
- Gallery Page: 2-3 hours
- Broadcast Updates: 2-3 hours
- Each CMS Feature: 3-4 hours
- Total: 20-25 hours

## Notes:

- Use your existing admin portal for CMS management
- All CMS data should be stored in Supabase
- Use the same API structure as your existing endpoints
- Add authentication to CMS endpoints
- Add image upload functionality (use Supabase Storage)

Would you like me to start implementing any specific feature first?
