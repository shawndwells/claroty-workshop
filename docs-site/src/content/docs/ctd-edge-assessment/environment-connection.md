---
title: Environment Connection
description: Environment Connection
---
# Passive Interface Setup
1. Connect CTD to a SPAN or TAP port.
1. Configure SPAN/TAP on switch
1. Connect CTD passive NIC
1. Verify link status

In CTD:
1. Go to ``Interface Management``
1. Enable ``Process Data``

The expected result is that traffic begins processing.

If this does not occur:
* Check SPAN config
* Check VLANs
* Check interface assignment

# Active Interface Setup
1. Connect NIC to network
1. Assign IP address
1. Validate connectivity

The expected result is that the Assessment Kit can reach other hosts on the network, such as pinging the network gateway.

# Assign Interfaces to Network
1. Go to ``Interface Management`
1. Assign both NICs to the correct network

CRITICAL: If this is wrong, the entire assessment will be invalid! Go slow here!