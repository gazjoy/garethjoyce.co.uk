---
layout: layouts/base.html
title: What I’m doing now
eleventyNavigation:
  key: Now
  order: 3
containerClasses: container
---

<h1>{{ title }}</h1>

<p>I am currently:</p>
<ul>
  <li>Always seem to be updating this website</li>
  <li>Busy, busy digging into large knotty problems on the Apply for a Blue Badge service for The Department for Transport</li>
  <li>Prioritising family time</li>
  <li>Focussing on my mental health</li>
  <li>Decorating my renovated 1930's home</li>
  <li>Spending a lot of time with my dog</li>
  <li>Lots more <a href="/running">running</a> again, keeping it tentative</li>
  <li><a href="/reading">Reading a few books</a></li>
  <li>Taking a burnout break from running accessibility craft circle of practice at Valtech</li>
</ul>

<hr>

<p class="small">Inspired by&nbsp;<a href="https://sivers.org/nowff">Derek Sivers</a>. If you have your own site, <a href="http://nownownow.com/about">you should make one</a> too.</p>

<hr>

<p>Page last updated: <time datetime="{{ page.date | htmlDateString }}">{{ page.date | readableDate }}</time>.</p>