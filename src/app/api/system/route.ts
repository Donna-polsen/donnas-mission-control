import { NextResponse } from 'next/server';
import os from 'os';

export async function GET() {
  try {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const memUsagePercent = ((usedMem / totalMem) * 100).toFixed(1);
    
    const cpus = os.cpus();
    const loadAvg = os.loadavg();
    
    const uptime = os.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);

    return NextResponse.json({
      cpu: {
        cores: cpus.length,
        load: loadAvg.map(l => l.toFixed(2)),
      },
      memory: {
        total: (totalMem / (1024 * 1024 * 1024)).toFixed(2) + ' GB',
        used: (usedMem / (1024 * 1024 * 1024)).toFixed(2) + ' GB',
        percent: memUsagePercent + '%',
      },
      uptime: `${hours}h ${minutes}m`,
      platform: os.platform(),
      release: os.release()
    });
  } catch (error) {
    console.error("Error fetching system telemetry", error);
    return NextResponse.json({ error: "Failed to fetch system stats" }, { status: 500 });
  }
}
