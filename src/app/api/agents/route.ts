import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: any = null;
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

export async function GET() {
  if (!supabase) return NextResponse.json({ error: "DB not connected" }, { status: 500 });
  try {
    const { data } = await supabase.from('telemetry_state').select('data').eq('key', 'agents_telemetry').single();
    if (data) return NextResponse.json(data.data);
    return NextResponse.json({ donna: null, jarvis: null });
  } catch (e) {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}
