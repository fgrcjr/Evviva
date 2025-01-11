/*
  # Initial Schema Setup for Daycare Website

  1. New Tables
    - `programs`
      - Program information and details
    - `enrollments`
      - Enrollment requests from parents
    - `contact_messages`
      - Contact form submissions
    
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated access
*/

-- Programs Table
CREATE TABLE IF NOT EXISTS programs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  age_range text NOT NULL,
  schedule text NOT NULL,
  price decimal(10,2) NOT NULL,
  capacity integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enrollments Table
CREATE TABLE IF NOT EXISTS enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_name text NOT NULL,
  child_name text NOT NULL,
  child_age integer NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  program text NOT NULL,
  start_date date NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'unread',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Programs Policies
CREATE POLICY "Programs are viewable by everyone"
  ON programs
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Programs are insertable by authenticated users only"
  ON programs
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Enrollments Policies
CREATE POLICY "Enrollments are insertable by everyone"
  ON enrollments
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enrollments are viewable by authenticated users only"
  ON enrollments
  FOR SELECT
  TO authenticated
  USING (true);

-- Contact Messages Policies
CREATE POLICY "Contact messages are insertable by everyone"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Contact messages are viewable by authenticated users only"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);