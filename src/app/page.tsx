"use client";

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { 
  Activity, Settings, Terminal, Map, LayoutGrid, CheckCircle2,
  FolderOpen, FileText, Cpu, Clock, Menu, X, Bell
} from 'lucide-react';

export default function MissionControl() {
  const [activeView, setActiveView] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [systemStatus, setSystemStatus] = useState('All Systems Nominal');
  const [statusColor, setStatusColor] = useState('text-[#238636]');
  const [statusBg, setStatusBg] = useState('bg-[#238636]');
  const [statusBorder, setStatusBorder] = useState('border-[#238636]');
  const [currentTime, setCurrentTime] = useState('');
  const [vaultFileName, setVaultFileName] = useState<string | null>(null);
  const [vaultFileContent, setVaultFileContent] = useState<string | null>(null);
  const [isLoadingFile, setIsLoadingFile] = useState(false);
  const [pulseLogs, setPulseLogs] = useState<string[]>([]);
  const [systemData, setSystemData] = useState<any>(null);
  const [externalPulse, setExternalPulse] = useState({ github: { open_prs: 0 }, gmail: { unread_count: 0 } });
  const [tasks, setTasks] = useState<any[]>([]);
  const [agentsData, setAgentsData] = useState<any>({ donna: null, jarvis: null });

  const fetchTasks = async () => {
    try {
      const res = await fetch('/api/tasks');
      if (res.ok) {
        const data = await res.json();
        setTasks(data.tasks || []);
      }
    } catch (err) {
      console.error('Failed to fetch tasks', err);
    }
  };

  const updateTaskStatus = async (id: number, status: string) => {
    try {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status })
      });
      if (res.ok) {
        fetchTasks(); // Refresh
      }
    } catch (err) {
      console.error('Failed to update task', err);
    }
  };

  const openVaultFile = async (filename: string) => {
    setVaultFileName(filename);
    setVaultFileContent(null);
    setIsLoadingFile(true);
    try {
      const res = await fetch(`/api/vault?file=${encodeURIComponent(filename)}`);
      if (res.ok) {
        const data = await res.json();
        setVaultFileContent(data.content);
      } else {
        setVaultFileContent('Error loading file. HTTP status ' + res.status);
      }
    } catch (err: any) {
      setVaultFileContent('Error loading file: ' + err.message);
    } finally {
      setIsLoadingFile(false);
    }
  };

  useEffect(() => {
    setCurrentTime(new Date().toISOString().substring(11, 16) + ' UTC');
    const timer = setInterval(() => {
      setCurrentTime(new Date().toISOString().substring(11, 16) + ' UTC');
    }, 60000);

    const fetchTelemetry = async () => {
      try {
        const pulseRes = await fetch('/api/pulse');
        if (pulseRes.ok) {
          const data = await pulseRes.json();
          setPulseLogs(data.pulse || []);
        }
        const sysRes = await fetch('/api/system');
        if (sysRes.ok) {
          const data = await sysRes.json();
          setSystemData(data);
        }
        const extRes = await fetch('/api/external-pulse');
        if (extRes.ok) {
          const data = await extRes.json();
          setExternalPulse({
            github: { open_prs: data.github?.open_prs || 0 },
            gmail: { unread_count: data.gmail?.unread_count || 0 }
          });
        }
        const agentsRes = await fetch('/api/agents');
        if (agentsRes.ok) {
          const data = await agentsRes.json();
          setAgentsData(data);
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchTelemetry();
    fetchTasks();
    const pulseTimer = setInterval(() => {
      fetchTelemetry();
      fetchTasks();
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(pulseTimer);
    };
  }, []);

  const handleForcePulse = () => {
    setSystemStatus('Pulsing...');
    setStatusColor('text-[#58A6FF]');
    setStatusBg('bg-[#58A6FF]');
    setStatusBorder('border-[#58A6FF]');
    setTimeout(() => {
      setSystemStatus('All Systems Nominal');
      setStatusColor('text-[#238636]');
      setStatusBg('bg-[#238636]');
      setStatusBorder('border-[#238636]');
    }, 2000);
  };

  const handleEStop = () => {
    setSystemStatus('EMERGENCY STOP');
    setStatusColor('text-red-500');
    setStatusBg('bg-red-500');
    setStatusBorder('border-red-500');
    setTimeout(() => {
      setSystemStatus('All Systems Nominal');
      setStatusColor('text-[#238636]');
      setStatusBg('bg-[#238636]');
      setStatusBorder('border-[#238636]');
    }, 3000);
  };

  const renderContent = () => {
    if (activeView === 'roadmap') {
      return (
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          <div className="bg-[#161B22] border border-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-bold text-gray-200 flex items-center mb-4"><Map size={20} className="mr-2"/> Platform Roadmap</h2>
            <p className="text-sm text-gray-400 mb-6">Strategic overview of upcoming features and system upgrades.</p>
            
            <div className="space-y-6">
              <div className="border-l-2 border-[#238636] pl-4">
                <h3 className="text-sm font-bold text-gray-300">Phase 1: UI MVP</h3>
                <p className="text-xs text-gray-500 mt-1">Mobile responsiveness, static dashboard layout, and foundational styling.</p>
              </div>
              <div className="border-l-2 border-[#58A6FF] pl-4">
                <h3 className="text-sm font-bold text-gray-300">Phase 2: Vault API</h3>
                <p className="text-xs text-gray-500 mt-1">Secure local file access through Next.js API routes (reading MEMORY, INBOX_TRIAGE, ACTIVITY).</p>
              </div>
              <div className="border-l-2 border-[#238636] pl-4">
                <h3 className="text-sm font-bold text-gray-300">Phase 3: Live Telemetry</h3>
                <p className="text-xs text-gray-500 mt-1">Websocket integration for real-time pulse feed and direct Makat backend connectivity.</p>
              </div>
              <div className="border-l-2 border-[#238636] pl-4">
                <h3 className="text-sm font-bold text-gray-300">Phase 4: Gamified Telemetry/Office View</h3>
                <p className="text-xs text-gray-500 mt-1">Immersive operations view, agent analytics, and dynamic office-wide visualizations.</p>
              </div>
            </div>
          </div>
        </div>
      );
    } // end if roadmap

    return (
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        {/* Top Row: Agent Health & External Pulse */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#161B22] border border-gray-800 p-4 rounded-lg flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-bold text-gray-200">Donna (Lead Ops)</h3>
              <span className={`text-xs px-2 py-0.5 rounded font-mono ${agentsData?.donna?.status === 'Active' ? 'bg-[#238636] bg-opacity-20 text-[#238636]' : 'bg-[#58A6FF] bg-opacity-20 text-[#58A6FF]'}`}>
                {agentsData?.donna?.status || 'Idle'}
              </span>
            </div>
            <div className="text-xs text-gray-400 space-y-1">
              <p>Model: {agentsData?.donna?.model || 'Unknown'}</p>
              <p>Uptime: {agentsData?.donna?.uptime || '0m'}</p>
              <p>Active Tokens: {agentsData?.donna?.tokens ? `${(agentsData.donna.tokens / 1000).toFixed(1)}k` : '0'} / 200k</p>
            </div>
          </div>

          <div className="bg-[#161B22] border border-gray-800 p-4 rounded-lg flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-bold text-gray-200">Jarvis (Execution)</h3>
              <span className={`text-xs px-2 py-0.5 rounded font-mono ${agentsData?.jarvis?.status === 'Active' ? 'bg-[#D29922] bg-opacity-20 text-[#D29922]' : 'bg-gray-700 bg-opacity-50 text-gray-400'}`}>
                {agentsData?.jarvis?.status || 'Inactive'}
              </span>
            </div>
            <div className="text-xs text-gray-400 space-y-1">
              <p>Model: {agentsData?.jarvis?.model || 'Unknown'}</p>
              <p>Uptime: {agentsData?.jarvis?.uptime || '0m'}</p>
              <p>Active Tokens: {agentsData?.jarvis?.tokens ? `${(agentsData.jarvis.tokens / 1000).toFixed(1)}k` : '0'} / 200k</p>
            </div>
          </div>

          <div className="bg-[#161B22] border border-gray-800 p-4 rounded-lg flex flex-col col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-bold text-gray-200">External Pulse (Live Data)</h3>
              <span className="bg-[#238636] bg-opacity-20 text-[#238636] text-xs px-2 py-0.5 rounded font-mono">Synced</span>
            </div>
            <div className="flex space-x-6 mt-2">
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Unread Gmails</span>
                <span className="text-2xl font-mono text-[#58A6FF] mt-1">{externalPulse.gmail.unread_count}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Open GitHub PRs</span>
                <span className="text-2xl font-mono text-[#D29922] mt-1">{externalPulse.github.open_prs}</span>
              </div>
            </div>
          </div>
          <div className="bg-[#161B22] border border-gray-800 p-4 rounded-lg flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-bold text-gray-200">Host Telemetry</h3>
              <Cpu size={16} className="text-gray-400" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 mt-1">
              <div>Load: <span className="text-[#238636]">{systemData ? systemData.cpu.load[0] : '...'}</span></div>
              <div>RAM: <span className="text-gray-300">{systemData ? `${systemData.memory.used}/${systemData.memory.total}` : '...'}</span></div>
              <div>Uptime: <span className="text-gray-300">{systemData ? systemData.uptime : '...'}</span></div>
              <div>Cores: <span className="font-mono text-[#58A6FF]">{systemData ? systemData.cpu.cores : '...'}</span></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* The Grid (Kanban) */}
          <div className="xl:col-span-2 bg-[#161B22] border border-gray-800 rounded-lg flex flex-col">
            <div className="p-4 border-b border-gray-800 flex justify-between items-center">
              <h2 className="text-sm font-bold text-gray-200 flex items-center"><LayoutGrid size={16} className="mr-2"/> The Grid (Priority Tasks)</h2>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Backlog Column */}
              <div className="bg-[#0D1117] rounded p-2 border border-gray-800">
                <h4 className="text-xs font-semibold text-gray-500 mb-2 uppercase">Backlog</h4>
                {tasks.filter(t => t.status === 'backlog').map(task => (
                  <div key={task.id} className="bg-[#21262D] p-3 rounded text-xs border border-gray-700 mb-2 group">
                    <p className="font-medium text-gray-300 mb-1">{task.title}</p>
                    <p className="text-gray-500 line-clamp-2 mb-2">{task.description}</p>
                    <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] text-gray-500">{task.assignee}</span>
                      <button onClick={() => updateTaskStatus(task.id, 'in_progress_donna')} className="text-[10px] bg-gray-700 hover:bg-gray-600 px-2 py-0.5 rounded text-white">Start</button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* In Progress Column */}
              <div className="bg-[#0D1117] rounded p-2 border border-gray-800">
                <h4 className="text-xs font-semibold text-gray-500 mb-2 uppercase">In Progress</h4>
                {tasks.filter(t => t.status.startsWith('in_progress')).map(task => (
                  <div key={task.id} className="bg-[#21262D] p-3 rounded text-xs border border-[#58A6FF] mb-2 border-opacity-50 group">
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-medium text-gray-300">{task.title}</p>
                      <span className="text-[10px] bg-[#58A6FF] bg-opacity-20 text-[#58A6FF] px-1 rounded uppercase">
                        {task.status.split('_').pop()}
                      </span>
                    </div>
                    <p className="text-gray-500 line-clamp-2 mb-2">{task.description}</p>
                    <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => updateTaskStatus(task.id, 'done')} className="text-[10px] bg-[#238636] hover:bg-green-600 px-2 py-0.5 rounded text-white">Complete</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Done Column */}
              <div className="bg-[#0D1117] rounded p-2 border border-gray-800">
                <h4 className="text-xs font-semibold text-gray-500 mb-2 uppercase">Done</h4>
                {tasks.filter(t => t.status === 'done').map(task => (
                  <div key={task.id} className="bg-[#21262D] p-3 rounded text-xs border border-[#238636] mb-2 border-opacity-50 opacity-70 group">
                    <p className="font-medium text-gray-300 flex items-center mb-1">
                      <CheckCircle2 size={12} className="mr-1 text-[#238636]"/> {task.title}
                    </p>
                    <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => updateTaskStatus(task.id, 'backlog')} className="text-[10px] text-gray-500 hover:text-gray-300">Reopen</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* The Horizon */}
          <div className="bg-[#161B22] border border-gray-800 rounded-lg flex flex-col">
            <div className="p-4 border-b border-gray-800 flex justify-between items-center">
              <h2 className="text-sm font-bold text-gray-200 flex items-center"><Map size={16} className="mr-2"/> The Horizon</h2>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-300">Phase 1: UI MVP</span>
                  <span className="text-[#58A6FF]">100%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5">
                  <div className="bg-[#58A6FF] h-1.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-300">Phase 2: Vault API</span>
                  <span className="text-[#D29922]">80%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5">
                  <div className="bg-[#D29922] h-1.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-300">Phase 3: Live Telemetry</span>
                  <span className="text-gray-500">0%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5">
                  <div className="bg-gray-600 h-1.5 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-300">Phase 4: Gamified Telemetry/Office View</span>
                  <span className="text-gray-500">0%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5">
                  <div className="bg-gray-600 h-1.5 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <h4 className="text-xs font-semibold text-gray-400 mb-2">Upcoming Milestones</h4>
                <ul className="text-xs space-y-2 text-gray-500">
                  <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#D29922] mt-1.5 mr-2 shrink-0"></div> Hook up `fetch_inbox_context` to UI</li>
                  <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-1.5 mr-2 shrink-0"></div> Integrate Makat Websockets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ); // end return renderContent default
  }; // end renderContent()

  return (
    <div className="flex h-screen bg-[#0D1117] text-gray-300 font-sans overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - The Explorer */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50
        w-64 bg-[#161B22] border-r border-gray-800 flex flex-col shrink-0
        transform transition-transform duration-200 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:flex
      `}>
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="text-[#58A6FF]" size={24} />
            <h1 className="font-mono text-sm font-bold text-gray-100">MISSION CONTROL</h1>
          </div>
          <button className="md:hidden text-gray-400 hover:text-gray-200" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Views</h2>
              <ul className="space-y-1">
                <li 
                  className={`flex items-center space-x-2 rounded p-2 text-sm cursor-pointer ${activeView === 'dashboard' ? 'text-gray-300 bg-[#21262D]' : 'text-gray-500 hover:text-gray-300'}`}
                  onClick={() => { setActiveView('dashboard'); setIsMobileMenuOpen(false); }}
                >
                  <LayoutGrid size={16} /><span>Dashboard</span>
                </li>
                <li 
                  className={`flex items-center space-x-2 rounded p-2 text-sm cursor-pointer ${activeView === 'roadmap' ? 'text-gray-300 bg-[#21262D]' : 'text-gray-500 hover:text-gray-300'}`}
                  onClick={() => { setActiveView('roadmap'); setIsMobileMenuOpen(false); }}
                >
                  <Map size={16} /><span>Roadmap</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">The Vault</h2>
              <ul className="space-y-1 font-mono text-sm">
                <li className="flex items-center space-x-2 text-gray-400 p-1 cursor-pointer hover:text-gray-200">
                  <FolderOpen size={14} /><span>workspace/</span>
                </li>
                <li onClick={() => openVaultFile('MEMORY.md')} className="flex items-center space-x-2 text-gray-400 p-1 pl-4 cursor-pointer hover:text-gray-200">
                  <FileText size={14} className="text-[#238636]" /><span>MEMORY.md</span>
                </li>
                <li onClick={() => openVaultFile('INBOX_TRIAGE.md')} className="flex items-center space-x-2 text-gray-400 p-1 pl-4 cursor-pointer hover:text-gray-200">
                  <FileText size={14} className="text-[#D29922]" /><span>INBOX_TRIAGE.md</span>
                </li>
                <li onClick={() => openVaultFile('ACTIVITY.md')} className="flex items-center space-x-2 text-gray-400 p-1 pl-4 cursor-pointer hover:text-gray-200">
                  <FileText size={14} /><span>ACTIVITY.md</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-500">
          <span>v2.4.1</span>
          <Settings size={14} className="cursor-pointer hover:text-gray-300" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Nav */}
        <header className="h-14 shrink-0 border-b border-gray-800 bg-[#161B22] flex items-center justify-between px-2 md:px-4">
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="md:hidden p-2 text-gray-400 hover:text-gray-200" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={20} />
            </button>
            <span className="font-mono text-xs text-gray-400 hidden sm:flex items-center"><Clock size={12} className="mr-1"/> {currentTime || 'Loading...'}</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
             <div className={`flex items-center space-x-2 bg-opacity-20 ${statusColor} px-3 py-1 rounded-full text-xs font-medium border ${statusBorder} border-opacity-30 transition-colors duration-300`}>
               <span className={`w-2 h-2 rounded-full ${statusBg}`}></span>
               <span>{systemStatus}</span>
             </div>
          </div>

          <div className="flex items-center space-x-2 md:space-x-3">
             <button 
              onClick={handleForcePulse}
              className="bg-[#21262D] hover:bg-gray-700 text-[10px] md:text-xs px-2 md:px-3 py-1.5 rounded border border-gray-700 text-gray-300 cursor-pointer transition-colors"
             >
               Force Pulse
             </button>
             <button 
              onClick={handleEStop}
              className="bg-red-900 bg-opacity-20 hover:bg-red-900 hover:bg-opacity-40 text-red-500 text-[10px] md:text-xs px-2 md:px-3 py-1.5 rounded border border-red-900 border-opacity-50 cursor-pointer transition-colors"
             >
               E-Stop
             </button>
          </div>
        </header>

        {/* Mobile Status Bar (visible only on small screens) */}
        <div className="md:hidden px-4 py-2 bg-[#161B22] border-b border-gray-800 flex justify-center">
          <div className={`flex items-center space-x-2 bg-opacity-20 ${statusColor} px-3 py-1 rounded-full text-xs font-medium border ${statusBorder} border-opacity-30 transition-colors duration-300`}>
             <span className={`w-2 h-2 rounded-full ${statusBg}`}></span>
             <span>{systemStatus}</span>
           </div>
        </div>

        {/* Dynamic Content */}
        {renderContent()}

      </main>

      {/* Right Sidebar - The Pulse Feed */}
      <aside className="w-80 bg-[#0D1117] border-l border-gray-800 flex flex-col hidden lg:flex shrink-0">
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-sm font-bold text-gray-200 flex items-center"><Activity size={16} className="mr-2 text-[#238636]"/> The Pulse</h2>
          <div className="flex space-x-2 mt-3 text-[10px] uppercase tracking-wider">
            <span className="bg-[#21262D] text-gray-300 px-2 py-1 rounded cursor-pointer">All</span>
            <span className="text-gray-500 px-2 py-1 cursor-pointer hover:text-gray-300">Donna</span>
            <span className="text-gray-500 px-2 py-1 cursor-pointer hover:text-gray-300">System</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 font-mono text-xs space-y-4">
          {pulseLogs.length > 0 ? pulseLogs.map((log, i) => (
            <div key={i} className="flex items-start text-gray-300">
              <span className="break-words w-full">{log}</span>
            </div>
          )) : (
            <div className="text-gray-500">Waiting for telemetry...</div>
          )}
        </div>
      </aside>

      {/* Vault Modal Overlay */}
      {vaultFileName && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-[60] flex items-center justify-center p-4">
          <div className="bg-[#161B22] border border-gray-800 rounded-lg w-full max-w-4xl max-h-full flex flex-col shadow-2xl">
            <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-[#0D1117] rounded-t-lg">
              <h2 className="text-sm font-bold text-gray-200 flex items-center">
                <FileText size={16} className="mr-2 text-[#58A6FF]" />
                {vaultFileName}
              </h2>
              <button 
                className="text-gray-400 hover:text-gray-200"
                onClick={() => setVaultFileName(null)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-1 text-sm text-gray-300">
              {isLoadingFile ? (
                <div className="flex items-center justify-center h-32 text-gray-500">
                  <Activity size={24} className="animate-spin mr-2" />
                  Loading...
                </div>
              ) : (
                <div className="prose prose-invert prose-sm max-w-none">
                  <ReactMarkdown>{vaultFileContent || 'File is empty.'}</ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}