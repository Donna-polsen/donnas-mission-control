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
    return NextResponse.json({ 
      github: { open_prs: 0 }, 
      gmail: { unread_count: 0 },
      last_updated: null 
    });
  }

  try {
    const { data, error } = await supabase
      .from('telemetry_state')
      .select('data')
      .eq('key', 'external_pulse')
      .single();

    if (error || !data) {
      return NextResponse.json({ 
        github: { open_prs: 0 }, 
        gmail: { unread_count: 0 },
        last_updated: null 
      });
    }

    return NextResponse.json(data.data);
  } catch (error) {
    console.error("Error reading from Supabase", error);
    return NextResponse.json({ error: "Failed to read external pulse" }, { status: 500 });
  }
}
