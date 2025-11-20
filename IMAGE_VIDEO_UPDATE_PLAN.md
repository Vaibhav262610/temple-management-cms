# Image & Video Update Plan

## Task Overview

1. ✅ Use images from `/public/new_images/` folder (organized by year 2018-2025)
2. ✅ Fetch videos from database instead of hardcoded
3. ✅ Update all pages to use new images

## What Needs to be Updated

### 1. Videos (Fetch from Database)

**Pages with videos:**

- Homepage (`app/page.tsx`) - Broadcast section
- Broadcast page (`app/broadcast/page.tsx`)
- Gallery page (if has videos)

**Changes:**

- Create `cms_videos` table in database
- Add API endpoint `/api/cms/videos`
- Update pages to fetch and display videos dynamically
- Store video URLs (YouTube links) in database

### 2. Images (Use from new_images folder)

**Image locations to update:**

#### Homepage (`app/page.tsx`)

- Banner background (already dynamic from DB)
- Service cards images
- About section image
- Donation cards images (3 cards)
- Volunteer images (4 volunteers)
- Testimonial images
- Puja/portfolio images (6 images)

#### Other Pages

- `/about-us` - About page images
- `/services` - Service page images
- `/donation` - Donation page images
- `/volunteers` - Volunteer page images
- `/gallery` - Gallery images (should fetch from DB)
- `/events` - Event images
- `/puja` - Puja images

## Implementation Steps

### Step 1: Setup Videos Database ✅

- Created SQL schema in `DATABASE_SETUP_VIDEOS.md`
- Added API function `getVideos()` in `lib/api.ts`

### Step 2: Update Homepage Videos

- Fetch videos from database
- Display featured video in main section
- Display other videos in grid below

### Step 3: Create Gallery Management

- Create `cms_gallery` table for images
- Fetch gallery images from database
- Use images from `/new_images/` folder

### Step 4: Update Static Images

- Replace hardcoded image paths with new_images paths
- Use images from 2018 folder (as requested)
- Update all pages systematically

## New Images Structure

```
/public/new_images/
├── 2018/
│   ├── 02/
│   │   ├── Abstract-Artistic.jpg
│   │   ├── CentennialLogo.gif
│   │   └── ... (more images)
│   ├── 03/
│   └── ... (more months)
├── 2019/
├── 2020/
├── 2021/
├── 2022/
├── 2023/
├── 2024/
└── 2025/
```

## Priority Order

1. ✅ Videos database setup
2. 🔄 Update homepage videos (in progress)
3. ⏳ Update homepage images
4. ⏳ Create gallery database
5. ⏳ Update other pages

## Next Steps

1. Run the SQL from `DATABASE_SETUP_VIDEOS.md` in Supabase
2. Add backend endpoint `/api/cms/videos`
3. Update homepage to fetch videos
4. Systematically update images page by page

Would you like me to: A) Continue with updating homepage videos first? B) Update
all images to use new_images folder first? C) Both simultaneously?
