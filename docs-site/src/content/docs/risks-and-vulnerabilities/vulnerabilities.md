---
title: "Risks & Vulnerabilities: Vulnerabilities"
description: "✅"
---
## GOALS
- Prioritize vulnerabilities using provided information
- Understand how vulnerabilities can be understood and organized with provided column options 
---
## TASKS
1. Navigate to `Risks & Vulnerabilities` > `Vulnerabilities`. 
2. Every unique vulnerability in the environment is listed on this page.
    - However, not every vulnerability is relevant/ confirmed.
3. Filter the vulnerability list by **Confirmed** under *Vulnerability Relevance*.
    - By how much does the new number of results differ from the unfiltered number?
4. Sort by *CVSS V3 Score* or *EPSS score* and select an *Actively Exploited* vulnerabiltiy to go to its page.
5. The top two sections of the page give a description of the vulnerability, as well as additional information about it, like the release date. At the bottom of the page is a list of every asset in the environment with the vulnerability.
    - Each asset has a **Status** column where the vulnerability on that asset can be marked as *Accept*(ed), *Irrelevant*, *Manually Fixed*, or *Open* (default). Users can also be assigned to deal with the vulnerability for that asset.
---
## REFLECTION
- How can the vulnerabilities page be used to determine the most relevant and critical vulnerabilities?
- How should these vulnerabilities be evaulated, and in what order?
- How can filters be used to filter out "noise".