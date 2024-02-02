<template>
  <head>
    <title>ID Al. Solutions | Resources and News</title>
  </head>
  <div class="banner">
    <div class="container">
      <div class="flexy">
        <NuxtLink @click="pash('/')" class="kavychki" to="/">Home</NuxtLink>
        <div>></div>
        <NuxtLink @click="pash('/resources')" to="/resources">Resources</NuxtLink>
      </div>
      <div class="perpe">
        <p class="man">UX/UI</p>
      </div>
      <h2>Resources</h2>
      <p class="neos">Exchange of experience and knowledge is an important part of the IT industry. That is why ID Al.
        Solution team shares its experience with you in this collection of materials</p>
      <div class="buttons">
        <div @click="pash('/about')" class="fir">About Us</div>
      </div>
    </div>
  </div>
  <section class="bal">
    <div class="container">
      <div class="things">
        <div class="okay">
          <img src="assets/img/pong.png" alt="">
          <p class="date">19 Jan 2022</p>
          <h2>How one Webflow user grew his single person </h2>
          <p class="stretegy">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
          </p>
          <NuxtLink to="/resources/CervicalUteriPathology">Read more</NuxtLink>
        </div>
        <div class="okay">
          <img src="assets/img/pong2.png" alt="">
          <p class="date">19 Jan 2022</p>
          <h2>How one Webflow user grew his single person </h2>
          <p class="stretegy">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
          </p>
          <NuxtLink class="pod" to="/resources/CervicalUteriPathology">Read more</NuxtLink>
        </div>
      </div>
      <div class="things bambaram">
        <div class="okay">
          <img src="assets/img/pong3.png" alt="">
          <p class="date">19 Jan 2022</p>
          <h2>How one Webflow user grew his single person </h2>
          <p class="stretegy">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
          </p>
          <NuxtLink to="/resources/CervicalUteriPathology">Read more</NuxtLink>
        </div>
        <div class="okay">
          <img src="assets/img/pong2.png" alt="">
          <p class="date">19 Jan 2022</p>
          <h2>How one Webflow user grew his single person </h2>
          <p class="stretegy">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
          </p>
          <NuxtLink to="/resources/CervicalUteriPathology">Read more</NuxtLink>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const pash = (ika) => {
  router.push(ika)
}
</script>

<style lang="scss" scoped>
@import './resources.scss';
</style>