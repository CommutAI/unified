// Use the shared Supabase client from @commutai/supabase to avoid multiple instances
import { supabase } from '@commutai/supabase'
import type { Database } from '../types/database'

// Re-export with proper typing
export { supabase }
