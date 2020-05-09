---
layout: content-page
title: School information
published: true
description: Read information about our school.
page-links:
  - name: Head's welcome
    link: /school-information/welcome/
  - name: Safeguarding
    link: /school-information/safeguarding/
  - name: Admissions
    link: /school-information/admissions/
  - name: Key Stage 2 performance
    link: /school-information/ks2-performance/
  - name: Pupil premium
    link: /school-information/pupil-premium/
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