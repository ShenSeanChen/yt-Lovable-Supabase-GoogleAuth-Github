// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://whupbsgvzmpenvvutort.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndodXBic2d2em1wZW52dnV0b3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMDk3MDAsImV4cCI6MjA2NjY4NTcwMH0.4_eBhFd-NdyMhDz5x9_LzEJPtTaxoDZ6n5Cqerxprh0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);