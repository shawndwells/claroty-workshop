---
title: "Threat Detection: Alerts"
description: "✅"
---
## GOALS
- Understand the purpose of alerts
- Determine how alerts differ from events
- Understand how suspicious or malicious activity is presented
---
## TASKS
1. Navigate to `Threat Detection` > `Alerts`.
2. Review the **Alerts** page.
    - Alerts can be filtered by type, status, category, etc., 
    - Each has its own status, and the ability to be assigned to a specific user.
    - There are two types of alerts:
        - **Security Event Alerts** indicate potentially malicious or suspicious activity. Examples include:
            - Port Scanning
            - Unauthorized Communications
            - Exploit Attempts
        - **Process Integrity Alerts** indicate changes to operational processes. Examples include:
            - Configuration Changes
            - Firmware Updates
            - Logic Changes
4. Select an alert with the *Known Threat Alert* type to open its **Alert View** page.
    - The top banner will display the type of alert (such as *Known Threat*, *Network Scan*, *Configuration Download*, etc.) followed by a short description of it. 
    - The page includes:
        - **Network Signature Info**, which provides basic information about the alert.
        - The **Alert Score**, including *Significant Indicators*, and how the score itself was calculated.
        - A **Root Cause Analysis** with communicationn paths and related alerts.
        - **Mitigation Steps**
        - and the other alerts or events associated with the **Alert**. 
5. Return to the **Alerts** page and filter by **Integrity Alerts**. Select an alert with the *Configuration Upload* type and go to its **Alert View** page. 
    - How does this alert page differ from the other alert page you viewed?
### Stories
1. Return to the `Threat Detection` > `Alerts` page.
2. Enable **Group by Story** in the top right of the page.
    - **Stories** are collections of related alerts that Claroty has grouped together. They provide additional context by showing how multiple alerts may be related to a larger activity or incident. Examples include:
        - Multiple alerts generated during a network scan
        - Several suspicious communications involving the same asset
        - A sequence of events that may indicate an attack progression
3. Expand a story and note the alerts contained within it.
    - What is the relation between them?
---
## REFLECTION
- What information is available within an alert?
- How do Security Event Alerts differ from Process Integrity Alerts?
- What additional context can be gained by navigating from an alert to an asset?