---
title: Edge Deployment
description: Edge Deployment
---
# When to Use Edge
Use Claroty Edge when:
* Passive is incomplete
* Network is segmented

# Generate Token
Command:
```bash
ctd create_edge_token
```

# Run Edge (Connected)
Command:
```bash
./ctdclarotyedge discover -use-ctd-connection yes
```

Expected:
* Data appears in CTD

# Run Edge (Offline)
```bash
./ctdclarotyedge discover -online no
```

# Import Results
Upload into CTD.