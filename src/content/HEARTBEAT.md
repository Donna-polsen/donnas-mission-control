# 💓 Heartbeat Actions

## 📥 Inbox Triage & Approval Flow (Makat Ops Inbox)
**Frequency:** Every 5 minutes

**Process:**
1. **Fetch:** Check the Makat Ops Inbox for any unread messages (using the TRPC API and my Auth Token from `TOOLS.md`).
2. **Analyze:** For any new messages detected, formulate a detailed plan:
   - What the issue/request is.
   - Which endpoints/data I need to check.
   - Who I need to refer it to or what I should reply.
3. **Propose:** Send this detailed step-by-step action plan to Omri in a DM.
4. **Hold:** DO NOT act on the chats or external systems until Omri explicitly approves the plan.
5. **Execute:** Upon Omri's approval, execute the plan and update `ACTIVITY.md` and the Dashboard.

*Note: Maintain state of last checked messages in `memory/heartbeat-state.json` to avoid double-processing.*
