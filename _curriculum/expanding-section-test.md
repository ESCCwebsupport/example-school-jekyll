---
layout: accordion
title: Expanding sections test
slug: expanding test
published: true
header_image:
file_path:
description: A page to test the template for expanding sections - aka accordion.
expandable-section:
  - header: Contentinfo Landmark
    content_markdown: >-
      A contentinfo landmark is a way to identify common information at the
      bottom of each page within a website, typically called the "footer" of the
      page, including information such as copyrights and links to privacy and
      accessibility statements.
  - header: Design Patterns
    content_markdown: >-
      * Each page may have one contentinfo landmark.

      * The contentinfo landmark should be a top-level landmark.

      * When a page contains nested document and/or application roles (e.g.
      typically through the use of iframe and frame elements), each document or
      application role may have one contentinfo landmark.

      * If a page includes more than one contentinfo landmark, each should have
      a unique label.
  - header: ARIA Example
    content_markdown: |-
      &lt;div&nbsp;**role="contentinfo"**&gt;

      &lt;h2&gt;*Contact, Policies and Legal*&lt;h2&gt;

      ....&nbsp;*contentinfo area content*&nbsp;....&lt;/div&gt;
---

Visually outline the landmarks and/or headings on the page using the following buttons.
