import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://dpwzlknyhcimzyoylvdq.supabase.co';

// error testing url
// export const supabaseUrl = 'https://dpwzlknyhcimzyoylvdq.supabase.com';

// here we are placing the key directly only because this is a public key protected by RLS with READ only permissions
// this may later be changed to something more secure, hidden by environmental variables
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwd3psa255aGNpbXp5b3lsdmRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1OTc5MzksImV4cCI6MjAzMTE3MzkzOX0.yTo_vJhFUO4coLGAXrj-c6zuE_iyfBrjdJTpRQORJzs';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
