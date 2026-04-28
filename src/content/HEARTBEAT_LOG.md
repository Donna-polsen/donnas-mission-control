# 💓 System Pulse & Heartbeat Invocations

This log tracks every automated system pulse and heartbeat check.

### ⚙️ Configured Heartbeats

1. **Lab Chat Monitor (`heartbeat_check.js`)**
   - **Frequency:** Every pulse (cron/interval driven).
   - **Action:** Pulls the latest unread messages via Makat API (`chat.getAllChatsForOperator`).
   - **Logic:** Cross-references any new messages with `LEARNINGS.md`. If action is required, an alert is sent. Otherwise, logs `HEARTBEAT_OK`.

---

### ⏱️ Recent Invocations

* **[2026-04-14 20:41 UTC]** `SYSTEM PULSE` - Initialization & config check. (Status: `HEARTBEAT_OK`)
* **[2026-04-14 20:43 UTC]** `HEARTBEAT` - Initializing script `heartbeat_check.js`. Extracted API schemas. (Status: `HEARTBEAT_OK`)
* **[2026-04-15 12:00 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-15 12:51 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-15 13:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-15 14:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-15 16:41 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-15 17:29 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-15 17:43 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 535** (Created: 2026-04-15) - 🚨 **TROUBLE:** Pending Action: missingTradeCompliance, Pending Action: missingEccnInLineItem
- **Order ID: 534** (Created: 2026-04-14) - 🚨 **TROUBLE:** Pending Action: missingTradeCompliance, Pending Action: missingEccnInLineItem
- **Order ID: 533** (Created: 2026-04-14) - 🚨 **TROUBLE:** Pending Action: missingTradeCompliance, Pending Action: missingEccnInLineItem
- **Order ID: 531** (Created: 2026-04-13) - 🚨 **TROUBLE:** Pending Action: missingTradeCompliance, Pending Action: missingEccnInLineItem, Pending Action: missingEccnInLineItem
- **Order ID: 530** (Created: 2026-04-13) - 🚨 **TROUBLE:** Pending Action: missingTradeCompliance, Pending Action: missingEccnInLineItem, Pending Action: missingEccnInLineItem, Pending Action: missingEccnInLineItem
- **Order ID: 529** (Created: 2026-04-13) - 🚨 **TROUBLE:** Pending Action: missingTradeCompliance, Pending Action: missingEccnInLineItem, Pending Action: missingEccnInLineItem
- **Order ID: 528** (Created: 2026-04-10) - 🚨 **TROUBLE:** Pending Action: missingTradeCompliance, Pending Action: missingEccnInLineItem
- **Order ID: 527** (Created: 2026-04-10) - 🚨 **TROUBLE:** Pending Action: missingTradeCompliance, Pending Action: missingEccnInLineItem
- **Order ID: 526** (Created: 2026-04-09) - 🚨 **TROUBLE:** Pending Action: missingTradeCompliance, Pending Action: missingEccnInLineItem, Pending Action: missingEccnInLineItem
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingTaxInvoiceInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 524** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: missingTradeCompliance, Pending Action: missingEccnInLineItem, Pending Action: missingEccnInLineItem, Pending Action: missingEccnInLineItem, Pending Action: missingEccnInLineItem
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 522** (Created: 2026-04-05) - 🚨 **TROUBLE:** Pending Action: missingTradeCompliance, Pending Action: missingEccnInLineItem, Pending Action: missingEccnInLineItem, Pending Action: missingEccnInLineItem, Pending Action: missingEccnInLineItem
- **Order ID: 521** (Created: 2026-04-01) - 🚨 **TROUBLE:** Pending Action: missingTradeCompliance, Pending Action: missingEccnInLineItem
- **Order ID: 520** (Created: 2026-03-31) - 🚨 **TROUBLE:** Pending Action: missingTradeCompliance, Pending Action: missingEccnInLineItem
- **Order ID: 517** (Created: 2026-03-31) - 🚨 **TROUBLE:** Pending Action: missingTradeCompliance, Pending Action: missingEccnInLineItem
- **Order ID: 516** (Created: 2026-03-31) - 🚨 **TROUBLE:** Pending Action: missingTradeCompliance, Pending Action: missingEccnInLineItem
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

### ⏱️ [2026-04-15 17:51 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingTaxInvoiceInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-15 17:57 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-15 18:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingTaxInvoiceInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-15 18:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-15 18:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-15 19:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingTaxInvoiceInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-15 19:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-15 19:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-15 20:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingTaxInvoiceInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-15 20:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-15 20:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-15 21:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingTaxInvoiceInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-15 21:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-15 21:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-15 22:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingTaxInvoiceInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-15 22:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-15 22:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-15 23:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingTaxInvoiceInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-15 23:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-15 23:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 00:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingTaxInvoiceInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 00:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 00:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 01:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingTaxInvoiceInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 01:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 01:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 02:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingTaxInvoiceInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 02:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 02:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 03:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingTaxInvoiceInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 03:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 03:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 04:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingTaxInvoiceInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 04:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 04:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 05:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 05:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 05:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 06:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 06:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 06:57 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 07:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 07:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 07:57 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 08:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 08:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 08:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 09:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 09:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 09:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 10:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 10:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 10:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 11:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 11:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 11:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 12:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 12:27 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 12:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 13:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes
- **Order ID: 515** (Created: 2026-03-30) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 13:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 13:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 14:04 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 536** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 14:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 14:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 15:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 536** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 15:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 15:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 16:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 536** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 16:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 16:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 17:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 17:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 17:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 18:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 18:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 18:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 19:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 19:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 19:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 20:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 20:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 20:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 21:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 21:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 21:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 22:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 22:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 22:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-16 23:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-16 23:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-16 23:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 00:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 00:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 00:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 01:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 01:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 01:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 02:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 02:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 02:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 03:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 03:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 03:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 04:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 04:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 04:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 05:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 05:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 05:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 06:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 06:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 06:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 07:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 07:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 07:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 08:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 08:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 08:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 09:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 09:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 09:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 10:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 10:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 10:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 11:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 11:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 11:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 12:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 12:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 12:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 13:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 537** (Created: 2026-04-16) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 13:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 13:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 14:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 14:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 14:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 15:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 15:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 15:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 16:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 16:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 16:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 17:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 17:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 17:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 18:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 18:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 18:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 19:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 19:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 19:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 20:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 20:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 20:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 21:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 21:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 21:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 22:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 22:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 22:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-17 23:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-17 23:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-17 23:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 00:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 00:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 00:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 01:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 01:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 01:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 02:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 02:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 02:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 03:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 538** (Created: 2026-04-18) - 🚨 **TROUBLE:** Route Gap (Missing Line Item Connection)
- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 03:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 03:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 04:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 04:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 04:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 05:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 05:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 05:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 06:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 06:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 06:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 07:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 07:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 07:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 08:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 08:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 08:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 09:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 09:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 09:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 10:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 10:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 10:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 11:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 11:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 11:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 12:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 12:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 12:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 13:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 13:34 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 13:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 14:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 14:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 14:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 15:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 15:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 16:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 16:25 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 16:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 16:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 17:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 17:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 17:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 18:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 18:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 18:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 19:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 19:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 19:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 20:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 20:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 20:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 21:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 21:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 21:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 22:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 22:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 22:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-18 23:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-18 23:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-18 23:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 00:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-19 00:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 00:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 01:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-19 01:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 01:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 02:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-19 02:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 02:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 03:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-19 03:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 03:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 04:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-19 04:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 04:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 05:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-19 05:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 05:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 06:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-19 06:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 06:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 07:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-19 07:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 07:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 08:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-19 08:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 08:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 09:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-19 09:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 09:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 10:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

* **[2026-04-19 10:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 10:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 11:03 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

### ⏱️ [2026-04-19 11:48 UTC] Hourly Order Pulse
**Target:** 20 most recent orders.

🚨 **Anomalies Detected in Recent Orders:**

- **Order ID: 525** (Created: 2026-04-08) - 🚨 **TROUBLE:** Pending Action: getLabToBuyerShipmentTrackingNumber, Pending Action: missingPackingListInShipment, Pending Action: missingDeliverySlipInShipment, Pending Action: missingCommercialInvoiceInShipment, Pending Action: missingAirWayBillInShipment
- **Order ID: 523** (Created: 2026-04-07) - 🚨 **TROUBLE:** Pending Action: buildRoutes

**Action Required:** Operator intervention needed to clear the listed blockers.
---

### ⏱️ [2026-04-19 11:48 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 346** - 🚨 **TROUBLE:** OVERBILLED OUT (7088.00 vs 6583.00)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

### ⏱️ [2026-04-19 12:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 346** - 🚨 **TROUBLE:** OVERBILLED OUT (7088.00 vs 6583.00)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-19 12:06 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 12:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 12:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 13:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 346** - 🚨 **TROUBLE:** OVERBILLED OUT (7088.00 vs 6583.00)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-19 13:28 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 13:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 14:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 346** - 🚨 **TROUBLE:** OVERBILLED OUT (7088.00 vs 6583.00)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-19 14:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 14:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 15:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 346** - 🚨 **TROUBLE:** OVERBILLED OUT (7088.00 vs 6583.00)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-19 15:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 15:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 16:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 16:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 17:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-19 17:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 17:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 18:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-19 18:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 18:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 19:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-19 19:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 19:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 20:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-19 20:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 20:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 21:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-19 21:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 21:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 22:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-19 22:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 22:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-19 23:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-19 23:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-19 23:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 00:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 00:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 00:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 01:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 01:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 01:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 02:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 02:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 02:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 03:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 03:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 03:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 04:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 04:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 04:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 05:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 05:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 05:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 06:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 470** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 06:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 06:57 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 07:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83802.62), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 07:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 07:58 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 08:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 08:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 08:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 09:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 10:00 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 10:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 10:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 11:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 11:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 11:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 12:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 12:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 12:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 13:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 438** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 13:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 13:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 14:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 438** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 14:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 14:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 15:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 438** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 15:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 15:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 16:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 16:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 16:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 17:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (105). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 17:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 17:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 18:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (105). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 18:34 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 18:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 19:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (105). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 19:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 19:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 20:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (105). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 20:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 20:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 21:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (105). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 21:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 21:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 22:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (105). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 22:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 22:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-20 23:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (105). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-20 23:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-20 23:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 00:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (105). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 00:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 00:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 01:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (24 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 01:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 01:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 02:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (23 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 02:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 02:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 03:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (24 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 03:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 03:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 04:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (24 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 04:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 04:57 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 05:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (24 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (34605)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15330.29)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 502** - 🚨 **TROUBLE:** Overdue Unpaid Balance (64)
- **Order ID: 508** - 🚨 **TROUBLE:** Overdue Unpaid Balance (590)
- **Order ID: 533** - 🚨 **TROUBLE:** Overdue Unpaid Balance (5500)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 05:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 06:01 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 06:18 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 07:01 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 07:01 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 07:13 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 07:45 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 07:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 08:27 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 08:57 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 09:13 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 09:27 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 09:53 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 10:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 10:40 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 10:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 11:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 11:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 11:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 12:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 308** - 🚨 **TROUBLE:** OVERBILLED OUT (360.00 vs 295.00)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 12:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 12:57 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 13:11 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 13:23 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 13:53 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 13:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 14:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 14:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 15:22 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 15:52 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 15:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 16:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 16:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 16:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 17:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 17:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 17:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 18:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 18:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 18:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 19:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 19:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 19:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 20:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 20:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 20:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 21:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 21:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 21:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 22:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 22:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 22:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-21 23:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-21 23:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-21 23:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 00:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 00:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 00:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 01:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (23 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 541** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 01:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 01:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 02:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 02:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 02:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 03:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 03:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 03:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 04:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (23 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 04:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 04:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 05:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (23 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 05:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 05:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 06:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (23 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 491** - 🚨 **TROUBLE:** OVERBILLED OUT (84631.12 vs 83771.12), Overdue Unpaid Balance (18560)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 06:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 06:57 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 07:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (106). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146595.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 07:27 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 07:58 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 08:08 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (23 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** OVERBILLED OUT (147606.00 vs 146785.20), Overdue Unpaid Balance (147606)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 08:38 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 08:59 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 09:05 UTC] Hourly Order Pulse
**Target:** All Open Orders (108). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (24 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 466** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines, Overdue Unpaid Balance (617.87)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 543** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 09:37 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 09:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 10:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 10:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 10:59 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 11:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 11:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 11:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 12:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (107). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 12:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 12:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 13:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (108). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (22 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 475** - 🚨 **TROUBLE:** Overdue Unpaid Balance (11523)
- **Order ID: 479** - 🚨 **TROUBLE:** Overdue Unpaid Balance (295)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 495** - 🚨 **TROUBLE:** Overdue Unpaid Balance (255)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 13:27 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 13:59 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 14:11 UTC] Hourly Order Pulse
**Target:** All Open Orders (101). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (19 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 14:42 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 14:58 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 15:04 UTC] Hourly Order Pulse
**Target:** All Open Orders (101). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (19 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 15:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 15:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 16:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (101). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 16:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 16:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 17:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (101). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 17:34 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 17:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 18:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (101). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 18:59 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 19:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (101). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 19:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 19:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 20:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (101). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 20:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 20:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 21:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (101). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 21:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 21:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 22:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (102). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 544** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 22:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 22:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-22 23:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (102). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 544** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-22 23:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-22 23:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-23 00:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (102). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 539** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 544** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-23 00:34 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-23 00:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-23 01:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (102). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 544** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-23 01:33 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-23 01:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-23 02:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (102). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 544** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-23 02:34 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-23 02:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-23 03:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (102). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 544** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-23 03:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-23 03:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-23 04:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (102). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (131568)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 544** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-23 04:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-23 04:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-23 05:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (102). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (146625.2)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 544** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-23 05:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-23 05:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-23 06:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (102). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (146625.2)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 544** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-23 06:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-23 06:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-23 07:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (103). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (146625.2)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 545** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-23 07:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-23 07:57 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-23 08:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (103). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (146625.2)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 545** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-23 08:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-23 08:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-23 09:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (103). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (146625.2)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 545** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-23 09:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-23 09:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-23 10:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (103). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (21 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (146625.2)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 545** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 546** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-23 10:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-23 10:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-23 11:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (103). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (146625.2)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 545** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-23 11:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-23 11:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-23 12:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (103). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (146625.2)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 545** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-23 12:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-23 12:56 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-23 13:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (103). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (146625.2)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 545** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

### ⏱️ [2026-04-23 14:09 UTC] Hourly Order Pulse
**Target:** All Open Orders (103). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (146625.2)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 545** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-23 14:11 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-23 15:09 UTC] Hourly Order Pulse
**Target:** All Open Orders (103). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (20 Orders):**

- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (146625.2)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 545** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-23 15:59 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
### ⏱️ [2026-04-23 16:03 UTC] Hourly Order Pulse
**Target:** All Open Orders (103). Applying deep heuristics.

🚨 **Actionable Anomalies Detected (24 Orders):**

- **Order ID: 507** - 🚨 **TROUBLE:** Overdue Unpaid Balance (4782)
- **Order ID: 510** - 🚨 **TROUBLE:** Overdue Unpaid Balance (187.5)
- **Order ID: 512** - 🚨 **TROUBLE:** Pending Lab Action (getLabCheckResults)
- **Order ID: 513** - 🚨 **TROUBLE:** Overdue Unpaid Balance (9214.4)
- **Order ID: 259** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1259.994)
- **Order ID: 519** - 🚨 **TROUBLE:** Overdue Unpaid Balance (15680)
- **Order ID: 520** - 🚨 **TROUBLE:** Overdue Unpaid Balance (10653.2)
- **Order ID: 521** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2464)
- **Order ID: 522** - 🚨 **TROUBLE:** Overdue Unpaid Balance (23944.528)
- **Order ID: 524** - 🚨 **TROUBLE:** Overdue Unpaid Balance (27309.994)
- **Order ID: 530** - 🚨 **TROUBLE:** Overdue Unpaid Balance (146625.2)
- **Order ID: 311** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 400** - 🚨 **TROUBLE:** Overdue Unpaid Balance (100)
- **Order ID: 401** - 🚨 **TROUBLE:** Overdue Unpaid Balance (12064)
- **Order ID: 420** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 423** - 🚨 **TROUBLE:** Overdue Unpaid Balance (13300)
- **Order ID: 499** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1017.104)
- **Order ID: 469** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3265.175)
- **Order ID: 488** - 🚨 **TROUBLE:** Overdue Unpaid Balance (3724.03)
- **Order ID: 492** - 🚨 **TROUBLE:** Overdue Unpaid Balance (1230)
- **Order ID: 497** - 🚨 **TROUBLE:** Overdue Unpaid Balance (80)
- **Order ID: 536** - 🚨 **TROUBLE:** Overdue Unpaid Balance (2780.62)
- **Order ID: 542** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines
- **Order ID: 545** - 🚨 **TROUBLE:** Route Blocker: Unmapped lines

*Note: Phantom routes, future lab shipment docs, cancelled line items, and unbilled delays were filtered out automatically.*
---

* **[2026-04-23 16:26 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`
* **[2026-04-23 16:34 UTC]** `HEARTBEAT` - Polled API. No urgent unread messages. Status: `HEARTBEAT_OK`