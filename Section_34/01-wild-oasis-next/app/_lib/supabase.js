import { createClient } from '@supabase/supabase-js';

const URL = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_KEY;

export const supabase = createClient(URL, KEY);
