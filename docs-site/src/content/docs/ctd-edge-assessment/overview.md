---
title: Overview
description: Claroty CTD + Edge Assessment Operator Guide
---

# Claroty CTD + Edge Assessment Operator Guide

This guide provides detailed, step-by-step instructions for conducting short-term Operational Technology (OT) assessments using Claroty Continuous Threat Detection (CTD), Claroty Edge, and integrating results into the Enterprise Management Console (EMC).

This guide is written as an operator manual for teams using a portable Claroty CTD assessment kit across multiple environments.

The focus is on execution: what to click, what to configure, what to look for, and what to do when things do not work as expected!

This guide assumes:
* CTD is already installed and operational
* The operator has appropriate network access approvals
* The operator is responsible for multiple assessments using the same CTD instance. For example, HVAC and SCADA networks of the same site.

# Assessment Preparation
## Fly-Away Kit Overview
The CTD Fly-Away Kit is a reusable platform designed to be deployed across multiple OT environments. Because the same isntance is reused, strict data separation is required.

The system includes:
* Claroty CTD Platform
* Passive interface (SPAN/TAP integration)
* Active interface (controlled discovery)

## Creating a Network per Assessment
Each assessment must be isolated logically inside CTD using ``Claroty Networks``. This ensures you can serate control systems, such as ``HVAC`` and ``Power Distribution``.

Before connecting to any new environment, create a new ``CTD Network``. This is crucial to prevent data mixing, enable clean reporting, and allows for proper ingestion into Claroty Enterprise Management Consols (Claroty EMCs).

1. Navigate to ``Settings`` --> ``Data Sources`` --> ``Interface Configuration``

1. Click ``Advanced Network Settings``

1. Click ``Add New Network`` and enter a network name.

1. Click ``Create``

Suggested naming convention should be: ``SITE-NAME-DATE``

Example: ``SHIP-ALPHA-20260612``

| Site | Name | Date |
|:-|:-|:-:|
| Ship | Alpha | 2026-06-12 |