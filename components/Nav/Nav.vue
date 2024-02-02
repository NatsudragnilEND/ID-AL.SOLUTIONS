<template>
  <nav class="nav" :class="{'fix': isScrollingUp }">
    <div class="wrapper">
      <NuxtLink to="/" @click="pash('/')" class="logo">
        <img src="../../assets/img/braayn.svg" alt="">
        <h1>id al. solutions</h1>
      </NuxtLink>
      <ul class="flexy">
        <NuxtLink @click="pash('/services')" to="/services">Services</NuxtLink>
        <div class="product" @click="open">
          <div class="dfe"> Products <img class="akrobat" src="assets/img/dawn.svg" alt=""></div>
          <NuxtLink to="/project" @click="pash('/project')" class="docta">Dr. GyneCom</NuxtLink>
        </div>
        <NuxtLink @click="pash('/about')" to="/about">About Us</NuxtLink>
        <NuxtLink @click="pash('/resources')" to="/resources">Resources</NuxtLink>
      </ul>
      <button>Contact us</button>
      <img v-if="!burger" class="img" src="assets/img/burr.svg" @click="openth" alt="">
      <img v-if="burger" class="img" src="assets/img/ieks.svg" @click="openth" alt="">
    </div>
  </nav>
  <transition name="haigh">
    <div v-if="burger" @click="openthird" class="poif">
      
      <div class="difftime"><NuxtLink @click="pash('/')" to="/" class="logo">
        <img src="../../assets/img/braayn.svg" alt="">
        <h1>id al. solutions</h1>
      </NuxtLink> <div @click="openth">{{ nol }}</div></div>
      <NuxtLink @click="pash('/services')" class="to-the-topp" to="/services">Services</NuxtLink>
      <div class="product lowo" @click="open"> Products <img class="akrobat" src="assets/img/dawn.svg" alt=""></div>
      <NuxtLink @click="pash('/project')" to="/project" v-if="opened" class="docta">Dr. GyneCom</NuxtLink>
      <NuxtLink @click="pash('/about')" to="/about">About Us</NuxtLink>
      <NuxtLink  to="/resources">Resources</NuxtLink>
      <button>Contact Us</button>
      <div class="linen"></div>
      <div class="lolen"><img src="assets/img/tg.svg" alt="">
      <img src="assets/img/link.svg" alt="">
      </div>
    </div>
  </transition>
</template>

<script setup>
let burger = ref(false)
const openth = () => {
  burger.value = !burger.value
}
let opened = ref(false)
let doden = ref(false)
const open = () => {
  opened.value = !opened.value
  if (opened.value) {
    document.getElementsByClassName('akrobat')[0].style.transform = 'rotate(180deg)'
    document.getElementsByClassName('docta')[0].style.display = 'flex'
  } else {
    document.getElementsByClassName('akrobat')[0].style.transform = 'rotate(0deg)'
    document.getElementsByClassName('docta')[0].style.display = 'none'
  }
}
watchEffect(() => {
  if (process.client) {
    if (burger.value) {
      
        document.body.classList.add('dod');
      
      
    } else {
      document.body.classList.remove('dod');
    }
  }
});
let nol = ref('')

const openthird = () => {
  burger.value = false
}
const clickHandler = (event) => {
  const isProductClicked = event.target.closest('.product');

  if (!isProductClicked && opened.value) {
    document.getElementsByClassName('akrobat')[0].style.transform = 'rotate(0deg)';
    document.getElementsByClassName('docta')[0].style.display = 'none';
    opened.value = false;
    openthird()
  }
};
import { useRouter } from 'vue-router'
const router = useRouter()
const pash = (ika) => {
  router.push(ika)
}
onMounted(() => {
  document.addEventListener('click', clickHandler);
});
onBeforeUnmount(() => {
  document.removeEventListener('click', clickHandler);
});
const isScrollingUp = ref(false);
const handleScroll = () => {
  const currentScroll = window.scrollY;
  if (currentScroll < (window.lastScroll || 0) && currentScroll > 200) {
      isScrollingUp.value = true;
    nol.value = ''
  } else {
    isScrollingUp.value = false;
    nol.value = '✕'
  }
  if(currentScroll < 100){
    nol.value = ''
  }
  window.lastScroll = currentScroll;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
@import './nav.scss';
</style>
