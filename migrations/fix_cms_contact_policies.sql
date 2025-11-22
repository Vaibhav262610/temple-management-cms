-- Fix RLS policies for cms_contact table
-- Run this if you're getting "row violates row-level security policy" error

-- Drop existing policies
DROP POLICY IF EXISTS "Allow public insert on cms_contact" ON cms_contact;
DROP POLICY IF EXISTS "Allow authenticated users to view cms_contact" ON cms_contact;
DROP POLICY IF EXISTS "Allow authenticated users to update cms_contact" ON cms_contact;

-- Recreate policies with correct permissions
-- Allow anyone (including anonymous users) to insert
CREATE POLICY "Allow public insert on cms_contact" 
ON cms_contact 
FOR INSERT 
WITH CHECK (true);

-- Allow anyone to view (you can restrict this later if needed)
CREATE POLICY "Allow authenticated users to view cms_contact" 
ON cms_contact 
FOR SELECT 
USING (true);

-- Allow anyone to update (you can restrict this later if needed)
CREATE POLICY "Allow authenticated users to update cms_contact" 
ON cms_contact 
FOR UPDATE 
USING (true);
