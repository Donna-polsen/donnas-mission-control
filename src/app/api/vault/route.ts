import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: any = null;
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get('file');

  if (!supabase) {
    return NextResponse.json({ error: 'Database connection failed' }, { status: 500 });
  }

  try {
    if (!file) {
      // Return list of all vault files
      const { data, error } = await supabase
        .from('telemetry_state')
        .select('key')
        .like('key', 'vault_%');

      if (error) throw error;
      const files = data.map((d: any) => d.key.replace('vault_', ''));
      return NextResponse.json({ files });
    } else {
      // Return specific file content
      const { data, error } = await supabase
        .from('telemetry_state')
        .select('data')
        .eq('key', `vault_${file}`)
        .single();

      if (error || !data) {
        return NextResponse.json({ error: 'File not found or inaccessible' }, { status: 404 });
      }
      return NextResponse.json({ content: data.data.content });
    }
  } catch (error) {
    console.error('Error reading vault from Supabase:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
