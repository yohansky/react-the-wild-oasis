import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://dangttvvagckptryujbf.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhbmd0dHZ2YWdja3B0cnl1amJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5MzQ0MjQsImV4cCI6MjA3MzUxMDQyNH0.JMWgzOg0ksxw3U4v9X7XZGHW4RAABidNb-O45f1V8Ok';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
