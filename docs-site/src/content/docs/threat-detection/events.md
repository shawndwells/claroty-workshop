---
title: "Threat Detection: Events"
description: "✅"
---
## SCENARIO / CONTEXT
Now that we have covered alerts and stories, we can move to understanding what causes them: events.

Events are records of activity that has occurred on the network. They may represent normal operational behavior, configuration changes, communications between assets, protocol operations, or other observed activity. Unlike alerts, events are not necessarily suspicious or malicious.

Events provide the raw context behind detections. By reviewing events, we can better understand what occurred, when it occurred, which assets were involved, and why an alert or story may have been generated from that activity.

---
## TASK 1: Events
* Navigate to `Threat Detection` > `Events`.
<br/><br/>
* Review the **Events** page, including its filter options.
    - How many events are there? How does this compare to the number of alerts?
    - What types of events are available for filtering?
<br/><br/>
* Filter **Status** by *Not Risky Change* and select any of the filtered events to go to its **Master Event View** page.
<br/><br/>
* The **Master Event View** page is visually similar to the *Alert View* page from Section 3.2, but this event was not alerted upon.
    * Are there any alerts related to it?
    * Is it resolved? If so, why?
    * What assets is it related to?
<br/><br/>
* Return to the **Events** page and clear any filters.
<br/><br/>
* Select any event that is not labeled *Not Risky Change*.
    * Where does this lead you?

## TASK 1 REFLECTION
* How do events differ from alerts and stories?
* What role do events play in the creation of alerts?
* What type of activities may generate an event?