import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get('file');

  if (!file) {
    return NextResponse.json({ error: 'File parameter is required' }, { status: 400 });
  }

  // Prevent directory traversal attacks
  const safePath = path.normalize(file).replace(/^(\.\.(\/|\\|$))+/, '');
  
  const basePath = path.join(process.cwd(), 'src', 'content');
  const fullPath = path.join(basePath, safePath);

  // Ensure the resolved path starts with the base path
  if (!fullPath.startsWith(basePath)) {
    return NextResponse.json({ error: 'Invalid path' }, { status: 403 });
  }

  try {
    const content = fs.readFileSync(fullPath, 'utf8');
    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json({ error: 'File not found or inaccessible' }, { status: 404 });
  }
}
