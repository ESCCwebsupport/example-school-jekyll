---
layout: default
title: Our governors
slug: governors
published: true
description: St. Invicta's governors are very important to our school. They do some things.
header_image: /uploads/foto-sushi-6anudmpilw4-unsplash.jpg
governors:
  - name: James Governor
    image: /assets/images/head.jpg
    job: Chair
    appointed_date: 4 January 2017
    appointing-body:
    term-start_date: 12 February 2017
    term-end_date: 10 May 2020
    declare-interests_text:
    governor-elsewhere_text:
  - name: Sarah Jones
    image: /assets/images/head.jpg
    job: Parent governor
  - name: Mark Francis
    image: /uploads/edward.jpg
    job: Staff governor
  - name: Steven Johnson
    image: /assets/images/head.jpg
    job: Parent governor
  - name: Sonia Governor
    image: /assets/images/head.jpg
    job: Parent governor
  - name: Another Governor
    image:
    job: Staff governor
---

{% if page.header_image %}
{% include hero-image.html %}
{% endif %}
<div class="container py-3">
    {% include breadcrumbs.html %}
    <h1 class="mt-2" data-i18n="{{ page.title | slugify }}_title"> {{ page.title}} </h1>
</div>

Our governors are a hugely important part of St. Invicta's. They keep us in check, on track and provide support to our teachers. Here's what they do:

<section class="team py-4">
  <h3 class="container py-3">
    Meet our governors
  </h3>
  <div class="team container">

    <div class="row">
      {% for governor in page.governors %}
      <div class="col-xl-4 col-md-6 mb-4 mx-auto">
        <div class="card border-0 shadow">
          {% if governor.image %}
            <img src="{{ governor.image }}" class="card-img-top profile-img" alt="{{ governor.name }}" width="300" height="300"/>
          {% else %}
            <img src="/assets/images/silhouette.png" class="card-img-top profile-img" alt="{{ governor.name }}" width="300" height="300"/>
            {% endif %}
          <div class="card-body text-left accordion">
            <h5 class="card-title mb-0">
              <button type="button" class="btn btn-link collapsed text-left" data-toggle="collapse"
                data-target="#collapse{{ forloop.index }}"><i class="fa"></i>{{ governor.name }}</button>
              </h5>
              <div id="collapse{{ forloop.index }}" class="collapse" aria-labelledby="heading{{ forloop.index }}">
                <div class="card-text text-black-50"><b>Role</b>: {{ governor.job }}</div>
                <div class="card-text text-black-50"><b>Appointed on</b>: {{ governor.appointed_date | date_to_string }}</div>
                <div class="card-text text-black-50"><b>Term</b>: {{ governor.term-start_date | date_to_string }} to {{ governor.term-end_date | date_to_string }}</div>
              </div>
          </div>
        </div>
      </div>
      {% endfor %}

    </div>
  </div>
</section>