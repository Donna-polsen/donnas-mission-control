# 🛠️ Tooling & Scripts Registry

*A live tracker of all custom scripts and tools authored to interface with the Makat system.*

### **Order Management Scripts**
- **`analyze_orders.js`**: Initial TRPC endpoint check.
- **`analyze_order_flags.js`**: Sweeps payload to categorize `filter` and `pendingActions`.
- **`prepare_analysis.js`**: Samples 17 representative orders (completed, inTransit, pending, finance Issues).
- **`run_deep_analysis_clean.js`**: Iterates through the sample, fetching detailed JSON profiles, event logs, and associated `chatId` arrays. Handles `gzip/brotli` decompression automatically.
- **`conclusions_analyzer.js`**: Parses the deep dataset to output quantitative metrics on documentation bottlenecks and chat volume.

### **System & Heartbeat Scripts**
- **`heartbeat_check.js`**: Basic pulse script designed to execute on a cron timer. Checks the API for unread messages and logs `HEARTBEAT_OK` to `HEARTBEAT_LOG.md`.
- **`fetch_chats.js`**: Pulls specific chat histories by ID to extract supplier and operator messages.

### **AgentSkills (OpenClaw Skills)**
- **`dashboard-tunnel`**: A custom OpenClaw skill. When the user says "Deploy dashboard", it kills existing localtunnels, boots `python3 -m http.server 8080`, spins up a new `localtunnel` instance, and returns the public link (`https://makat-ops-donna.loca.lt`).