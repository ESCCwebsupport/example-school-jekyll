---
layout: content-page
title: Our staff
description: Our staff are vital to St Invicta's. Meet our teachers and support staff.
page-links:
  - name: First link
    link: /
---

<div class="container pt-2">

  <div class="row">
      {% for link in page.page-links %}
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <a data-i18n="{{ page.title | slugify }}_{{ link.name | slugify }}_button" href="{{ link.link }}" class="btn btn-primary btn-lg btn-block" role="link">{{ link.name }}</a>
      </div>

      {% endfor %}

  </div>

</div>