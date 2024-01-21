import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://cbyspthjndaovuxvmmvn.supabase.co';

// here we are placing the key directly only because this is a public key protected by RLS with READ only permissions
// this may later be changed to something more secure, hidden by environmental variables
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNieXNwdGhqbmRhb3Z1eHZtbXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NzUzODksImV4cCI6MjAyMTM1MTM4OX0.uGjtzepNJgs9-3k0ORsu3vftIoFp5WUdS4Z8MVAmgyc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
