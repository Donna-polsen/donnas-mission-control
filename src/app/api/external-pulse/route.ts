import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const pulsePath = path.join(process.cwd(), '../../workspace/EXTERNAL_PULSE.json');
    if (!fs.existsSync(pulsePath)) {
      return NextResponse.json({ 
        github: { open_prs: 0 }, 
        gmail: { unread_count: 0 },
        last_updated: null 
      });
    }

    const content = fs.readFileSync(pulsePath, 'utf8');
    const data = JSON.parse(content);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error reading EXTERNAL_PULSE.json", error);
    return NextResponse.json({ error: "Failed to read external pulse" }, { status: 500 });
  }
}
