<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <transition name="nana">
    <div v-if="to_the_top" @click="topp" class="to-the-top">⇑</div>
  </transition>
</template>
<script setup>

const to_the_top = ref(false);
const from_the_top = ref(0);

const handleScroll = () => {
  from_the_top.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

watchEffect(() => {
  if (from_the_top.value > 500) {
    to_the_top.value = true;
  } else {
    to_the_top.value = false;
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
const topp = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
}
</script>
