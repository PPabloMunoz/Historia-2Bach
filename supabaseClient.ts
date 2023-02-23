import { createClient } from '@supabase/supabase-js'
import { Database } from './types'

const supabaseUrl = 'https://bwcnfcsmejfezpfaqrud.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Y25mY3NtZWpmZXpwZmFxcnVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQxNTI3NDEsImV4cCI6MTk4OTcyODc0MX0.ww8Bla3WvOkkHdIXR3__aTakv0XLhnl5uGuC2btmZgc'

export const supabase = createClient<Database>(supabaseUrl, supabaseKey)
