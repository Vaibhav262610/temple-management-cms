# Video Slugs - Complete Reference

## Quick Setup

### Step 1: Add Slug Column

```sql
ALTER TABLE cms_videos
ADD COLUMN IF NOT EXISTS slug VARCHAR(100) UNIQUE;

CREATE INDEX IF NOT EXISTS idx_cms_videos_slug ON cms_videos(slug);
```

### Step 2: Update Your Existing Video

```sql
UPDATE cms_videos
SET slug = 'homepage-broadcast-main'
WHERE name = 'Broadcast Live';
```

### Step 3: Test

Refresh homepage - video should still work!

## All Video Slugs

### 📱 Homepage (`/`)

```
homepage-broadcast-main    → Main featured video (large)
homepage-video-1          → Small video 1 (Varansi at Night)
homepage-video-2          → Small video 2 (Chaar Dhaam Yatra)
homepage-video-3          → Small video 3 (Mahashivratri Temple)
homepage-video-4          → Small video 4 (OM Mahashivratri)
```

### 📺 Broadcast Page (`/broadcast`)

```
broadcast-live-main       → Main live stream
broadcast-featured-1      → Featured video 1
broadcast-featured-2      → Featured video 2
broadcast-featured-3      → Featured video 3
```

### 🖼️ Gallery Page (`/gallery`)

```
gallery-video-1          → Gallery video 1
gallery-video-2          → Gallery video 2
gallery-video-3          → Gallery video 3
gallery-video-4          → Gallery video 4
```

### 🙏 Puja Page (`/puja`)

```
puja-featured-video      → Featured puja video
```

### 📅 Events Page (`/events`)

```
events-featured-video    → Featured event video
```

## Admin Panel Dropdown Options

Copy this for your admin panel:

```javascript
const videoPositions = [
	// Homepage
	{ value: "homepage-broadcast-main", label: "Homepage - Main Broadcast" },
	{ value: "homepage-video-1", label: "Homepage - Video 1" },
	{ value: "homepage-video-2", label: "Homepage - Video 2" },
	{ value: "homepage-video-3", label: "Homepage - Video 3" },
	{ value: "homepage-video-4", label: "Homepage - Video 4" },

	// Broadcast Page
	{ value: "broadcast-live-main", label: "Broadcast - Main Live Stream" },
	{ value: "broadcast-featured-1", label: "Broadcast - Featured 1" },
	{ value: "broadcast-featured-2", label: "Broadcast - Featured 2" },
	{ value: "broadcast-featured-3", label: "Broadcast - Featured 3" },

	// Gallery Page
	{ value: "gallery-video-1", label: "Gallery - Video 1" },
	{ value: "gallery-video-2", label: "Gallery - Video 2" },
	{ value: "gallery-video-3", label: "Gallery - Video 3" },
	{ value: "gallery-video-4", label: "Gallery - Video 4" },

	// Other Pages
	{ value: "puja-featured-video", label: "Puja - Featured Video" },
	{ value: "events-featured-video", label: "Events - Featured Video" },
];
```

## How to Use in Admin Panel

### Form Example:

```html
<form>
	<label>Video Position</label>
	<select name="slug" required>
		<option value="">Select Position</option>
		<option value="homepage-broadcast-main">Homepage - Main Broadcast</option>
		<option value="homepage-video-1">Homepage - Video 1</option>
		<option value="homepage-video-2">Homepage - Video 2</option>
		<!-- ... more options ... -->
	</select>

	<label>Title</label>
	<input type="text" name="title" required />

	<label>Description</label>
	<textarea name="description"></textarea>

	<label>YouTube URL</label>
	<input type="url" name="video_url" required />

	<label>Thumbnail URL</label>
	<input type="text" name="thumbnail_url" />

	<button type="submit">Save Video</button>
</form>
```

### Save Handler:

```javascript
async function saveVideo(formData) {
	const response = await fetch("/api/cms/videos", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			slug: formData.slug,
			title: formData.title,
			description: formData.description,
			video_url: formData.video_url,
			thumbnail_url: formData.thumbnail_url,
			is_active: true,
		}),
	});

	if (response.ok) {
		alert("Video saved! It will appear on the website.");
	}
}
```

## Insert All Default Videos

```sql
-- Homepage Main
INSERT INTO cms_videos (slug, name, title, description, video_url, thumbnail_url, is_active)
VALUES
('homepage-broadcast-main', 'Homepage Main Broadcast', 'Daily Aaratis and Spiritual Discourses', 'Sabka Malik Ek – God is One.', 'https://www.youtube.com/watch?v=TKnufs85hXk', '/new_images/2018/02/Abstract-Artistic.jpg', true)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, title = EXCLUDED.title, video_url = EXCLUDED.video_url;

-- Homepage Small Videos
INSERT INTO cms_videos (slug, name, title, video_url, is_active)
VALUES
('homepage-video-1', 'Varansi at Night', 'Varansi at Night', 'https://www.youtube.com/watch?v=TKnufs85hXk', true),
('homepage-video-2', 'Chaar Dhaam Yatra', 'Chaar Dhaam Yatra', 'https://www.youtube.com/watch?v=TKnufs85hXk', true),
('homepage-video-3', 'Mahashivratri Temple', 'Mahashivratri Temple', 'https://www.youtube.com/watch?v=TKnufs85hXk', true),
('homepage-video-4', 'OM Mahashivratri', 'OM Mahashivratri', 'https://www.youtube.com/watch?v=TKnufs85hXk', true)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, title = EXCLUDED.title, video_url = EXCLUDED.video_url;
```

## Current Status

✅ Slug system implemented ✅ Homepage using `homepage-broadcast-main` slug ✅
API function `getVideoBySlug()` added ✅ Easy to manage from admin panel

## Next: Update Your Admin Panel

Add a dropdown with these slugs, and when admin saves a video with a slug, it
will automatically appear in the correct position on the website!
