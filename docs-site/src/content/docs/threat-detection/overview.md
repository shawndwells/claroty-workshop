---
title: "Threat Detection: Overview"
description: "✅"
---
## SCENARIO / CONTEXT
By now, you should have come across alerts, events, and stories during Chapters 1 and 2, either through exploring asset pages or vulnerabilities. We now want to begin building an understanding such that:

* Discover recent and noteworthy activity occurring within the environment;
* Identify which assets, zones, or communications may warrant further investigation;
* Understand how CTD uses rules, baselines, and signatures to generate detections;
* Determine where to begin an investigation when suspicious activity is identified.

---
## TASK 1: Overview
* Navigate to `Threat Detection` > `Overview`.
<br/><br/>
* Ensure that the time series is set to ``Last Year`` (located in the top-right corner).
<br/><br/>
* Using the information available on the **Threat Detection Overview Page**, determine:
   - The total number of *Open Alerts*, *Events*, and *Open Stories*
   - The most common type of alert
   - Most recent and critical alerts
   - The most alerted zones

## TASK 1 REFLECTION
* What information on the **Overview** dashboard is most helpful? What caught your attention the most?
* If you were viewing this page with the intention of remediating an alert, which of the presented modules would you be most likely to choose to start at?

---
## TASK 2: Rules
* CTD uses several different rule types to determine when alerts should be generated. These rules can be reviewed under `Threat Detection` > `Rules` > `...`.

| title | description |
|:-|:-|
| Zone Rules | Define which zones are expected to communicate with other zones. Zone rules should be validated. |
| Baseline Rules | Define normal network behavior such as typical communication frequency/patterns, timing, protocols, and packet characteristics. |
| Network Signatures | Detect known suspicious or malicious network activity, similar to network-based intrusion detection signatures. They are used to identitfy behaviors such as scanning, explotataion attempts, or other known attack techniques. |
| YARA Rules | Detect known malicious files or file characteristics using pattern mathcing against known indicators to identity malware and suspicious payloads. |
| Auto Resolve | Automatically closes alerters that meet predefined conditions, which helps to reduce alert fatique by resolving expected or previously reviewed activity. |

### TASK 2 REFLECTION
* Which rule type would be most useful for identifying communications between zones that should not be interacting?
* How might Auto Resolve be helpful for certain alerts?
* Which rule type would you expect to generate the most environment-specific detections, and why?