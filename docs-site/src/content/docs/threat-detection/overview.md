---
title: "Threat Detection: Overview"
description: "✅"
---
## GOALS
- Gain a high-level understanding of current threat activity within the environment
- Determine where to begin investigating suspicious activity
- Understand the difference between alerts, events, and stories
- Understand the purpose of the various rules
---
## TASKS
1. Navigate to `Threat Detection` > `Overview`.
2. Using the information available on the page, determine:
   - The total number of *Open Alerts*
   - The total number of *Events*
   - The number of *Open Stories*
### Events vs Alerts vs Stories
- Events represent activities that occurred on the network, and not every event is malicious.
- Alerts are generated when events meet specific criteria or detection logic.
- Stories are collections of related alerts (and events).
### Rules
- CTD uses several different rule types to determine when alerts should be generated. These rules can be reviewed under `Threat Detection` > `Rules` > `...`.
    - **Zone Rules**
        - Define which zones are expected to communicate with one another.
        - Should be validated.
    - **Baseline Rules**
        - Define normal network behavior such as typical communication frequency, timing, protocols, and packet characteristics.
    - **Network Signatures**
        - Detect known suspicious or malicious network activity, similar to network-based intrusion detection signatures.
        - Used to identify behaviors such as scanning, exploitation attempts, or other known attack techniques.
    - **YARA Rules**
        - Detect known malicious files or file characteristics using pattern matching against known indicators to identify malware and suspicious payloads.
    - **Auto Resolve**
        - Automatically closes alerts that meet predefined conditions, which helps reduce alert fatigue by resolving expected or previously reviewed activity.
---
## REFLECTION
- What information can be learned from the Overview page alone?
- If you were beginning an investigation, where would you go next and why?
- What assets or zones appear to require additional attention?
- How does the Threat Detection Overview differ from the Risks & Vulnerabilities Overview?