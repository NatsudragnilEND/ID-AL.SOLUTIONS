<template>
  <div class="wrapper">
    <div class="container">
      <div class="support">
        <img src="assets/img/ukraine.svg" alt="">
        <p class="sup">Support the brave people of Ukraine</p>
      </div>
      <a target="_blank" href="https://supportukrainenow.org/">Support Ukraine</a>
    </div>
  </div>
  <footer class="footer">
    <div class="container">
      <div class="bigfut">
        <div class="fut">
          <NuxtLink to="/"><img src="assets/img/lagatip.svg" alt=""></NuxtLink>
          <p class="pop">ID Al. Solutions is a software development team that creates unique IT startups and implements
            top-notch outsource projects</p>
        </div>
        <div class="fut">
          <p class="right">QUICK LINKS</p>
          <div class="pipe">
            <NuxtLink to="/about">About Us</NuxtLink>
            <NuxtLink to="/resources">Blog Post</NuxtLink>
            <NuxtLink to="/project">Our Project</NuxtLink>
            <NuxtLink to="/">Contact Us</NuxtLink>
          </div>

        </div>
        <div class="fut">
          <p class="right">IT SERVICES</p>
          <div class="pipe">
            <p class="bib">web application development</p>
            <p class="bib">Custom Software Development</p>
            <p class="bib"> Machine Learning & AI</p>
            <p class="bib">Software Testing & QA</p>
          </div>
        </div>
        <div class="fut">
          <p class="right">CONTACT US</p>
          <div class="pipe">
            <p class="bib">Kyiv, Ukraine</p>
            <a href="tel:+380936474070">+38 093 647 40 70</a>
            <a href="mailto:info@idalsolutions.com">info@idalsolutions.com</a>
          </div>
        </div>
      </div>
      <div class="links">
        <img src="assets/img/tg.svg" alt="">
        <img src="assets/img/link.svg" alt="">
      </div>
      <div class="sline"></div>
      <div class="tremms">
        <p class="bib">© ID Al. Solutions | All Rights Reserved. 2021 - 2023</p>
        <div class="doop">
          <NuxtLink to="/terms-conditions">Terms & Conditions</NuxtLink>
          <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup></script>
<style lang="scss" scoped>
@import './footer.scss';
</style>