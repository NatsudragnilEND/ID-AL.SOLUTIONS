<template>
  <head>
    <title>ID Al. Solutions | Project Pulse</title>
  </head>
  <div class="banner">
    <img src="assets/img/vanvan.svg" alt="">
    <div class="container">
      <div class="perpe">
        <p class="man">UX/UI</p>
        <p class="man">End-to-end Development</p>
      </div>
      <h2>Real Estate Portal</h2>
      <p class="neos">AA company of dedicated and experienced individuals, aimed at creating and delivering the ideality
        of software solutions</p>
    </div>
  </div>
  <section class="interview">
    <div class="container">
      <div class="vtu">
        <p>about the project</p>
        <h2>
          <span>Overview</span>
        </h2>
      </div>
      <div class="wrapper">
        <p class="dfev">In December of 2019 OSDB team was recommended to our client to work on a complex SaaS portal for
          the US market.</p>
        <p class="dfev">Having made first touches the client has prepared an RFP document which outlined core features and
          business requirements they’d like to be delivered.</p>
        <p class="dfev">OSDB team has investigated the requirement and built up a roadmap for the project delivery for the
          upcoming 6 months starting from the design & investigation stage.</p>
        <p class="dfev">In 6 months the first version of the platform was released for the first users.</p>
      </div>
    </div>
  </section>
  <div class="imag">
    <img src="assets/img/losing-me-now.svg" alt="" class="donot">
  </div>
  <section class="business">
    <div class="wrapper">
      <img src="assets/img/krop.png" alt="">
      <div class="other">
        <div class="vtu">
          <p>Challenge</p>
          <h2>
            Business <span> Problem</span>
          </h2>
        </div>
        <p class="toti">
          Having a deep understanding of Real Estate industry and processes which Agencies handle daily, the product owner
          aimed to create an all-in-one solution for Real Estate agents, their Employees, Tenants, Property Owners and
          Service Providers which can fix different items and support the properties’ good state.
        </p>
        <div class="chiki"><img src="assets/img/checked.svg" alt="">
          <p class="toti">Heavy-load support</p>
        </div>
        <div class="chiki"><img src="assets/img/checked.svg" alt="">
          <p class="toti">Microservice architecture</p>
        </div>
        <div class="chiki"><img src="assets/img/checked.svg" alt="">
          <p class="toti">Reactive approach</p>
        </div>
      </div>
    </div>
  </section>
  <section class="solution">
    <div class="container">
      <div class="vtu">
        <p>Challenge</p>
        <h2>
          <span> Solution</span> by ID Al. Solutions
        </h2>
      </div>
      <p class="brat">Haing conducted the Business Analysis of the potential users needs the solution was to create
        Individual Progressive Web Applications (PWAs) and Desktop Dashboards for different users type of the Real Estate
        system:</p>
      <div class="chokes">
        <div class="chiki"><img src="assets/img/checked.svg" alt="">
          <p class="toti">Heavy-load support</p>
        </div>
        <div class="chiki"><img src="assets/img/checked.svg" alt="">
          <p class="toti">Microservice architecture</p>
        </div>
        <div class="chiki"><img src="assets/img/checked.svg" alt="">
          <p class="toti">Reactive approach</p>
        </div>
      </div>

    </div>
  </section>
  <section class="contact">
    <div class="wrapper">
      <div class="container">
        <div class="text-content">
          <p class="help">WE CAN HELP!</p>
          <p class="ustody">CONTACT US TODAY</p>
          <p class="leroom">ID Al. Solutions takes a different approach to IT-service delivery, primarily focusing on
            maximum value for a reasonable price. Our developers have more than 5 years of commercial experience with
            dozens of successfully delivered projects.</p>
        </div>
        <a href="#getInTouch">Contact Us</a>
      </div>

    </div>
  </section>
  <section class="naf">
    <div class="container boo">
      <div class="vtu">
        <p>Challenge</p>
        <h2>
          <span> Solution</span> by ID Al. Solutions
        </h2>
      </div>
      <div class="buttons">
        <div class="but p">←</div>
        <div class="but n">→</div>
      </div>
    </div>
    <div class="container">
      <swiper :pagination="true" :modules="modules" :slidesPerView="vifa" :navigation="{
        prevEl: '.p',
        nextEl: '.n'
      }" class="mySwiper">
        <swiper-slide><img src="assets/img/feat.png" alt="">
          <p class="blah">Feed</p>
          <p class="brah">The news feed is a part of the social media block that allows users to share important updates
            and displays relevant posts based on their interests.</p>
        </swiper-slide>
        <swiper-slide><img src="assets/img/feat0.png" alt="">
          <p class="blah">Navigation</p>
          <p class="brah">Platform navigation allows members to flow from one page to another without frustration by
            clicking on convenient user interface components.</p>
        </swiper-slide>
        <swiper-slide><img src="assets/img/feat1.png" alt="">
          <p class="blah">Search</p>
          <p class="brah">The search function is made available as a search box at the top of the page. By typing in the
            keywords, users can find relevant content in different categories.</p>
        </swiper-slide>
        <swiper-slide><img src="assets/img/feat2.png" alt="">
          <p class="blah">Articles</p>
          <p class="brah">The section includes high-quality content that is open to discussion and can be shared on other
            social media platforms. Tags help users identify the main topic.</p>
        </swiper-slide>
      </swiper>
    </div>
  </section>
  <section class="long">
    <div class="wrapper">
      <div class="container">
        <div class="ftus">
          <div class="vtu">
            <p>Challenge</p>
            <h2>
              <span> Solution</span> by ID Al. Solutions
            </h2>
          </div>
          <NuxtLink to="/services" @click="pash('/services')">View Services</NuxtLink>
        </div>
        <div class="pront">
          <img src="assets/img/pr1.svg" alt="">
          <div class="mas">
            <div class="must">
              <img src="assets/img/checked.svg" alt="">
              <p class="bot">React (TypeScript)</p>
            </div>
            <div class="must">
              <img src="assets/img/checked.svg" alt="">
              <p class="bot">Material UI, Styled Components</p>
            </div>
          </div>
        </div>
        <div class="pront">
          <img src="assets/img/pr2.svg" alt="">
          <div class="mas">
            <div class="must">
              <img src="assets/img/checked.svg" alt="">
              <p class="bot">Java 14</p>
            </div>
            <div class="must">
              <img src="assets/img/checked.svg" alt="">
              <p class="bot">Spring Framework</p>
            </div>
            <div class="must">
              <img src="assets/img/checked.svg" alt="">
              <p class="bot">MySQL, Liquibase</p>
            </div>
            <div class="must">
              <img src="assets/img/checked.svg" alt="">
              <p class="bot">Maven, Docker"</p>
            </div>
          </div>
        </div>
        <div class="pront">
          <img src="assets/img/pr3.svg" alt="">
          <div class="mas">
            <div class="must">
              <img src="assets/img/checked.svg" alt="">
              <p class="bot">Java 14</p>
            </div>
            <div class="must">
              <img src="assets/img/checked.svg" alt="">
              <p class="bot">Spring Framework</p>
            </div>
            <div class="must">
              <img src="assets/img/checked.svg" alt="">
              <p class="bot">MySQL, Liquibase</p>
            </div>
            <div class="must">
              <img src="assets/img/checked.svg" alt="">
              <p class="bot">Maven, Docker"</p>
            </div>
          </div>
        </div>
        <div class="pront">
          <img src="assets/img/pr4.svg" alt="">
          <div class="mas">
            <div class="must">
              <img src="assets/img/checked.svg" alt="">
              <p class="bot">Java 14</p>
            </div>
            <div class="must">
              <img src="assets/img/checked.svg" alt="">
              <p class="bot">Spring Framework</p>
            </div>
            <div class="must">
              <img src="assets/img/checked.svg" alt="">
              <p class="bot">MySQL, Liquibase</p>
            </div>
            <div class="must">
              <img src="assets/img/checked.svg" alt="">
              <p class="bot">Maven, Docker"</p>
            </div>
          </div>
        </div>
        <div class="pront">
          <img src="assets/img/pr5.svg" alt="">
          <div class="mas">
            <div class="must">
              <img src="assets/img/checked.svg" alt="">
              <p class="bot">Java 14</p>
            </div>
            <div class="must">
              <img src="assets/img/checked.svg" alt="">
              <p class="bot">Spring Framework</p>
            </div>
            <div class="must">
              <img src="assets/img/checked.svg" alt="">
              <p class="bot">MySQL, Liquibase</p>
            </div>
            <div class="must">
              <img src="assets/img/checked.svg" alt="">
              <p class="bot">Maven, Docker"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="interview results">
    <div class="container">
      <div class="vtu">
        <p>about the project</p>
        <h2>
          <span>Results</span>
        </h2>
      </div>
      <div class="wrapper">
        <p class="dfev">In December of 2019 OSDB team was recommended to our client to work on a complex SaaS portal for
          the US market.</p>
        <p class="dfev">Having made first touches the client has prepared an RFP document which outlined core features and
          business requirements they’d like to be delivered.</p>
        <p class="dfev">OSDB team has investigated the requirement and built up a roadmap for the project delivery for the
          upcoming 6 months starting from the design & investigation stage.</p>
        <p class="dfev">In 6 months the first version of the platform was released for the first users.</p>
      </div>
    </div>
  </section>
  <section class="cont">
    <div class="container">
      <img src="assets/img/svig.svg" alt="">
      <div class="shot">
        <div class="shut">ID Al. Solutions takes a different approach to IT-service delivery, primarily focusing on
          maximum value for a reasonable price. Our developers have more than 5 years of commercial</div>

      </div>
    </div>
    <div class="container">
      <div class="anton">
        <img src="assets/img/anton.png" alt="">
        <div class="plex">
          <p class="ima">Anthony Klok</p>
          <p class="inge">Senior Director of Engineering at <span><a
                onclick="window.open(this.href, '_blank', 'width=600,height=400'); return false;"
                href="https://www.sansbrothers.com/">Sans Brothers</a></span></p>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";
const modules = [Pagination, Navigation]
import { useRouter } from 'vue-router'
const router = useRouter()
const pash = (ika) => {
  router.push(ika)
}
let vifa = ref(3.5)
watchEffect(() => {
  if (process.client) {
    if (window.innerWidth < 1500) {
      if (window.innerWidth < 480) {
        vifa.value = 1
      }
      else if (window.innerWidth < 550) {
        vifa.value = 1.1
      }
      else if (window.innerWidth < 650) {
        vifa.value = 1.3
      }
      else if (window.innerWidth < 1000) {
        vifa.value = 1.5
      }
      else {
        vifa.value = 2
      }
    }

  }
})
</script>

<style lang="scss" scoped>
@import './project.scss';
</style>