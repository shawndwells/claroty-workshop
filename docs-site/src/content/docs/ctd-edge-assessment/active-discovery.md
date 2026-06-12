---
title: Active Discovery
description: Active Discovery
---
# Active Detection Operations

## Tasks
The primary method used to initially identify assets on the network is called Active Detection.

During configuration of this capability, deployment parameters may include:
* Network segment or IP range
* Discovery type (protocol) to be used
* Queries used to discover additional asset information (not all ``Tasks`` require a Query to be set)

Standard types of Active Detection Tasks include:
| Type | Description|
|-|-|
| Discovery | Used for initial discovery of assets. |
| Get Info | Used to periodically update information about existing assets in the system. |
| DNS Resolution | Used to update assets identified by IP address to include DNS names. |

## Queries
Quieries allow for additional asset or protocol-specific parameters to be defined to discover more detailed information about discovered assets.

Some Active Detection Tasks require a Query to be defined, others do not, depending on protocol.

# Configure Asset Discovery Tasks
Below is the basic steps to create a new asset discovery task. For specific examples, see **Active Discovery Methods**.

1. Go to ``Settings`` --> ``Data Sources`` --> ``Active Detection`` --> ``Tasks`` --> ``+`` --> ``Discovery``

1. Go to ``Active Detection`` --> ``Queries``

1. Add new query. Suggest to start with safe query.

# Creating Discovery Task
1. Go to ``Tasks`` --> ``Add Discovery`` --> select ``network``
1. Enter desired subnet

# Running Discovery
1. Run task
1. Monitor

Stop if issues occur.

# Reviewing Results
1. Check History
1. Review success rate