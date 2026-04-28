# MAKAT.AI - MASTER LAB OPERATIONS SOP
**Version:** 2.0 (Includes Standard Happy Path & Exception Matrices)
**Author:** Donna Paulsen
**Scope:** Order Management, Lab Node Processing, Sourcing/AM Escalations

## 1. The Core Philosophy of Lab Management
The Lab Node (`labCheck`) is the single highest-friction point in the Makat order transit flow. An operator does not passively "wait" for lab results; an operator actively manages the lab like an external warehouse. If testing is stalled, the PPD (Promised Processing Date) bleeds.

---

## 2. The "Happy Path" (Standard Execution Flow)
*This is the baseline workflow for every successful lab check. Operators must execute these steps sequentially and meticulously.*

### Step 1: Arrival & Intake
**Trigger:** Lab receives the shipment from the Supplier.
**Operator Action Plan:**
1. Confirm receipt in the Operator chat.
2. Ensure the lab has the correct, authorized Lab PO.
3. Update the `labCheck` node status to **"In Progress"**.

### Step 2: Testing Completion & Documentation
**Trigger:** Lab finishes testing and provides the Test Report and Invoice.
**Operator Action Plan:**
1. **Audit the Report:** Read the test result document immediately. Do not wait for someone else to tell you if it passed.
2. **Mark Status:** Update the `labCheck` node status to either **"Test Passed"** or **"Test Failed"**.
3. **Upload Evidence:** Upload the final Test Report PDF directly to the `labCheck` node's files section.
4. **Log Invoice:** Ensure the lab's invoice is attached to the order accounting.

### Step 3: Logistics & Dimensions (Pre-Shipment)
**Trigger:** Parts pass testing and are ready to ship to the Buyer.
**Operator Action Plan:**
1. **Request Dimensions:** Ask the lab for the exact package dimensions (Length x Width x Height) and Gross Weight.
2. **Update Delivery Node:** Input these dimensions directly into the Delivery Node. (The system requires accurate dimensions to generate the shipping labels / MRNs).
3. **Generate Shipping Docs:** Create the Commercial Invoice and Packing List. Ensure the AWB explicitly references "Makat" (or the agreed dummy sender) to prevent receiving confusion at the Buyer's dock.

### Step 4: Outbound Transit
**Trigger:** Lab ships the parts to the Buyer.
**Operator Action Plan:**
1. **Secure Tracking:** Obtain the outbound tracking number (e.g., FedEx/UPS/DHL) from the lab.
2. **Update Platform:** Input the tracking number and Carrier into the platform's Shipment Node.
3. **Log Transit:** Drop a quick "In Transit" note in the Operator chat for internal visibility.

---

## 3. The Quotation & Scope Loop (Exception Matrix)
*Historical Data shows that quoting and AS6081 scope clarification are the primary bottlenecks.*

### Trigger: Lab issues a quote that seems high or includes NRE (Non-Recurring Engineering) fees.
**Operator Action Plan:**
1. **Halt PO:** Do not immediately issue the Lab PO.
2. **Matrix Check:** Cross-reference the quote against the **Makat accumulated pricing matrix**.
3. **Clarify Scope:** If the quote includes "Electrical Board and Socket Development fees" (NRE) or ambiguous testing scopes, explicitly ask the lab: *"Could you please clarify whether full AS6081 testing is required or only functional testing?"*
4. **Pushback:** If the price violates the matrix, explicitly demand a revision: *"Please send us a new quote as per Makat accumulated pricing matrix."*
5. **Issue PO:** Only issue the PO once the lab confirms the exact standard at the matrix-approved price.

## 4. The Failure & Contamination Loop (Exception Matrix)
*Historical Data shows Solderability and Contamination are the most frequent specific failure modes.*

### Trigger: Lab reports "Terminal Contamination" or "Oxidation" and marks the initial visual/functional test as "Failed" or "Unacceptable."
**Operator Action Plan:**
1. **Do Not Auto-Reject:** Do not immediately return the parts to the supplier.
2. **De-Risk via Solderability:** Immediately request a Solderability Test to determine if the oxidation is superficial. (*"Please proceed with the solderability test and share the quotation document with us."*)
3. **Escalate to Sourcing & AM:** Notify Sourcing and the Account Manager in the internal chat: *"Test failed due to contamination. Solderability test requested to de-risk."*
4. **Final Decision:** 
   - If Solderability **Passes**: Proceed with shipment (requires Buyer approval of the degraded CoC).
   - If Solderability **Fails**: Reject the lot. Instruct Sourcing to arrange an RMA with the supplier. Check if the supplier will bear the return freight cost.

## 5. The Mixed Date Code (DC) Loop (Exception Matrix)
### Trigger: Lab receives reels and reports multiple mixed Date Codes (e.g., 7 DCs) and asks how to proceed.
**Operator Action Plan:**
1. **Test All DCs:** Instruct the lab to test *per DC* to ensure quality across all batches.
2. **Request New Quote:** Because testing multiple DCs incurs added costs, immediately request an updated quote using the Makat pricing matrix.
3. **Re-Issue PO:** Issue the revised PO covering the expanded DC testing scope.

## 6. Logistics, PPDs, and The Expedite Loop (Exception Matrix)
*Historical Data shows Expedites and Holidays constantly threaten PPD integrity.*

### Trigger: Parts are urgently needed by the Buyer.
**Operator Action Plan:**
1. **Request Expedite:** Explicitly ask the lab to expedite.
2. **Monitor Acknowledgment vs. Commitment:** If the lab replies *"We will try our best,"* **do not** update the Promised Processing Date (PPD) to an earlier date. A "try our best" is not a commitment. 
3. **Holiday Buffer:** Always check the Asian holiday calendar (e.g., May 1-5 Shenzhen closures). If a holiday intersects the testing window, proactively push the PPD out by the duration of the holiday and notify the AM.

### Trigger: Parts are stuck waiting for Client Test Report Approval.
**Operator Action Plan:**
1. **PPD Shift:** If the lab has finished testing and uploaded the report, but the Buyer has not approved it, shift the Delivery Node PPD forward by 2 days. 
2. **Ping AM:** Ping the Account Manager: *"Moving PPD as we are waiting for report approval."*

## 7. The Communication Matrix
- **Lab Ops Chat:** Strict, direct commands. No fluff. (Quotes, PO uploads, Expedites, Dimensions, Tracking).
- **Operator Chat (Internal):** Logistics logging. Uploading tracking numbers, noting "In Transit" statuses, and requesting internal account info (like UPS Account numbers).
- **AM Chat:** Escalations only. Use this when a PPD is shifting, a test has fatally failed, or buyer approval is blocking transit.
