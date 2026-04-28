import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const activityPath = path.join(process.cwd(), 'src', 'content', 'ACTIVITY.md');
    if (!fs.existsSync(activityPath)) {
      return NextResponse.json({ pulse: ["No activity log found."] });
    }

    const content = fs.readFileSync(activityPath, 'utf8');
    const lines = content.trim().split('\n');
    const last20Lines = lines.slice(-20).filter(line => line.trim() !== '');

    return NextResponse.json({ pulse: last20Lines });
  } catch (error) {
    console.error("Error reading ACTIVITY.md", error);
    return NextResponse.json({ error: "Failed to read pulse" }, { status: 500 });
  }
}
