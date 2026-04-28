# 🏗️ Makat Infrastructure & API Topology
*This module tracks known system components, APIs, and procedures as Donna expands her capabilities beyond BuySession sourcing.*

## 1. Core Data Models
- **BuySessions:** The top-level procurement request from an OEM/Buyer.
- **LineItems:** The specific components requested (MPN, QTY, Mfr).
- **SellSessions:** The outbound RFQ flow directed to specific Suppliers.
- **Chats:** The 1-on-1 negotiation streams with Sellers or internal Operators.

## 2. API Triggers & TRPC Routes (Mapped)
### 🛒 BuySession Module
- \`buySession.getAllBuySessions\`
- \`buySession.getBuySession\`
- \`buySession.sellerSelectionGetSellers\`
- \`buySession.sellerSelectionGetMpns\`

### 💬 Chat Module
- \`chat.getAllChatsForOperator\`
- \`chat.chatPostMessage\`

### 🏭 Company & MPN Browser Module
- \`company.getAuthorizedSuppliersForManufacturer\`
- \`mpnBrowser.searchMpnForFlowPage\`

### 📦 Order Management Module
- `internalOrderGetAllOrders`: List all orders with delivery summaries and filter flags.
- `internalOrderGetOrder`: Get full order details with suppliers, shipments, and invoices. (Input: `id: string`)
- `internalOrderGetOrderEvents`: Get order event log and activity history. (Input: `id: string`)
- `internalOrderAddSupplierPo`: Create a new supplier PO on an order. (Input: `orderId: string`)

## 3. Next Training Modules (Pending Omri's Direction)
- [x] Order Management (From PO upload to Delivery)
- [ ] Supplier Offers & Quoting (Parsing incoming tables)
- [ ] Accounting & Analytics
- [ ] Automated State Management
- [ ] Accounting & Analytics
- [ ] Automated State Management

## 4. MCP (Model Context Protocol) Capabilities
Through the `makat` MCP Server, I am now natively wired to execute the following internal operations:

### 💬 Agent & Thread Management
- `agent_internal_agent_send_message`
- `agent_internal_agent_create_thread`
- `agent_internal_agent_list_threads`
- `agent_internal_agent_get_history`

### 🛒 BuySession Manipulation
- **Core:** `create_buy_session`, `get_all_buy_sessions`, `get_buy_session_display`, `approve_buy_session`, `close_buy_session`, `unclose_buy_session`, `force_close_buy_session`, `set_buy_session_ready`
- **Line Items:** `update_or_add_buy_session_line_item`, `delete_buy_session_line_item`
- **Assignments:** `assign_operators`, `unassign_operators`
- **Sellers:** `seller_selection_get_sellers`, `seller_selection_get_mpns`
- **System Settings:** `get_auto_assign_flow_settings`, `set_auto_assign_flow_settings`

### 🏭 SellSession & PO Generation
- **Core:** `create_sell_session`, `create_sell_session_from_buy_session`, `get_sell_sessions_display`, `set_to_ready`
- **Negotiation:** `reject_offer`, `log_offer`, `assign_sellers`
- **PO Management:** `generate_po`, `send_po`, `upload_po_confirmation`

### 📦 Order Management
- Pending implementation of direct MCP actions for: `internalOrderGetAllOrders`, `internalOrderGetOrder`, `internalOrderGetOrderEvents`, `internalOrderAddSupplierPo`. (Currently managed via manual HTTP/TRPC calls until natively bridged).
