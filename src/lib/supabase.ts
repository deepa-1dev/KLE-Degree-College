import { createClient } from '@supabase/supabase-js';

// Supabase Project Credentials provided by the user
export const SUPABASE_PROJECT_ID = 'zrawphtxprowptnamuch';
export const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string) || `https://${SUPABASE_PROJECT_ID}.supabase.co`;
export const SUPABASE_ANON_KEY = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || 'sb_publishable_W1ylsLZ1KDA0vBrPwi85Ig_uJuecLKo';

// Initialize the Supabase Client with auto-headers
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export interface AppointmentRecord {
  id?: string;
  booking_ref: string;
  student_name: string;
  phone: string;
  email: string;
  parent_name?: string;
  qualification?: string;
  marks_percentage?: string;
  service_id: string;
  service_title: string;
  counselor_id?: string;
  counselor_name?: string;
  visit_date: string;
  time_slot: string;
  notes?: string;
  status?: string;
  created_at?: string;
}

export interface EnquiryRecord {
  id?: string;
  ref_id: string;
  student_name: string;
  email: string;
  phone: string;
  parent_phone?: string;
  course: string;
  qualification?: string;
  marks_percentage?: string;
  category?: string;
  city?: string;
  message?: string;
  status?: string;
  created_at?: string;
}

/**
 * Save appointment to Supabase database.
 * If the table does not exist or fails, saves to localStorage fallback and flags schema.
 */
export async function saveAppointment(record: AppointmentRecord): Promise<{
  success: boolean;
  savedInSupabase: boolean;
  error?: string;
  data?: any;
}> {
  // Always persist locally first so no booking is ever lost
  try {
    const existing = JSON.parse(localStorage.getItem('kle_appointments') || '[]');
    existing.unshift({ ...record, created_at: new Date().toISOString() });
    localStorage.setItem('kle_appointments', JSON.stringify(existing));
  } catch (err) {
    console.warn('Local storage error:', err);
  }

  try {
    const { data, error } = await supabase
      .from('appointments')
      .insert([
        {
          booking_ref: record.booking_ref,
          student_name: record.student_name,
          phone: record.phone,
          email: record.email,
          parent_name: record.parent_name || null,
          qualification: record.qualification || null,
          marks_percentage: record.marks_percentage || null,
          service_id: record.service_id,
          service_title: record.service_title,
          counselor_id: record.counselor_id || null,
          counselor_name: record.counselor_name || null,
          visit_date: record.visit_date,
          time_slot: record.time_slot,
          notes: record.notes || null,
          status: 'confirmed',
        },
      ])
      .select();

    if (error) {
      console.warn('Supabase insert warning:', error.message);
      return {
        success: true,
        savedInSupabase: false,
        error: error.message,
      };
    }

    return {
      success: true,
      savedInSupabase: true,
      data,
    };
  } catch (err: any) {
    console.error('Supabase exception:', err);
    return {
      success: true,
      savedInSupabase: false,
      error: err?.message || 'Network error',
    };
  }
}

/**
 * Save enquiry to Supabase enquiries table.
 */
export async function saveEnquiry(record: EnquiryRecord): Promise<{
  success: boolean;
  savedInSupabase: boolean;
  error?: string;
}> {
  try {
    const existing = JSON.parse(localStorage.getItem('kle_enquiries') || '[]');
    existing.unshift({ ...record, created_at: new Date().toISOString() });
    localStorage.setItem('kle_enquiries', JSON.stringify(existing));
  } catch (err) {
    console.warn('Local storage error:', err);
  }

  try {
    const { error } = await supabase
      .from('enquiries')
      .insert([
        {
          ref_id: record.ref_id,
          student_name: record.student_name,
          email: record.email,
          phone: record.phone,
          parent_phone: record.parent_phone || null,
          course: record.course,
          qualification: record.qualification || null,
          marks_percentage: record.marks_percentage || null,
          category: record.category || null,
          city: record.city || null,
          message: record.message || null,
          status: 'pending',
        },
      ]);

    if (error) {
      return { success: true, savedInSupabase: false, error: error.message };
    }

    return { success: true, savedInSupabase: true };
  } catch (err: any) {
    return { success: true, savedInSupabase: false, error: err?.message };
  }
}

/**
 * Fetch appointments from Supabase or fallback to local storage
 */
export async function getAppointments(): Promise<{
  fromSupabase: boolean;
  data: AppointmentRecord[];
  error?: string;
}> {
  try {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      const local = JSON.parse(localStorage.getItem('kle_appointments') || '[]');
      return { fromSupabase: false, data: local, error: error.message };
    }

    return { fromSupabase: true, data: data || [] };
  } catch (err: any) {
    const local = JSON.parse(localStorage.getItem('kle_appointments') || '[]');
    return { fromSupabase: false, data: local, error: err?.message };
  }
}

/**
 * Check connectivity to Supabase
 */
export async function checkSupabaseConnection(): Promise<{
  connected: boolean;
  hasAppointmentsTable: boolean;
  message: string;
}> {
  try {
    const { error } = await supabase.from('appointments').select('id').limit(1);
    if (!error) {
      return {
        connected: true,
        hasAppointmentsTable: true,
        message: 'Connected to Supabase and appointments table is active.',
      };
    }

    if (error.code === 'PGRST205') {
      return {
        connected: true,
        hasAppointmentsTable: false,
        message: 'Connected to project, but table "appointments" needs to be created.',
      };
    }

    return {
      connected: true,
      hasAppointmentsTable: false,
      message: error.message,
    };
  } catch (err: any) {
    return {
      connected: false,
      hasAppointmentsTable: false,
      message: err?.message || 'Connection failed',
    };
  }
}

/**
 * SQL migration schema for Supabase SQL Editor
 */
export const SUPABASE_SQL_SCHEMA = `-- 1. Create appointments table
CREATE TABLE IF NOT EXISTS public.appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_ref TEXT UNIQUE NOT NULL,
  student_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  parent_name TEXT,
  qualification TEXT,
  marks_percentage TEXT,
  service_id TEXT NOT NULL,
  service_title TEXT NOT NULL,
  counselor_id TEXT,
  counselor_name TEXT,
  visit_date DATE NOT NULL,
  time_slot TEXT NOT NULL,
  notes TEXT,
  status TEXT DEFAULT 'confirmed',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Create enquiries table
CREATE TABLE IF NOT EXISTS public.enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ref_id TEXT UNIQUE NOT NULL,
  student_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  parent_phone TEXT,
  course TEXT NOT NULL,
  qualification TEXT,
  marks_percentage TEXT,
  category TEXT,
  city TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- 4. Allow public anonymous inserts and selects for demo/production
DROP POLICY IF EXISTS "Allow public inserts on appointments" ON public.appointments;
CREATE POLICY "Allow public inserts on appointments" ON public.appointments
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public selects on appointments" ON public.appointments;
CREATE POLICY "Allow public selects on appointments" ON public.appointments
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public inserts on enquiries" ON public.enquiries;
CREATE POLICY "Allow public inserts on enquiries" ON public.enquiries
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public selects on enquiries" ON public.enquiries;
CREATE POLICY "Allow public selects on enquiries" ON public.enquiries
  FOR SELECT USING (true);
`;
