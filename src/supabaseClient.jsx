import { createClient } from "@supabase/supabase-js";
const supabaseUrl = 'https://czhvpwzghqnmaelfnetk.supabase.co'
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6aHZwd3pnaHFubWFlbGZuZXRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0NzA2NjIsImV4cCI6MjAxNTA0NjY2Mn0.vxNZzNBZl9pU3rMqAYzYP7_BSc1N049dKkuPpBJVqNc"

export const supabase = createClient(supabaseURL, supabaseAnonKey)