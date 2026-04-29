import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: any = null;
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

export async function GET() {
  if (!supabase) {
    return NextResponse.json({ roadmap: [] });
  }
  
  try {
    const { data, error } = await supabase
      .from('telemetry_roadmap')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ roadmap: data || [] });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch roadmap' }, { status: 500 });
  }
}
