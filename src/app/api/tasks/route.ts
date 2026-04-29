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
    return NextResponse.json({ tasks: [] });
  }
  
  try {
    const { data, error } = await supabase
      .from('telemetry_tasks')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ tasks: data || [] });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!supabase) {
    return NextResponse.json({ error: 'DB not connected' }, { status: 500 });
  }
  
  try {
    const body = await request.json();
    const { action, id, status, assignee, title } = body;
    
    if (action === 'create') {
      const { data, error } = await supabase
        .from('telemetry_tasks')
        .insert([{ title, status: status || 'backlog', assignee: assignee || 'unassigned' }])
        .select();
      
      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ task: data[0] });
    }

    if (!id || !status) {
      return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
    }
    
    const updateData: any = { status, updated_at: new Date().toISOString() };
    if (assignee) updateData.assignee = assignee;

    const { data, error } = await supabase
      .from('telemetry_tasks')
      .update(updateData)
      .eq('id', id)
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ task: data[0] });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to update task' }, { status: 500 });
  }
}
