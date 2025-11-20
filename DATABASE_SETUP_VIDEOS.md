# Video Management - Database Setup

## Create Videos Table in Supabase

Run this SQL in your Supabase SQL Editor:

```sql
-- Create videos table
CREATE TABLE IF NOT EXISTS cms_videos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  category VARCHAR(100),
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_cms_videos_active ON cms_videos(is_active);
CREATE INDEX idx_cms_videos_featured ON cms_videos(is_featured);
CREATE INDEX idx_cms_videos_category ON cms_videos(category);

-- Insert sample videos (replace with your actual YouTube links)
INSERT INTO cms_videos (title, description, video_url, thumbnail_url, category, is_featured, display_order)
VALUES
  (
    'Daily Aaratis and Spiritual Discourses',
    'Sabka Malik Ek – God is One. We are devotees of Shri Shirdi Sai Baba, following His teachings of love, compassion, and service to humanity.',
    'https://www.youtube.com/watch?v=TKnufs85hXk',
    '/new_images/2018/02/Abstract-Artistic.jpg',
    'Daily Aarati',
    true,
    1
  ),
  (
    'Varansi at Night',
    'Experience the spiritual atmosphere of Varanasi',
    'https://www.youtube.com/watch?v=TKnufs85hXk',
    '/new_images/2018/02/CentennialLogo.gif',
    'Spiritual',
    false,
    2
  ),
  (
    'Chaar Dhaam Yatra',
    'Journey through the four sacred pilgrimage sites',
    'https://www.youtube.com/watch?v=TKnufs85hXk',
    '/new_images/2018/02/Abstract-Artistic.jpg',
    'Pilgrimage',
    false,
    3
  ),
  (
    'Mahashivratri Temple',
    'Celebrate Mahashivratri with devotion',
    'https://www.youtube.com/watch?v=TKnufs85hXk',
    '/new_images/2018/02/CentennialLogo.gif',
    'Festival',
    false,
    4
  ),
  (
    'OM Mahashivratri',
    'Sacred chants and prayers for Mahashivratri',
    'https://www.youtube.com/watch?v=TKnufs85hXk',
    '/new_images/2018/02/Abstract-Artistic.jpg',
    'Festival',
    false,
    5
  );

-- Create update trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_cms_videos_updated_at
  BEFORE UPDATE ON cms_videos
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

## Backend API Endpoint

Add this endpoint to your backend:

```javascript
// GET /api/cms/videos - Fetch all active videos
router.get("/cms/videos", async (req, res) => {
	try {
		const { category, featured } = req.query;

		let query = supabase
			.from("cms_videos")
			.select("*")
			.eq("is_active", true)
			.order("display_order", { ascending: true });

		if (category) {
			query = query.eq("category", category);
		}

		if (featured === "true") {
			query = query.eq("is_featured", true);
		}

		const { data, error } = await query;

		if (error) throw error;

		res.json(data);
	} catch (error) {
		console.error("Error fetching videos:", error);
		res.status(500).json({
			message: "Failed to fetch videos",
			error: error.message,
		});
	}
});

// GET /api/cms/videos/:id - Fetch single video
router.get("/cms/videos/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const { data, error } = await supabase
			.from("cms_videos")
			.select("*")
			.eq("id", id)
			.eq("is_active", true)
			.single();

		if (error) throw error;

		res.json(data);
	} catch (error) {
		console.error("Error fetching video:", error);
		res.status(404).json({
			message: "Video not found",
			error: error.message,
		});
	}
});
```

## Table Structure

| Column        | Type         | Description                             |
| ------------- | ------------ | --------------------------------------- |
| id            | UUID         | Primary key                             |
| title         | VARCHAR(255) | Video title                             |
| description   | TEXT         | Video description                       |
| video_url     | TEXT         | YouTube or video URL                    |
| thumbnail_url | TEXT         | Thumbnail image path                    |
| category      | VARCHAR(100) | Category (Daily Aarati, Festival, etc.) |
| is_featured   | BOOLEAN      | Show on homepage                        |
| is_active     | BOOLEAN      | Active/inactive                         |
| display_order | INTEGER      | Sort order                              |
| created_at    | TIMESTAMP    | Created date                            |
| updated_at    | TIMESTAMP    | Last updated                            |

## Usage

Videos will be fetched from database and displayed dynamically on:

- Homepage broadcast section
- Gallery/video page
- Any other video sections

You can manage videos through Supabase dashboard or create an admin panel.
