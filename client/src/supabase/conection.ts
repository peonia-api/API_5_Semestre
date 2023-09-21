import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = "https://cbrqdjaeurmeftioqfaz.supabase.co/"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNicnFkamFldXJtZWZ0aW9xZmF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyOTMxNTQsImV4cCI6MjAxMDg2OTE1NH0.x72YC8z5XCC4Ndap7cocySdZGW-XxICaahSXfUOyG7A"; // Use a variável importada diretamente

export const supabase = createClient(supabaseUrl as string, supabaseKey as string)