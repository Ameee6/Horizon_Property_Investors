/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact's full name
      - `phone` (text) - Contact's phone number
      - `email` (text) - Contact's email address
      - `property_address` (text) - Address of the property
      - `message` (text) - Additional message from the contact
      - `created_at` (timestamptz) - Timestamp of submission
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting contact submissions (public access for form submissions)
    - Add policy for authenticated users to view submissions (for admin purposes)

  3. Notes
    - This table stores contact form submissions from potential clients
    - Public can insert (submit forms) but only authenticated users can view
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  property_address text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);