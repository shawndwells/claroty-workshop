---
title: "Visibility: Assets"
description: "✅"
---
## GOALS
- Determine if an asset has been passively or actively scanned
- Determine the information that can be assessed from an asset's page
- Contextualize assets with available information
- Use contextualized information to determine which assets should be prioiritized for remediation
- Find data gaps in an asset inventory
---
## TASKS
1. Navigate to `Visibility` > `Assets`.
2. Switch from `List View` to `Network Topology View` (top right of **Results (#)** table). Much like for zones, the **Network Topology View** shows the communication lines between assets.
   - Are there any assets that stand out in terms of communication lines, and what sort of assets are they?
3. Return to `List View` and select the **kebab (⋮) menu** (top left of *Results (#)* table) and then **Select Columns**. The pop up menu will display every available column option. Add the **Model** column.
4. Sort the assets by **Model**.
   - Not every asset has information regarding its model number. Some asset information is inaccessible through passive scanning and requires an active query, such as firmware, serial numbers, etc.
5. Choose any asset, then click on the asset name to go to its asset infromation page.
6. The **Overview** page displays information summarized from the other tabs.
7. Go to `Device Information`. This page provides information, such as the asset's IP address, Purdue Level, and Vendor. Some information may be missing if the asset has not yet been actively queried.
8. Go to `Risks & Vulnerabiltiies`. The page displays a web graph of the asset's risk level, a list of vulnerabilities, any insights, and a summary of the asset's risk score:
   - **Vulnerabilitiy** => A vulnerability is any facet of an asset that could potentially be taken advantage of. However, just because a vulnerability exists, does not necessarily mean it is relevant to the device. In the **Vulnerabilities** table, sort by *Confirmed*.
   - **Threat** => A threat score is calculated with *Indicators of Activity* (IoA) and *Indicators of Compromise* (IoC). 
   - **Criticality** => An asset's criticality rating is determined by the importance an asset, and by what the cascading effects of its compromise might be.
   - **Accessbility** => An asset's accessbility is related to its zone and location on the network in relation to other devices, and how a threat actor might be able to utilize lateral movement if they are able to compromise the asset.
   - **Infection** => The likelihood that the asset could already be affected by, exposed to, or contribute to the spread of malicious activity based on its communications, protocols, relationships, alerts, and surrounding network context.
9. Go to `Threat Detection`. 
10. Go to `Network Analytics`.
   - The **Network Communication Map** can be used to see the typical protocols used by the device, allowing abnormal communications to be spotted more easily. It can also be used to determine if incongruent protocols, like BACNET & GOOSE, are being used simultaneously.
11. Go to `Communication`. It displays **Policies** (defined communication paths between zones), **Baselines** (typical recorded communications), etc. 
   - This page can be used to determine if there is traffic between zones that shouldn't exist, or if there are unordinary packet communications.
---
## REFLECTION
- How can risk score components help prioritize investigations?
- How can communication patterns and baselines help identify abnormal behavior?