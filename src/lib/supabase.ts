
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tilusjoguxcbqlvanfsq.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpbHVzam9ndXhjYnFsdmFuZnNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3MDI2NjcsImV4cCI6MjA1NTI3ODY2N30.jb0srd4tj3F00MldObbF73AY7vvOYbppQSWMFaz4mFg";

// Log the values to help with debugging (these will be visible in the browser console)
console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Anon Key:", supabaseAnonKey);

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase environment variables are missing. Make sure you have connected your Supabase project in the Lovable interface.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
