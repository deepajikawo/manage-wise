// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tilusjoguxcbqlvanfsq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpbHVzam9ndXhjYnFsdmFuZnNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3MDI2NjcsImV4cCI6MjA1NTI3ODY2N30.jb0srd4tj3F00MldObbF73AY7vvOYbppQSWMFaz4mFg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);