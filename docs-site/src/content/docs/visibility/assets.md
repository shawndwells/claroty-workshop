---
title: "Visibility: Assets"
description: "✅"
---
In Section 1.1 we began to form an understanding of the broader environment. We learned the types of devices on the network, how they're connected, and formed a high-level overview of the network (such as subnets). 

To dig a little deeper, we want to begin understanding the specific devices on the network, how they interact, and contextualize their role in the network. Additionally we want to begin forming an understanding of the network topology through both the classic Purdue model and OSI model.

There may also be gaps in the asset inventory data. This could be due to the differences in passive versus active scanning, or missing network telemetry. We want to begin forming an understanding of what gaps exist, and form a generalized process to find the missing data.

---
## TASK 1: Environment Familiarization
1. Navigate to `Visibility` > `Assets`.<br/><br/>
2. Switch from `List View` to `Network Topology View` (top right of **Results (#)** table). Much like for zones, the **Network Topology View** shows the communication lines between assets. 
The icon is shown in the image below, with the purple underline:
![Switching to Network Topology View](../../../assets/ClarotyCTD-Menu-Assets-NetworkTopology.png)
   * Are there any assets that stand out in terms of communication lines, and what sort of assets are they? To view this information, right click on the asset and an informational popup will appear.
<br/><br/>
3. Return to `List View` and select the **kebab menu** (``⋮``) located in the top-left corner of the **Results** table.
<br/><br/>
4. Click on ``Select Columns`` The pop up menu will display every available column option. 
   1. Remove the ``First Seen`` and ``Last Seen`` columns
   1. Add the ``Firmware`` and ``Model`` columns.
<br/><br/>
4. Sort the assets by ``Model``
   - Not every asset has information regarding its model number. Some asset information is inaccessible through passive scanning and requires an active query, such as firmware, serial numbers, etc.

### REFLECTION
* What are possible causes of why some devices have model, firmware, and serial numbers, but others do not?
* In what situation would viewing the environment through ``Network Topology View`` be helpful? What are its limitations?

---

## TASK 2: Asset Details
* Search for an asset named "Chemical_plant" and click on the name.
<br/><br/>
* The ** Overview** tab displays summarized information. What mode is the PLC in? Why does this matter?
<br/><br/>
* Go to the `Device Information` tab. This page provides information, such as the asset's IP address, Purdue Level, and Vendor.
   * What information can we expect from an actively queried device, versus a passive collection?
   * For the ``Chemical_plant`` device, what kind of device is it?
   * Are there nested devices? What can we discover about them?
<br/><br/>
* Go to `Risks & Vulnerabiltiies`. The page displays a web graph of the asset's risk level, a list of vulnerabilities, any insights, and a summary of the asset's risk score.

| Vulnerability Dimension | Description |
|:-|:-|
| Vulnerability | A vulnerability is any facet of an asset that could potentially be taken advantage of. However, just because a vulnerability exists, does not necessarily mean it is relevant to the device.<br/><br/>In the **Vulnerabilities** table, sort by *Confirmed*. |
| Threat | A threat score is calculated with *Indicators of Activity* (IoA) and *Indicators of Compromise* (IoC). |
| Criticality | An asset's criticality rating is determined by the importance an asset, and by what the cascading effects of its compromise might be. | 
| Accessbility | An asset's accessbility is related to its zone and location on the network in relation to other devices, and how a threat actor might be able to utilize lateral movement if they are able to compromise the asset. |
| Infection | The likelihood that the asset could already be affected by, exposed to, or contribute to the spread of malicious activity based on its communications, protocols, relationships, alerts, and surrounding network context. |
<br/><br/>

* Scroll down to the **Vulnerabilities** section and review the information such as CVSS, EPSS, and Vulnerability Relevance
<br/><br/>

* In the ``Vulnerability Relevance`` drop down, select ``Confirmed``
<br/><br/>

* Are there any vulnerabilities confirmed to be on the device, which also have ``Actively Exploited`` indicators?
<br/><br/>

* Scroll down to the **INSIGHTS** section and select the **End of Life Assets** tab. Is this device end of life? What about nested controllers?
<br/><br/>

* Select the **Managed PLCs (by Rockwell Users)** tab. Who has been logging into this device?
<br/><br/>

* Select the **Talking with Ghost Assets** tab. What do these data points indicate?



### REFLECTION
At this point we have reviewed a significant amount of threat information for a Rockwell PLC. Given there are thousands of devices on the network, a truly overwhelming amount, we need to determine where/how the ``Chemical_plant`` device fits within our risk tolerance. Are these vulnerabilities an emergency? Are they mitigated? Do we act now?

* What does the **Risk Score** tell us about the device? What aspects do you agree or disagree?
* Aside from CVE/vulnerability information, what other risky behaviors of how this device is managed have we found?

---

## TASK 3: Threat Detection
* Go to `Threat Detection` tab and scroll down to the **ALERTS** table.
<br/><br/>

### REFLECTION
Claroty will group collections of suspicious events into a "Story." Review the stories. What has been found? How often has it occured?

A deep dive into threat detection and response is covered in a later chapter. For now, the high-level overview is sufficient.

---
## TASK 4: Network Analytics
As we prepare for zero trust environments, or minimally just enforcement of firewall rules on OT networks, the very first step is to begin understanding ingress and egress traffic and protocols.

* In the **NETWORK COMMUNICATION MAP**, filter traffic for the last Month
<br/><br/>

* What devices has ``Chemical_plant`` egressed traffic to, and over what protocols? Anything suspicious?
<br/><br/>

* What devices has ``Chemical_plant`` ingressed traffic from, and over what protocols? Anything suspicious?

### REFLECTION
In your production environment, how would this information be helpful?

--- 

## TASK 5: Network Communication
The **Network Communication Map** can be used to see the typical protocols used by the device, allowing abnormal communications to be spotted more easily. It can also be used to determine if incongruent protocols, like BACNET & GOOSE, are being used simultaneously.

* Go to `Communication` tab. 
<br/><br/>

* Review the **POLICIES** table. Do these traffic flows correlate to expected behavior?
<br/><br/>

* Review the **BASELINES** table. Do these events correlate to expected behavior?
<br/><br/>

* Review the **RELATED PROCESS VALUES** table. Click on any item. Where (or what) was the source that started the process?
   
### REFLECTION
- If the **POLICIES** are approved, what do you expect will happen? How does this change/influence the behavior of Claroty CTD?
- By understanding the **RELATED PROCESS VALUES**, what insight do we have into plant operations?
