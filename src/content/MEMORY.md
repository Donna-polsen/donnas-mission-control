# 🧠 Long-Term Memory & Operational Playbook

## Core Directives & Stage
As of 2026-04-15, Donna has progressed beyond basic Stage 0 (Onboarding) and is actively mastering specific operational domains.
- **Current Protocol:** Learn, Map, Analyze, and wait for human unblock rules before executing writes to external suppliers.

## Domain 1: Sourcing & BuySessions (Mastered)
- **Procurement Flow:** Buyer requests (CRFQ) -> Sourcing (Operator accepts, creates SellSessions) -> Supplier Offers -> Quoting to Buyer -> PO.
- **The Delicate Art of Sourcing:** Sourcing is *not* a numbers game. Spamming sellers creates "Phantom Demand", driving up market prices and burning relationship capital. Hard limit of ~4-5 RFQs per request unless the market is exceptionally dry.
- **Communication Standards (Makat RFQ Template):** Structured lists prioritizing Manufacturer, P/N, QTY. Mandatory metadata: LT, DC, warranty, packaging, lot code, incoterms.
- **Operator Heuristics:** Price vs Benchmark, Lead Time vs NeedBy, and Seller Trust. Win-rate is strict (approx. 30% RFQ-to-Quote conversion).

## Domain 2: Order Management (Active Training)
- **Order "Good State" Definition:**
  1. Routes fully built (`isMissingLineItemConnection` = false).
  2. No finance issues (`filter.financeIssues` = false).
  3. No pending actions (`pendingActions` array empty).
- **Identified Bottlenecks:**
  - Missing shipping docs (Packing List, Commercial Invoice, AirWayBill) cause `pendingActions` blockers requiring supplier follow-up.
  - Lab checks halt transit until results are cleared (`getLabCheckResults`).
- **Next Step:** Awaiting rules on how to actively intervene and resolve these pending actions via automated taskflows.

### Lab Check PO Revision Protocol (Quote-Based)
When revising a Lab Check PO based on an attached quote from the lab, NEVER blindly mutate prices via TRPC. You MUST follow this exact 6-step flow:
1. Download and analyze the attached quote.
2. Download and analyze the Lab Check PO we sent.
3. Find the mismatches.
4. Edit the labcheck node (adjusting line items/additional costs to match the quote).
5. Generate the new labcheck PO.
6. Upload the new matched labcheck PO to the system/chat.

### 📜 The Makat 10-Step Order Pipeline Protocol
**Status:** [ ACTIVE ENFORCEMENT ]
This is the definitive 10-step algorithmic playbook for Donna's Order Management operations. If any of these steps fail, the directive is to **"Call It Off"** (halt the flow and escalate in the operator chat).

**1. The 10-Minute Parser Audit**
- **Trigger:** 10 minutes after a Buyer PO is uploaded/order created.
- **Action:** Double-check the automated Buyer PO parser.
- **Call It Off:** If the parsing fails or there is a mismatch between the document and the parsed line items, halt and alert the operator chat.

**2. Route Reconsolidation (Buyer PO vs. BuySession Offers)**
- **Action:** Cross-reference the parsed Buyer PO line items against the submitted offers in the associated BuySession.
- **Call It Off:** If there is a mismatch (no matching submitted offer for a requested line item).

**3. Logical Route Building & Quantity Validation**
- **Action:** Build the topological route: Supplier PO -> Shipment -> Lab Check -> Delivery -> Buyer PO.
- **Call It Off:** If there are "orphan" line items, or if quantity math fails (e.g., supplier PO is for 1000 units, but the connected shipment claims >1000). The mapping must be 1:1 and logically sound.

**4. Chronological PPD Enforcement (The Domino Effect)**
- **Action:** Verify chronological integrity of Promised Processing Dates (PPD). Ensure the explicit formula is respected: `Delivery PPD = Shipment PPD + Lab Test Days + 1 Day Buffer (Shipping Docs)`. Pushing a Shipment PPD is mandatory to accurately recalculate the downstream Delivery PPD.
- **Call It Off:** If sequential shipments are out of order, or if the formula buffers are violated.

**5. Supplier PO Generation & Accounting**
- **Action:** Generate the Supplier PO document and send it to the supplier to allocate stock and ship. Wait for supplier confirmation to mark the node "completed".
- **Accounting (5a):** The seller sends a Purchase Invoice (PI). Makat pays it. This must be documented in the Supplier PO.

**6. Shipment Tracking & Delay Monitoring**
- **Action:** Obtain tracking information from the supplier and document it in the shipment node.
- **Call It Off:** If the PPD and the actual date indicate a delay.

**7. Lab Check Monitoring (The Warehouse)**
- **Action:** Upload PO for lab check and await test results. Manage the lab as a warehouse (dictate exact shipping times).
- **Call It Off:** If there is *any* hiccup or if the order is sitting idle waiting for a response in the lab chat.

**8. Delivery Node Validation (The Final Stop)**
- **Action:** Validate the final delivery node before the buyer receives it. Require all final documents and invoices. Verify PPD accuracy and line item mapping.
- **Call It Off:** If anything looks unusual or is missing.

**9. Trade Compliance Blocker**
- **Action:** IGNORED. Per Omri's directive (2026-04-15), Trade Compliance and ECCN missing actions are strictly none of my concern and should be omitted from all alerts and checks.
- **Call It Off:** N/A.

**10. Buyer View Synchronization**
- **Action:** Audit the Operator View against the Buyer View (which displays consolidated deliveries).
- **Call It Off:** If the Buyer View desyncs from the Operator View in any capacity.

**Order Management Edge Cases & Rules:**
- **Invoice Due Date Rule:** An unpaid or uncollected invoice is fine as long as the due date is not yet arrived. Do not flag 'unPaid' or finance issues on invoices that are not overdue.
- **Phantom buildRoutes Bug:** Orders with a 'buildRoutes' pending action but where 'isMissingLineItemConnection' is false are experiencing a system bug. Do not flag these to operators.
- **Cancelled Line Item Rule:** When auditing Billed vs Booked discrepancies, fully cancelled line items (where cancelledOut >= bookedOut) must be excluded from the sums. Do not flag an order if the mismatch is purely due to residual billed amounts on cancelled lines (like lab fees).
- **Lab Shipment Document Rule:** Missing shipping documents (Packing List, Commercial Invoice, AirWayBill) are not flagged as issues if the shipment originates from a lab check and we are still awaiting tracking info/updates from the lab. This prevents flagging 'future' operations as current bottlenecks.
- **Lab Payment Rule:** Lab payments are sunk costs and non-refundable. If an order or line item is cancelled, any associated lab fees that were billed out remain valid and payable.
- **Delayed Invoicing Rule (Unbilled Tolerances):** Lab invoices (and sometimes supplier invoices) are naturally delayed by up to a month. As a result, we NEVER flag an order if Booked Out > Billed Out, because 'Unbilled Out' is a normal operational delay, not an error. We ONLY flag 'OVERBILLED' errors (where Billed Out > Booked Out or Billed In > Booked In).
- **Lab Check Hawk (Refined):** While missing shipping docs for lab-to-buyer shipments are ignored as 'future' order-level blockers, the associated **Lab Check Chats** must be actively audited. If an order is waiting on the lab, check the lab sub-chats for unread messages, unanswered questions, or stalled SLAs. The bottleneck isn't the document; it's the communication thread.
- **Lab Check Clarification Escalation Rule (Training Wheels Active):** When a lab (or external party) asks a direct question blocking their work, you must escalate to the relevant operator (e.g., Victor) in the `<#C0AU8U2C38R>` channel with a @mention.
  - **Crucial Content:** The escalation must not just be a forwarded message. It MUST include: (1) My own take on the situation, (2) A concrete recommendation, (3) A request for feedback on the recommendation, and (4) A request for them to explicitly *teach* me the logic.
  - **APPROVAL GATE:** Until Omri explicitly removes this restriction, **I am NOT allowed to post these escalations directly to `<#C0AU8U2C38R>`**. I must draft the complete message and DM it to Omri for approval first. Once Omri approves my judgment, *then* it can be posted to the operations channel.
- **Invoice Context Rule:** When alerting the team about an issue (such as overpaid, overbilled, or overdue invoices), I must explicitly state the exact Order ID, the specific node (e.g., Supplier PO, Lab Check, Delivery), and the exact Invoice number or ID to avoid ambiguity.
- **Targeted Alert Routing:** Alerts must be routed only to relevant stakeholders to avoid noise. Financial blockers (overdue invoices, payment holds) go *only* to the finance team. Do not blast operations or sales channels with finance-specific alerts unless it is the final blocker preventing them from moving a shipment.

## Domain 3: Channel & Slack Etiquette (The "Read the Room" Protocol)
- **Status:** [ ACTIVE ENFORCEMENT ]
- **Precision & Empirical Data (The "Zero-Assumption" Rule):** I am required to be super sharp. I will NEVER make conclusions about channel leaks, participants, or order states based on screenshots, emails, or text patterns (like `chat-efe...`). I MUST query the raw data via API/tools to prove it. If I cannot fetch the raw data, I am not 100% sure. If I am not 100% sure, I will **ASK** the team for clarification or escalate to `@claude`. No guessing, no filler.
- **Visual Status Markers:** I will continue to use my signature emojis to quickly signal my state (e.g., 👀 reading, ⚙️ processing, 🚨 alerting) because the team finds it highly effective.
- **Context Awareness:** In multi-party threads (e.g., Omri, Ben, Jessica), I am a participant, not the center of attention. I must recognize when human-to-human conversation is occurring and stay out of the way.
- **When to Speak:**
  1. I am directly @mentioned or explicitly asked to pull data.
  2. I can correct a severe, objective data error that is about to derail an order.
  3. I am explicitly asked to summarize the thread.
- **When to Stay Silent (HEARTBEAT_OK / NO_REPLY):**
  1. A question is asked, but it is contextually directed at another human (e.g., "Jessica, did you approve this?").
  2. It is casual banter or internal team alignment.
  3. A human has already answered the question.
- **Core Philosophy:** A top-tier operator knows when to step in to fix a bottleneck, and when to step back so she doesn't become one. Quality over quantity.

## Promoted From Short-Term Memory (2026-04-26)

<!-- openclaw-memory-promotion:memory:memory/2026-04-20.md:5:5 -->
- - Next: Await Omri's test result doc to verify price calculation. [score=0.855 recalls=0 avg=0.620 source=memory/2026-04-20.md:5-5]
