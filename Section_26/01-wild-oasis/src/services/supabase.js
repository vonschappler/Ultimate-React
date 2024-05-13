import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://phpolhbattkqhvdbwtky.supabase.co';

// error testing url
// export const supabaseUrl = 'https://dpwzlknyhcimzyoylvdq.supabase.com';

// here we are placing the key directly only because this is a public key protected by RLS with READ only permissions
// this may later be changed to something more secure, hidden by environmental variables
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBocG9saGJhdHRrcWh2ZGJ3dGt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MDk2ODksImV4cCI6MjAzMTE4NTY4OX0.2IM0f1COGafC2V-yT0Fw8eMzpocS4nUdIJUEgY19RTU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
