import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('telemetry_pulse')
      .select('log_text')
      .order('id', { ascending: false })
      .limit(20);

    if (error || !data || data.length === 0) {
      return NextResponse.json({ pulse: ["No activity log found."] });
    }

    // Return in chronological order for terminal view
    const logs = data.map(row => row.log_text).reverse();
    return NextResponse.json({ pulse: logs });
  } catch (error) {
    console.error("Error reading from Supabase", error);
    return NextResponse.json({ error: "Failed to read pulse" }, { status: 500 });
  }
}
