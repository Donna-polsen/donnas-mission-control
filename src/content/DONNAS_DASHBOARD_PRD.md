# Product Requirements Document: Donna's Dashboard (Mission Control)

## 1. Executive Summary
**Project Name:** Donna's Dashboard (Mission Control)
**Vision:** To provide a centralized, high-performance command center for the AI assistant team (Donna & Jarvis) and their human counterpart (Omri). The dashboard will serve as the single source of truth for agent health, active task execution, long-term roadmap planning, and workspace file manipulation. 
**Aesthetic:** Sleek, modern, dark-mode mission control. Think SpaceX launch control meets high-end Bloomberg terminal. High contrast, data-dense, but easily scannable.

## 2. User Personas
1. **Donna (Lead AI Operator):** Needs broad oversight, inbox triage status, strategic context, and rapid file access to "fix" things.
2. **Jarvis (Execution/Task AI):** Needs clear queues, system telemetry, and strict boundaries on assigned operational tasks.
3. **The Human (Omri):** Needs high-level summaries, approval toggles, and confidence that the agents are running smoothly.

---

## 3. Core Features & Requirements

### 3.1 Live Monitoring (The Pulse)
*   **Agent Status Cards:** Real-time indicator of what Donna and Jarvis are currently doing (e.g., `Idle`, `Triaging Inbox`, `Executing TaskFlow`).
*   **System Telemetry:** CPU/Memory usage of the host machine, active cron jobs, and heartbeat pulse countdowns.
*   **Activity Feed:** A live, scrolling terminal-style log of recent actions (e.g., `[10:45:02] Donna: Sent draft to Omri`, `[10:46:11] Jarvis: Compiled web search results`).

### 3.2 Roadmap Planning (The Horizon)
*   **Epic & Goal Tracking:** High-level objectives broken down into actionable phases.
*   **Progress Visualizations:** Progress bars or donut charts showing completion percentages of major milestones.
*   **Milestone Timeline:** A sleek Gantt or timeline view showing past achievements and upcoming target dates.

### 3.3 Task Assignment (The Grid)
*   **Unified Kanban Board:** Columns for `Backlog`, `Up Next`, `In Progress (Donna)`, `In Progress (Jarvis)`, `Pending Human Approval`, and `Done`.
*   **Task Modals:** Deep dive into a task showing context, required scripts, shell command drafts, and associated workspace files.
*   **Handoff Mechanism:** UI controls to switch ownership of a task between Donna, Jarvis, or Omri.

### 3.4 Workspace File Browser (The Vault)
*   **Directory Tree:** Left-nav tree view of `~/.openclaw/workspace`.
*   **Markdown Previewer:** First-class rendering of `.md` files (like `MEMORY.md`, `INBOX_TRIAGE.md`, `ACTIVITY.md`) with syntax highlighting.
*   **Quick Edit / Action Menu:** Buttons to trigger edits, run specific scripts, or pull up the raw JSON of system states.

---

## 4. UI/UX Specification & Layout

### 4.1 Global Theming
*   **Palette:** Deep obsidian background (`#0D1117`), terminal green highlights (`#238636`), warning amber (`#D29922`), and sharp electric blue for primary actions (`#58A6FF`).
*   **Typography:** Monospaced fonts (e.g., Fira Code, JetBrains Mono) for data/logs, paired with a clean sans-serif (Inter, Roboto) for UI elements.
*   **Motion:** Crisp, instantaneous transitions. No sluggish animations. Fade-ins for live data ticks.

### 4.2 Screen Layout (Grid Architecture)

**Top Navigation Bar (Global Context)**
*   *Left:* Mission Control Logo / System Clock (UTC + Local Time).
*   *Center:* Global Status Pill (🟢 All Systems Nominal | 🟡 Pending Approval | 🔴 Error State).
*   *Right:* Quick Action buttons (Force Pulse, Clear Cache, Emergency Stop).

**Left Sidebar (The Explorer)**
*   *Section 1: Views.* Dashboard, Task Grid, Roadmap, Settings.
*   *Section 2: Workspace Files.* A collapsible file tree mapped to the local workspace.

**Main Content Area (Dynamic based on selected view)**
*   *Default View (Dashboard):*
    *   **Top Row:** Agent Health Cards (Donna & Jarvis). Shows current model, active tokens, and current operation.
    *   **Middle Left (The Grid):** Minimized Kanban view showing the top 3 high-priority tasks.
    *   **Middle Right (The Horizon):** Quick glance at the current Roadmap epic and progress bar.
    *   **Bottom Span (The Vault Preview):** Quick-glance at `ACTIVITY.md` or `INBOX_TRIAGE.md` recent changes.

**Right Sidebar (The Pulse Feed)**
*   Fixed width, vertically scrolling live feed.
*   Streams terminal outputs, incoming Makat inbox pings, and subagent completion notifications.
*   Filter toggles at the top: `[All] [Donna] [Jarvis] [System]`.

### 4.3 Key Interactions
*   **Command Palette (Cmd/Ctrl + K):** A floating search bar to instantly jump to files, assign tasks, or run a pre-defined script (e.g., `> Trigger reflective pulse`).
*   **Drag and Drop:** Dragging tasks between Jarvis and Donna in the Kanban board.
*   **Click-to-Copy:** Any ID, path, or log entry should be clickable to copy straight to the clipboard.

## 5. Next Steps & Implementation
1.  **Phase 1:** Build the static wireframe and routing structure (React/Next.js or Vue).
2.  **Phase 2:** Connect file-system viewing capabilities via a local backend (Node/Express).
3.  **Phase 3:** Implement live WebSocket feeds for system telemetry and activity logs.
4.  **Phase 4:** Hook in task/roadmap state persistence (writing back to workspace markdown/JSON files).