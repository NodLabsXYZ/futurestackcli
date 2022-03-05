import { createClient } from '@supabase/supabase-js';
import getSecretKey from '../getSecretKey.js';

const secretKey = getSecretKey()
const supabaseUrl = 'http://localhost:54321'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24ifQ.625_WdcF3KHqz5amU0x2X5WWHP-OEs_4qj0ssLNHzTs'
const supabaseClient = createClient(
  supabaseUrl,
  supabaseAnonKey, {
  headers: {
    Authorisation: `Bearer ${secretKey}`
  }
});

export default supabaseClient;