<template>
  <div class="banner">
      <div class="container">
        <div class="flexy">
          <NuxtLink @click="pash('/')" class="kavychki" to="/">Home</NuxtLink>
          <div>></div>
          <NuxtLink @click="pash('/resources')" to="/resources">Resources</NuxtLink>
          <div>></div>
          <NuxtLink @click="pash('/resources/cervicaluteripathology')" to="/resources/cervicaluteripathology">Cervical Uteri Pathology. Current Trends And New Opportunities For Early Diagnosis</NuxtLink>
        </div>
        <h2>Cervical Uteri Pathology. 
  Current Trends And New Opportunities For Early Diagnosis</h2>
      </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const pash = (ika) => {
  router.push(ika)
}
</script>

<style lang="scss" scoped>
@import './cervicaluteripathology.scss';
</style>