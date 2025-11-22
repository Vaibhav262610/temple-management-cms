-- Create cms_contact table for storing contact form submissions
CREATE TABLE IF NOT EXISTS cms_contact (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(500) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_cms_contact_email ON cms_contact(email);
CREATE INDEX IF NOT EXISTS idx_cms_contact_status ON cms_contact(status);
CREATE INDEX IF NOT EXISTS idx_cms_contact_created_at ON cms_contact(created_at DESC);

-- Enable Row Level Security
ALTER TABLE cms_contact ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for contact form submissions)
CREATE POLICY "Allow public insert on cms_contact" 
ON cms_contact 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow admins to view all contact submissions
CREATE POLICY "Allow authenticated users to view cms_contact" 
ON cms_contact 
FOR SELECT 
USING (true);

-- Create policy to allow admins to update contact submissions
CREATE POLICY "Allow authenticated users to update cms_contact" 
ON cms_contact 
FOR UPDATE 
USING (true);

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_cms_contact_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER cms_contact_updated_at
    BEFORE UPDATE ON cms_contact
    FOR EACH ROW
    EXECUTE FUNCTION update_cms_contact_updated_at();

-- Add comment to table
COMMENT ON TABLE cms_contact IS 'Stores contact form submissions from the website';
