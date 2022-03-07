import 'dotenv/config'
import { createClient } from '@supabase/supabase-js';
import config from '../config.js';

const secretKey = process.env.FUTURE_STACK_SECRET_KEY
const supabaseUrl = process.env.SUPABASE_URL || config.supabaseUrl;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || config.supabaseAnonKey;

const supabaseClient = createClient(
  supabaseUrl,
  supabaseAnonKey, 
  {
    headers: {
      Authorisation: `Bearer ${secretKey}`
    }
  }
);

export default supabaseClient;