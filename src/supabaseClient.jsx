
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://cnzifnrnkaxiwwggscgz.supabase.co'
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuemlmbnJua2F4aXd3Z2dzY2d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1NTI5NzcsImV4cCI6MjAxNjEyODk3N30.lT6UiinbQmcx-g5Fzc8C8l2eE-HY9Y7Hd2q0E4yav1g"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)