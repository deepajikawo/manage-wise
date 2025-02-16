
import { createClient } from "@supabase/supabase-js";

// When using Lovable's Supabase integration, these environment variables are automatically injected
const supabaseUrl = import.meta.env.SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY || "";

// Log the values to help with debugging (these will be visible in the browser console)
console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Anon Key:", supabaseAnonKey);

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase environment variables are missing. Make sure you have connected your Supabase project in the Lovable interface.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
