# Broadcast Live Video - Setup Complete! ✅

## What I Did

### 1. Added API Function

Created `getVideoByName(name)` in `lib/api.ts` that:

- Fetches video from database by name
- Falls back to direct Supabase access if API endpoint doesn't exist
- Returns video data (title, description, video_url, thumbnail_url, etc.)

### 2. Updated Homepage

Modified `app/page.tsx` to:

- Fetch video with name "Broadcast Live" from database
- Display video URL dynamically
- Show video title, description, and thumbnail from database
- Show created date dynamically

## Database Setup Required

### Your Table Structure

Make sure your `cms_videos` table has these columns:

```
- id (UUID)
- name (VARCHAR) - "Broadcast Live"
- title (VARCHAR) - Display title
- description (TEXT) - Video description
- video_url (TEXT) - YouTube URL
- thumbnail_url (TEXT) - Thumbnail image path
- is_active (BOOLEAN) - TRUE
- created_at (TIMESTAMP)
```

### Insert Your Video

Run this SQL in Supabase:

```sql
INSERT INTO cms_videos (
  name,
  title,
  description,
  video_url,
  thumbnail_url,
  is_active
)
VALUES (
  'Broadcast Live',
  'Daily Aaratis and Spiritual Discourses',
  'Sabka Malik Ek – God is One. We are devotees of Shri Shirdi Sai Baba, following His teachings of love, compassion, and service to humanity.',
  'YOUR_YOUTUBE_URL_HERE',
  '/new_images/2018/02/Abstract-Artistic.jpg',
  true
);
```

**Replace `YOUR_YOUTUBE_URL_HERE` with your actual YouTube link!**

## How It Works

1. Homepage loads
2. Fetches video from database where `name = "Broadcast Live"`
3. Displays:
   - Video thumbnail (from `thumbnail_url`)
   - Video title (from `title`)
   - Video description (from `description`)
   - Video link (from `video_url`)
   - Created date (from `created_at`)

## Test It

1. **Add video to database** (run the SQL above)
2. **Refresh homepage**: http://localhost:3000
3. **Check console** for: `"Broadcast Live video: {...}"`
4. **Click play button** - should open your YouTube video

## Update Video Anytime

Just update the database:

```sql
UPDATE cms_videos
SET
  video_url = 'NEW_YOUTUBE_URL',
  title = 'New Title',
  description = 'New Description'
WHERE name = 'Broadcast Live';
```

Refresh the page - changes appear immediately!

## Add More Videos

You can add more videos with different names:

- "Broadcast Live" - Homepage main video
- "Varansi Night" - Gallery video
- "Chaar Dhaam" - Another gallery video
- etc.

Then fetch them by name:

```typescript
const video = await getVideoByName("Varansi Night");
```

## Current Status

✅ API function added ✅ Homepage updated to fetch video ✅ Dynamic display
implemented ⏳ Waiting for you to add video to database

Once you add the video to your database, it will show on the homepage
automatically!
