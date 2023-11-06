---
layout: layouts/base.html
title: What I’m doing now
eleventyNavigation:
  key: Now
  order: 3
---

<h1>{{ title }}</h1>

<p>I am currently:</p>
<ul>
  <li>Updating this website</li>
  <li>Trying to say "no" more</li>
  <li>Prioritising family time</li>
  <li>Focussing on my mental health</li>
  <li>Decorating my son's newly insulated, warm bedroom</li>
  <li>Spending a lot of time with my dog</li>
  <li>Starting <a href="/running">running</a> again, building up slowly</li>
  <li><a href="/reading">Reading a few books</a></li>
  <li>Helping to run our accessibility design craft circle of practice at Valtech</li>
</ul>

<hr>

<p class="small">Inspired by&nbsp;<a href="https://sivers.org/nowff">Derek Sivers</a>. If you have your own site, <a href="http://nownownow.com/about">you should make one</a> too.</p>

<hr>

<p>Page last updated: <time datetime="{{ page.date | htmlDateString }}">{{ page.date | readableDate }}</time>.</p>