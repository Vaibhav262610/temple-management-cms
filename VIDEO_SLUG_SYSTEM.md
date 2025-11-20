# Video Slug System - Easy Management

## Concept

Each video position on the website has a unique **slug** (identifier). You add
this same slug in your admin panel, and the video appears in the right place
automatically.

## Video Positions & Their Slugs

### Homepage

| Position               | Slug                      | Description                 |
| ---------------------- | ------------------------- | --------------------------- |
| Main Broadcast Section | `homepage-broadcast-main` | Large featured video at top |
| Small Video 1          | `homepage-video-1`        | Varansi at Night            |
| Small Video 2          | `homepage-video-2`        | Chaar Dhaam Yatra           |
| Small Video 3          | `homepage-video-3`        | Mahashivratri Temple        |
| Small Video 4          | `homepage-video-4`        | OM Mahashivratri            |

### Broadcast Page

| Position         | Slug                    | Description               |
| ---------------- | ----------------------- | ------------------------- |
| Main Live Stream | `broadcast-live-stream` | Main live broadcast video |
| Featured Video 1 | `broadcast-featured-1`  | First featured video      |
| Featured Video 2 | `broadcast-featured-2`  | Second featured video     |

### Gallery Page

| Position        | Slug              | Description          |
| --------------- | ----------------- | -------------------- |
| Gallery Video 1 | `gallery-video-1` | First gallery video  |
| Gallery Video 2 | `gallery-video-2` | Second gallery video |
| Gallery Video 3 | `gallery-video-3` | Third gallery video  |

## Database Update

Run this SQL to add the slug column:

```sql
-- Add slug column if it doesn't exist
ALTER TABLE cms_videos
ADD COLUMN IF NOT EXISTS slug VARCHAR(100) UNIQUE;

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_cms_videos_slug ON cms_videos(slug);

-- Update existing video with slug
UPDATE cms_videos
SET slug = 'homepage-broadcast-main'
WHERE name = 'Broadcast Live';
```

## Insert Videos with Slugs

```sql
-- Homepage Main Broadcast
INSERT INTO cms_videos (slug, name, title, description, video_url, thumbnail_url, is_active)
VALUES (
  'homepage-broadcast-main',
  'Homepage Main Broadcast',
  'Daily Aaratis and Spiritual Discourses',
  'Sabka Malik Ek – God is One. We are devotees of Shri Shirdi Sai Baba.',
  'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
  '/new_images/2018/02/Abstract-Artistic.jpg',
  true
)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  video_url = EXCLUDED.video_url,
  thumbnail_url = EXCLUDED.thumbnail_url;

-- Homepage Small Video 1
INSERT INTO cms_videos (slug, name, title, video_url, is_active)
VALUES (
  'homepage-video-1',
  'Varansi at Night',
  'Varansi at Night',
  'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
  true
)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  title = EXCLUDED.title,
  video_url = EXCLUDED.video_url;

-- Homepage Small Video 2
INSERT INTO cms_videos (slug, name, title, video_url, is_active)
VALUES (
  'homepage-video-2',
  'Chaar Dhaam Yatra',
  'Chaar Dhaam Yatra',
  'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
  true
)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  title = EXCLUDED.title,
  video_url = EXCLUDED.video_url;

-- Homepage Small Video 3
INSERT INTO cms_videos (slug, name, title, video_url, is_active)
VALUES (
  'homepage-video-3',
  'Mahashivratri Temple',
  'Mahashivratri Temple',
  'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
  true
)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  title = EXCLUDED.title,
  video_url = EXCLUDED.video_url;

-- Homepage Small Video 4
INSERT INTO cms_videos (slug, name, title, video_url, is_active)
VALUES (
  'homepage-video-4',
  'OM Mahashivratri',
  'OM Mahashivratri',
  'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
  true
)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  title = EXCLUDED.title,
  video_url = EXCLUDED.video_url;
```

## How Admin Panel Will Work

### In Your Admin Panel Form:

```
Video Position: [Dropdown]
  - Homepage Main Broadcast (homepage-broadcast-main)
  - Homepage Video 1 (homepage-video-1)
  - Homepage Video 2 (homepage-video-2)
  - Homepage Video 3 (homepage-video-3)
  - Homepage Video 4 (homepage-video-4)
  - Broadcast Live Stream (broadcast-live-stream)
  - Gallery Video 1 (gallery-video-1)
  etc...

Title: [Input]
Description: [Textarea]
Video URL: [Input]
Thumbnail URL: [Input]
```

When admin saves, it stores with the selected slug. Frontend fetches by slug.

## Frontend Usage

```typescript
// Fetch by slug instead of name
const mainVideo = await getVideoBySlug("homepage-broadcast-main");
const video1 = await getVideoBySlug("homepage-video-1");
const video2 = await getVideoBySlug("homepage-video-2");
```

## Benefits

✅ **Easy to remember**: `homepage-broadcast-main` is clear ✅ **No confusion**:
Each position has unique slug ✅ **Admin friendly**: Dropdown shows all
positions ✅ **Flexible**: Can add new positions anytime ✅ **Safe**: Slug is
unique, can't duplicate

## Next Steps

1. ✅ I'll update the API to fetch by slug
2. ✅ I'll update homepage to use slugs
3. ✅ I'll create a complete slug reference
4. ⏳ You add slug dropdown in admin panel

Ready to implement this system?
