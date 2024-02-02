<template>
  <div class="wrapper java">
    <div class="container">
      <div class="lra">
        <div class="vtu">
          <p>Contacts</p>
          <h2>
            let's get in <span> touch!</span>
          </h2>
        </div>
        <p class="ostal">Are you interested in supporting our products? Are you
          planning to start a project? Or have you got any questions? </p>
        <p class="ostal">Please feel free to get in touch with us</p>
        <div class="daxarow">
          <div class="xarow">
            <p class="iphone">PHONE</p>
            <a href="tel:+380936474070">+38 093 647 40 70</a>
          </div>
          <div class="line"></div>
          <div class="xarow">
            <p class="iphone">EMAIL</p>
            <a href="mailto:info@idalsolutions.com">info@idalsolutions.com</a>
          </div>
        </div>
      </div>
      <div class="lra mav">
        <p class="iphone">Name</p>
        <input v-model="name" ref="name1" @keypress.enter="next(0)" class="in" type="text"
          placeholder="Enter your name...">
        <p class="iphone">Email</p>
        <input v-model="email" ref="email1" @keypress.enter="next(1)" class="in" type="text"
          placeholder="Enter your email...">
        <p class="iphone">Phone</p>
        <input v-model="number" ref="number1" @keydown="isNum" @keypress.enter="next(2)" class="in" type="text"
          placeholder="+123...">
        <p class="iphone">Message</p>
        <textarea v-model="text" ref="text1" @keypress.enter="next(3)" class="in" rows="5" type="text"
          placeholder="Text"></textarea>
        <div class="chikit">
          <input type="checkbox" v-model="isChecked">
          <p class="dodger">I have read and agree to the <NuxtLink to="/terms-conditions"> &nbsp;Terms & Conditions&nbsp;
            </NuxtLink>
            and <NuxtLink to="privacy-policy">&nbsp; Privacy Policy </NuxtLink>
          </p>
        </div>
        <div class="chochok">
          <button :class="{ 'toti': !isChecked }" @click="checkReady">Get in touch</button>
          <a href="tel:+380936474070">Schedule a Call</a>
        </div>
      </div>
    </div>
  </div>
  <div class="isnot" v-if="isnot">fill in all fields correctly <span @click="vykl">Ⅹ</span></div>
  <div class="isnott" v-if="isnott">We will answer you by email soon!<span @click="vykl">Ⅹ</span></div>
</template> 
<script setup>
let isChecked = ref(false)
let name = ref('')
let email = ref('')
let number = ref('')
let text = ref('')
let name1 = ref('')
let email1 = ref('')
let number1 = ref('')
let text1 = ref('')
let isnot = ref(false)
let isnott = ref(false)
let isNot = ref(false)
const next = (i) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (i == 0 && name.value !== '') email1.value.focus()
  else if (i == 1 && pattern.test(email.value)) number1.value.focus()
  else if (i == 2 && number.value.length > 9) text1.value.focus()
  else if (i == 3 && text.value !== '') checkReady()
  else isnot.value = true
  setTimeout(() => {
    isnot.value = false
  }, 5000);
}
const isNum = (event) => {
  const key = event.key;

  if ((!/\d/.test(key)) && key !== 'Backspace' && key !== 'Tab' && key !== 'Enter') {
    event.preventDefault();
  } else if (number.value.length > 17 && key !== 'Backspace' && key !== 'Enter') {
    event.preventDefault();
  }
}
const checkReady = () => {
  if (isChecked.value) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name.value !== '' && pattern.test(email.value) && number.value.length > 9 && text.value !== '') {
      if (isChecked.value) {
        name.value = ''
        email.value = ''
        number.value = ''
        text.value = ''
        isnot.value = false
        isChecked.value = false
        isnott.value = true
        setTimeout(() => {
          isnott.value = false
        }, 5000);
      }
    } else {
      isnot.value = true
    }
    setTimeout(() => {
      isnot.value = false
    }, 5000);
  }
}
const vykl = (() => {
  isnot.value = false
  isnott.value = false
})
</script>
<style lang="scss" scoped>
@import './getintouch.scss';
</style>