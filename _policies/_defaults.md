---
layout: content-page
title:
slug:
header_image:
file_path:
button:
  button_link:
  button_text:
description:
display_expandable-section: false
expandable-section:
  - header:
    content_markdown:
---
<div class="container editable" data-i18n="{{ page.title | slugify }}_content">
  Introductory text.
</div>
{% if page.display_expandable-section %}
<div class="container" data-i18n="{{ page.title | slugify }}_accordion">{% include accordion.html %}</div>
{% endif %}