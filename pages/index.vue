<template>
  <Head>
    <title>ID Al. Solutions</title>
  </Head>
  <div class="banner">
    <img src="assets/img/bach.png" alt="">
    <div class="container">
      <p class="man">ID Al. Solutions</p>
      <h2>Synergy of Expertise <br> Integrity in Partnership <br> Ideal Solutions - as a Standard</h2>
      <p class="neos">Experienced team of innovators and developers bringing new products to life</p>
      <div class="buttons">
        <a href="#getInTouch" class="fir">
          Get in touch
        </a>
        <button class="sec">
          <NuxtLink to="/services" @click="pash('/services')">Services</NuxtLink>
        </button>
      </div>
    </div>
  </div>
  <section class="whyus">
    <div class="container">
      <div class="atop">
        <div class="vtu">
          <p>Why choose us?</p>
          <h2>
            ideal software <span> solutions Only</span>
          </h2>
        </div>
        <NuxtLink to="/about">About Us</NuxtLink>
      </div>
      <div class="asix">
        <div class="avon">
          <img src="assets/img/avon.svg" alt="">
          <h3>Vast Experience</h3>
          <p>Over 5 years of experience in software development, covering a variety of business domains</p>
        </div>
        <div class="avon">
          <img src="assets/img/avon0.svg" alt="">
          <h3>сustomer focus</h3>
          <p>We strive to bring the greatest value for our client through the best-quality and on-time work</p>
        </div>
        <div class="avon">
          <img src="assets/img/avon1.svg" alt="">
          <h3>Full Agility</h3>
          <p>Adjusting to your preferences and requirements in order to maximize the efficiency of cooperation</p>
        </div>
        <div class="avon tana">
          <img src="assets/img/avon2.svg" alt="">
          <h3>сustomer focus</h3>
          <p>We strive to bring the greatest value for our client through the best-quality and on-time work</p>
        </div>
        <div class="avon tana">
          <img src="assets/img/avon3.svg" alt="">
          <h3>Full Agility</h3>
          <p>Adjusting to your preferences and requirements in order to maximize the efficiency of cooperation</p>
        </div>
        <div class="avon tana">
          <img src="assets/img/avon4.svg" alt="">
          <h3>Vast Experience</h3>
          <p>Over 5 years of experience in software development, covering a variety of business domains</p>
        </div>
      </div>
    </div>
  </section>
  <section class="whatoffer">
    <div class="wrapper">
      <div class="container">
        <div class="vtu">
          <p>Services</p>
          <h2>
            what we <span> offer</span>
          </h2>
        </div>
        <div class="biger">
          <div class="as">
            <div class="as1">
              <div class="ht">
                <h4>web application development</h4>
                <p>Create a modern robust web application for your needs</p>
                <NuxtLink @click="pash('/services')" to="/services">Read more</NuxtLink>
              </div>
              <img src="assets/img/as.svg" alt="">
            </div>
            <div class="as1">
              <div class="ht">
                <h4>Machine <br>
                  Learning & AI</h4>
                <p>Sophisticated self-taught enterprise solutions</p>
                <NuxtLink @click="pash('/services')" to="/services">Read more</NuxtLink>
              </div>
              <img src="assets/img/as0.svg" alt="">
            </div>
          </div>
          <div class="as kennedy">
            <div class="as1">
              <div class="ht">
                <h4>Custom Software Development</h4>
                <p>Software solutions for every imaginable business needs</p>
                <NuxtLink to="/services">Read more</NuxtLink>
              </div>
              <img src="assets/img/as1.svg" alt="">
            </div>
            <div class="as1">
              <div class="ht">
                <h4>Software <br>
                  Testing & QA</h4>
                <p>Meticulous quality control ensuring flawless operations</p>
                <NuxtLink @click="pash('/services')" to="/services">Read more</NuxtLink>
              </div>
              <img src="assets/img/as2.svg" alt="">
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  <section class="someof">
    <div class="vto">
      <p>Our Project</p>
      <h2>
        Some of Our <span> Finest work</span>
      </h2>
    </div>
    <swiper :slidesPerView="1" :spaceBetween="10" :centeredSlides="true" :loop="true" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper">
      <swiper-slide class="swiper-slider">
        <img src="assets/img/slider.svg" alt="">
        <div class="tasks">
          <p class="task">
            Tasky
          </p>
          <p class="niios">Sales & Cold Calling</p>
          <div class="tuofem">
            <p class="pl">UX/UI</p>
            <p class="pl">End-to-end Development</p>
          </div>
          <p class="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the</p>
          <NuxtLink to="/project">View Case</NuxtLink>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slider">
        <img src="assets/img/slider.svg" alt="">
        <div class="tasks">
          <p class="task">
            Tasky
          </p>
          <p class="niios">Sales & Cold Calling</p>
          <div class="tuofem">
            <p class="pl">UX/UI</p>
            <p class="pl">End-to-end Development</p>
          </div>
          <p class="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the</p>
          <NuxtLink to="/project">View Case</NuxtLink>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slider">
        <img src="assets/img/slider.svg" alt="">
        <div class="tasks">
          <p class="task">
            Tasky
          </p>
          <p class="niios">Sales & Cold Calling</p>
          <div class="tuofem">
            <p class="pl">UX/UI</p>
            <p class="pl">End-to-end Development</p>
          </div>
          <p class="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the</p>
          <NuxtLink to="/project">View Case</NuxtLink>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slider">
        <img src="assets/img/slider.svg" alt="">
        <div class="tasks">
          <p class="task">
            Tasky
          </p>
          <p class="niios">Sales & Cold Calling</p>
          <div class="tuofem">
            <p class="pl">UX/UI</p>
            <p class="pl">End-to-end Development</p>
          </div>
          <p class="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the</p>
          <NuxtLink to="/project">View Case</NuxtLink>
        </div>
      </swiper-slide>

    </swiper>
  </section>
  <section class="whowe">
    <div class="wrapper">
      <div class="container">
        <div class="vto">
          <p>OUR Team</p>
          <h2>
            who are <span>we? </span>
          </h2>
        </div>
        <div class="cards">
          <div class="card">
            <img src="assets/img/card.svg" alt="">
            <p class="imisa">Ivan Pavliuchenko</p>
            <p class="role">Co-Founder</p>
            <p class="who">Full-stack developer with 5+ years of experience</p>
            <p class="who">Machine Learning & AI expert</p>
            <a href="https://www.linkedin.com/in/ivan-pavliuchenko-37843b14b/"><img src="assets/img/linkedin.svg"
                alt=""></a>
          </div>
          <div class="card">
            <img src="assets/img/card0.svg" alt="">
            <p class="imisa">Dmytro Dubynskyi</p>
            <p class="role">Co-Founder</p>
            <p class="who">Full-stack developer with 5+ years of experience</p>
            <p class="who">Cryptocurrency trading specialist</p>
            <a href="https://www.linkedin.com/in/dmtrdbnsk-61b1b118a/"><img src="assets/img/linkedin.svg" alt=""></a>
          </div>
          <div class="card">
            <img src="assets/img/card1.svg" alt="">
            <p class="imisa">Michael Pavliuchenko</p>
            <p class="role">Medical Expert</p>
            <p class="who">Full-stack developer with 5+ years of experience</p>
            <p class="who">Machine Learning & AI expert</p>
            <a href="https://www.linkedin.com/in/horacio-torrendell/"><img src="assets/img/linkedin.svg" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="stack">
    <div class="container">
      <div class="topt">
        <div class="vtu">
          <p>Technologies</p>
          <h2>
            a comprehensive <span> stack</span>
          </h2>
        </div>
        <div class="loram">Our specialists have extensive experience in working with the most popular technologies,
          universally suitable for the implementation of your innovative ideas</div>
      </div>
      <swiper :slidesPerView="4" :spaceBetween="10" :freeMode="true" :autoplay="{
        delay: 700,
        disableOnInteraction: false,
      }" :modules="modules" :loop="true" class="mySwiper">
        <swiper-slide class="dodasi"><img src="assets/img/slide1.svg" alt=""></swiper-slide>
        <swiper-slide class="dodasi"><img src="assets/img/slide2.svg" alt=""></swiper-slide>
        <swiper-slide class="dodasi"><img src="assets/img/slide3.svg" alt=""></swiper-slide>
        <swiper-slide class="dodasi"><img src="assets/img/slide4.svg" alt=""></swiper-slide>
        <swiper-slide class="dodasi"><img src="assets/img/slide5.svg" alt=""></swiper-slide>
        <swiper-slide class="dodasi"><img src="assets/img/slide6.svg" alt=""></swiper-slide>
        <swiper-slide class="dodasi"><img src="assets/img/slide7.svg" alt=""></swiper-slide>
        <swiper-slide class="dodasi"><img src="assets/img/slide8.svg" alt=""></swiper-slide>
      </swiper>
    </div>
  </section>
  <section class="ourclients">
    <div class="wrapper">
      <div class="container">
        <div class="left">
          <div class="vtu">
            <p>Testimonials</p>
            <h2>
              Our <span> Clients</span>
            </h2>
          </div>
          <p class="vut">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the</p>
          <div class="strelkas" id="about-section">
            <button class="strelka button-prev">←</button>
            <button class="strelka button-next">→</button>
          </div>
        </div>
        <swiper :slidesPerView="1.9" :space-between="10" :freeMode="true" :navigation="{
          prevEl: '.button-prev',
          nextEl: '.button-next',
        }" :modules="modules" class="moySwiper">
          <swiper-slide class="svayper">
            <div class="loli">
              <img src="assets/img/ava1.svg" alt="">
              <div class="lol">
                <div class="imis">Viezh Robert</div>
                <div class="lo">Shanxi, China</div>
              </div>
            </div>
            <div class="loram">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever </div>
          </swiper-slide>
          <swiper-slide class="suayper svayper">
            <div class="loli">
              <img src="assets/img/ava2.svg" alt="">
              <div class="lol">
                <div class="imis">Yessica Christy</div>
                <div class="lo">Shanxi, China</div>
              </div>
            </div>
            <div class="loram">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever </div>
          </swiper-slide>
          <swiper-slide class="svayper">
            <div class="loli">
              <img src="assets/img/ava1.svg" alt="">
              <div class="lol">
                <div class="imis">Viezh Robert</div>
                <div class="lo">Shanxi, China</div>
              </div>
            </div>
            <div class="loram">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever </div>
          </swiper-slide>
          <swiper-slide class="suayper svayper">
            <div class="loli">
              <img src="assets/img/ava2.svg" alt="">
              <div class="lol">
                <div class="imis">Yessica Christy</div>
                <div class="lo">Shanxi, China</div>
              </div>
            </div>
            <div class="loram">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever </div>
          </swiper-slide>
          <swiper-slide class="svayper">
            <div class="loli">
              <img src="assets/img/ava1.svg" alt="">
              <div class="lol">
                <div class="imis">Viezh Robert</div>
                <div class="lo">Shanxi, China</div>
              </div>
            </div>
            <div class="loram">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever </div>
          </swiper-slide>
          <swiper-slide class="suayper svayper">
            <div class="loli">
              <img src="assets/img/ava2.svg" alt="">
              <div class="lol">
                <div class="imis">Yessica Christy</div>
                <div class="lo">Shanxi, China</div>
              </div>
            </div>
            <div class="loram">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
  <section class="insights">
    <div class="container">
      <div class="topt">
        <div class="vtu">
          <p>Resources</p>
          <h2>
            Our Latest <span> Insights</span>
          </h2>
        </div>
        <NuxtLink @click="pash('/resources')" to="/resources" class="shadow">Read More</NuxtLink>
      </div>
      <ClientOnly>
        <div class="tri">
          <div class="tr" :class="{ 'in-about-section': isInAboutSection }">
            <img src="assets/img/tr.svg" alt="">
            <p class="date">19 Jan 2022</p>
            <p class="bold">How one Webflow user grew his single person </p>
            <p class="lor">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
          </div>
          <div class="tr" :class="{ 'in-about-section2': isInAboutSection }">
            <img src="assets/img/tr0.svg" alt="">
            <p class="date">19 Jan 2022</p>
            <p class="bold">How one Webflow user grew his single person </p>
            <p class="lor">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
          </div>
          <div class="tr" :class="{ 'in-about-section3': isInAboutSection }">
            <img src="assets/img/tr1.svg" alt="">
            <p class="date">19 Jan 2022</p>
            <p class="bold">How one Webflow user grew his single person </p>
            <p class="lor">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
          </div>
        </div>
      </ClientOnly>
    </div>
  </section>
  <section class="java">
    <div class="container">
      <div class="vto">
        <p>Frequently Asked Questions</p>
        <h2>
          most popular <span> questions</span>
        </h2>
      </div>
      <div class="laugh">
        <div class="question">
          <div class="texx">How can I authenticate and authorize requests to your API?
            <transition name="nana">
              <div class="texx" v-if="plusOrMinus[0] == '-'"> <br> Their team of experts understood my vision and
                translated it into a beautifully designed website. The attention to detail and the seamless functionality
                of the site surpassed my expectations</div>
            </transition>
          </div>
          <button @click="changePlusOrMinus(0)">{{ plusOrMinus[0] }}</button>
        </div>
        <div class="question">
          <div class="texx">How can I authenticate and authorize requests to your API?
            <transition name="nana">
              <div class="texx" v-if="plusOrMinus[1] == '-'"> <br> Their team of experts understood my vision and
                translated it into a beautifully designed website. The attention to detail and the seamless functionality
                of the site surpassed my expectations</div>
            </transition>
          </div>
          <button @click="changePlusOrMinus(1)">{{ plusOrMinus[1] }}</button>
        </div>
        <div class="question">
          <div class="texx">What programming languages are supported by your API/SDK?
            <transition name="nana">
              <div class="texx" v-if="plusOrMinus[2] == '-'"> <br> Their team of experts understood my vision and
                translated it into a beautifully designed website. The attention to detail and the seamless functionality
                of the site surpassed my expectations</div>
            </transition>
          </div>
          <button @click="changePlusOrMinus(2)">{{ plusOrMinus[2] }}</button>
        </div>
        <div class="question">
          <div class="texx">What is the rate limit for API requests?
            <transition name="nana">
              <div class="texx" v-if="plusOrMinus[3] == '-'"> <br> Their team of experts understood my vision and
                translated it into a beautifully designed website. The attention to detail and the seamless functionality
                of the site surpassed my expectations</div>
            </transition>
          </div>
          <button @click="changePlusOrMinus(3)">{{ plusOrMinus[3] }}</button>
        </div>
        <div class="question">
          <div class="texx">What is the rate limit for API requests?
            <transition name="nana">
              <div class="texx" v-if="plusOrMinus[4] == '-'"> <br> Their team of experts understood my vision and
                translated it into a beautifully designed website. The attention to detail and the seamless functionality
                of the site surpassed my expectations</div>
            </transition>
          </div>
          <button @click="changePlusOrMinus(4)">{{ plusOrMinus[4] }}</button>
        </div>
        <div class="question">
          <div class="texx">How can I authenticate and authorize requests to your API?
            <transition name="nana">
              <div class="texx" v-if="plusOrMinus[5] == '-'"> <br> Their team of experts understood my vision and
                translated it into a beautifully designed website. The attention to detail and the seamless functionality
                of the site surpassed my expectations</div>
            </transition>
          </div>
          <button @click="changePlusOrMinus(5)">{{ plusOrMinus[5] }}</button>
        </div>
      </div>
    </div>
  </section>
  
  <div id="getInTouch"></div>
</template>

<script setup>
import {
  Swiper,
  SwiperSlide
} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  FreeMode,
  Pagination,
  Autoplay,
  Navigation
} from "swiper/modules";
const isInAboutSection = ref(false);

const checkScroll = () => {
  const aboutSection = document.getElementById('about-section');
  const aboutSectionTop = aboutSection.offsetTop;
  const aboutSectionHeight = aboutSection.offsetHeight;
  const isScrolledIntoView =
    window.scrollY > aboutSectionTop
  isInAboutSection.value = isScrolledIntoView;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  checkScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkScroll);
});
const modules = [Pagination, FreeMode, Autoplay, Navigation]
const head = {
  title: 'AL. Solution',
};
let plusOrMinus = ref([
  '+', '+', '+', '+', '+', '+'
]);
const changePlusOrMinus = (i) => {
  if (plusOrMinus.value[i] == '+') {
    plusOrMinus.value[i] = '-';
  } else {
    plusOrMinus.value[i] = '+';
  }
}
import {useRouter} from 'vue-router'
const router = useRouter()
const pash = (ika) => {
  router.push(ika)
}
</script>

<style lang="scss" scoped>
@import './home.scss';
</style>
