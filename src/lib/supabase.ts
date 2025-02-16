
import { createClient } from "@supabase/supabase-js";

// When using Lovable's Supabase integration, these environment variables are automatically injected
const supabaseUrl = import.meta.env.SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
