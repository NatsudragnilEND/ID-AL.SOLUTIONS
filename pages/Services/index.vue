<template>
  <Head>
    <title>ID Al. Solutions | Building Tomorrow</title>
  </Head>
  <div class="banner">
    <img src="assets/img/bilmiman.svg" alt="">
    <div class="container">
      <div class="flexy">
        <NuxtLink class="kavychki" @click="pash('/')" to="/">Home</NuxtLink>
        <div>></div>
        <NuxtLink @click="pash('/services')" to="/services">Services</NuxtLink>
      </div>
      <p class="man">What We Offer</p>
      <h2>Services</h2>
      <p class="neos">A team of highly-skilled professionals is ready to implement your vision in code using the latest
        and most efficient software solutions</p>
      <div class="buttons">
        <a href="#getInTouch" class="fir">
          Get in touch
        </a>
      </div>
    </div>
  </div>
  <section class="zaeb">
    <div class="vto">
      <p>Our Project</p>
      <h2>
        Outsourcing Is <span> Beneficial</span>
      </h2>
      <div class="loram">Being a great strategic tool, outsourcing can offer more than just cost-saving
        opportunities.Delegating IT tasks and functions to those who can do them better, faster, and cheaper, will help
        your business thrive</div>
    </div>
    <div class="swipers">
      <div class="swiper-slides">
        <img src="assets/img/swipe.svg" alt="">
        <div class="bolt">Proficiency</div>
        <div class="lorame">Our professional team has more than 5 years of commercial experience, so we offer you the best
          knowledge and expertise on the market, with an innovative and flexible approach</div>
      </div>
      <div class="swiper-slides">
        <img src="assets/img/swipe0.svg" alt="">
        <div class="bolt">High Productivity</div>
        <div class="lorame">Enjoy an increased performance of your business by delegating the IT-related tasks to our
          experts, allowing you to focus on your core business tasks</div>
      </div>
      <div class="swiper-slides">
        <img src="assets/img/swipe1.svg" alt="">
        <div class="bolt">Reduced Costs</div>
        <div class="lorame">ID Al. Solutions offers the best quality of development services for a competitive price. This
          means lower operational costs and transparent budget planning for your business</div>
      </div>
      <div class="swiper-slides">
        <img src="assets/img/swipe2.svg" alt="">
        <div class="bolt">Significant Time Saving</div>
        <div class="lorame">Forget about interviewing, selecting, and training new in-house employees, or setting up
          development processes. We are ready to implement your new idea, right now!</div>
      </div>
      <div class="swiper-slides">
        <img src="assets/img/swipe3.svg" alt="">
        <div class="bolt">Proficiency</div>
        <div class="lorame">Our professional team has more than 5 years of commercial experience, so we offer you the best
          knowledge and expertise on the market, with an innovative and flexible approach</div>
      </div>
    </div>
  </section>
  <div class="vto">
    <p>Services</p>
    <h2>
      What We <span> Offer</span>
    </h2>
  </div>
  <section class="offers">

    <div class="wrapper">
      <div class="taksebe">
        <img src="assets/img/gruppa.svg" alt="">
        <div class="gdirection">
          <p class="switch">web application development</p>
          <p class="popa">Our team is highly skilled with full-stack development of any web-related software, whether it
            is static, dynamic, portal web apps, or Content Management Systems (CMS). </p>
          <p class="popa">We design and create stunning applications for anyone, from startups to large corporations, with
            such up-to-date features and qualities:</p>
          <div class="totals">
            <img src="assets/img/checked.svg" alt="">
            <p class="popa">Heavy-load support</p>
          </div>
          <div class="totals">
            <img src="assets/img/checked.svg" alt="">
            <p class="popa">Heavy-load support</p>
          </div>
          <div class="totals">
            <img src="assets/img/checked.svg" alt="">
            <p class="popa">Heavy-load support</p>
          </div>
        </div>
      </div>
      <transition name="nana">
        <div class="container" v-if="more[0]">
          <p class="popa">Web application development is a dynamic and ever-evolving field that plays a crucial role in
            shaping our digital world. With the exponential growth of the internet and the increasing demand for online
            services, web applications have become an integral part of our daily lives. From e-commerce platforms and
            social networking sites to productivity tools and streaming services, web applications offer a wide range of
            functionalities to cater to diverse user needs.</p>
          <p class="popa">The process of web application development involves several key steps. It begins with thorough
            planning and requirement analysis, where developers collaborate with stakeholders to understand their
            objectives and define the application's features and functionalities. This stage lays the foundation for the
            entire development process and ensures that the end product aligns with the client's vision.</p>
          <p class="popa">Once the planning phase is complete, the development team moves on to designing the user
            interface (UI) and user experience (UX) of the web application. This involves creating wireframes, mockups,
            and prototypes to visualize the application's structure and navigation flow. Attention is paid to usability,
            accessibility, and responsive design to ensure a seamless experience across different devices and platforms.
          </p>
          <p class="popa">After the design phase, the actual coding and development of the web application take place.
            Developers employ various programming languages such as HTML, CSS, JavaScript, and frameworks like React,
            Angular, or Django to build the application's front-end and back-end components. They also integrate
            databases, APIs, and other third-party services to enhance the application's functionality.</p>
          <p class="popa">Testing and quality assurance are vital stages in web application development. Rigorous testing
            is conducted to identify and rectify any bugs, errors, or security vulnerabilities. This includes unit
            testing, integration testing, performance testing, and user acceptance testing to ensure the application
            functions reliably and provides a smooth user experience.</p>
          <p class="popa">Once the development and testing phases are complete, the web application is ready for
            deployment. It is hosted on servers or cloud platforms, making it accessible to users worldwide. Continuous
            monitoring, maintenance, and updates are essential to ensure the application's performance, security, and
            scalability.</p>
          <p class="popa">Web application development is a multidisciplinary field that requires expertise in programming,
            design, and user experience. It empowers businesses and individuals to deliver innovative solutions, reach a
            wider audience, and streamline their operations. As technology continues to advance, web application
            development will remain at the forefront of digital innovation, shaping the way we interact and engage with
            the online world.</p>
        </div>
      </transition>

      <div class="container">
        <p @click="mored(0)" class="show">
          show {{ val[0] }}
        </p>
      </div>

    </div>
  </section>
  <section class="offers mt">

    <div class="wrapper">
      <div class="taksebe">
        <img src="assets/img/gruppa1.svg" alt="">
        <div class="gdirection">
          <p class="switch">Machine Learning & AI</p>
          <p class="popa">With a strong background in solving complicated Machine Learning problems, we are ready to build
            a powerful «brain» for your application, that will efficiently solve complicated and extraordinary tasks,
            using the following Neural Network technologies:</p>
          <div class="totals">
            <img src="assets/img/checked.svg" alt="">
            <p class="popa">Computer Vision</p>
          </div>
          <div class="totals">
            <img src="assets/img/checked.svg" alt="">
            <p class="popa">Natural Language Processing</p>
          </div>
          <div class="totals">
            <img src="assets/img/checked.svg" alt="">
            <p class="popa">Sequences and Time Series</p>
          </div>
          <div class="totals">
            <img src="assets/img/checked.svg" alt="">
            <p class="popa">Prediction etc</p>
          </div>
        </div>
      </div>
      <transition name="nana">
        <div class="container" v-if="more[1]">
          <p class="popa">Web application development is a dynamic and ever-evolving field that plays a crucial role in
            shaping our digital world. With the exponential growth of the internet and the increasing demand for online
            services, web applications have become an integral part of our daily lives. From e-commerce platforms and
            social networking sites to productivity tools and streaming services, web applications offer a wide range of
            functionalities to cater to diverse user needs.</p>
          <p class="popa">The process of web application development involves several key steps. It begins with thorough
            planning and requirement analysis, where developers collaborate with stakeholders to understand their
            objectives and define the application's features and functionalities. This stage lays the foundation for the
            entire development process and ensures that the end product aligns with the client's vision.</p>
          <p class="popa">Once the planning phase is complete, the development team moves on to designing the user
            interface (UI) and user experience (UX) of the web application. This involves creating wireframes, mockups,
            and prototypes to visualize the application's structure and navigation flow. Attention is paid to usability,
            accessibility, and responsive design to ensure a seamless experience across different devices and platforms.
          </p>
          <p class="popa">After the design phase, the actual coding and development of the web application take place.
            Developers employ various programming languages such as HTML, CSS, JavaScript, and frameworks like React,
            Angular, or Django to build the application's front-end and back-end components. They also integrate
            databases, APIs, and other third-party services to enhance the application's functionality.</p>
          <p class="popa">Testing and quality assurance are vital stages in web application development. Rigorous testing
            is conducted to identify and rectify any bugs, errors, or security vulnerabilities. This includes unit
            testing, integration testing, performance testing, and user acceptance testing to ensure the application
            functions reliably and provides a smooth user experience.</p>
          <p class="popa">Once the development and testing phases are complete, the web application is ready for
            deployment. It is hosted on servers or cloud platforms, making it accessible to users worldwide. Continuous
            monitoring, maintenance, and updates are essential to ensure the application's performance, security, and
            scalability.</p>
          <p class="popa">Web application development is a multidisciplinary field that requires expertise in programming,
            design, and user experience. It empowers businesses and individuals to deliver innovative solutions, reach a
            wider audience, and streamline their operations. As technology continues to advance, web application
            development will remain at the forefront of digital innovation, shaping the way we interact and engage with
            the online world.</p>
        </div>
      </transition>

      <div class="container">
        <p @click="mored(1)" class="show">
          show {{ val[1] }}
        </p>
      </div>

    </div>
  </section>
  <section class="offers mtop">
    <div class="wrapper">
      <div class="taksebe">
        <img src="assets/img/gruppa2.svg" alt="">
        <div class="gdirection">
          <p class="switch">Custom Software Development</p>
          <p class="popa">ID Al. Solutions is where challenging ideas and tasks seamlessly transform into high-end
            software.</p>
          <p class="popa">Upgrade your current applications or create something outstanding by applying the latest and
            greatest design principles and methodologies.</p>

          <p class="popa">Develop a better user experience, increase performance, automate, secure, or integrate – we are
            here to implement your ideas.</p>
          <p class="popa">We use the latest innovative tools and leverage our extensive experience to solve your business
            challenges of any complexity</p>
        </div>
      </div>
      <transition name="nana">
        <div class="container" v-if="more[2]">
          <p class="popa">Web application development is a dynamic and ever-evolving field that plays a crucial role in
            shaping our digital world. With the exponential growth of the internet and the increasing demand for online
            services, web applications have become an integral part of our daily lives. From e-commerce platforms and
            social networking sites to productivity tools and streaming services, web applications offer a wide range of
            functionalities to cater to diverse user needs.</p>
          <p class="popa">The process of web application development involves several key steps. It begins with thorough
            planning and requirement analysis, where developers collaborate with stakeholders to understand their
            objectives and define the application's features and functionalities. This stage lays the foundation for the
            entire development process and ensures that the end product aligns with the client's vision.</p>
          <p class="popa">Once the planning phase is complete, the development team moves on to designing the user
            interface (UI) and user experience (UX) of the web application. This involves creating wireframes, mockups,
            and prototypes to visualize the application's structure and navigation flow. Attention is paid to usability,
            accessibility, and responsive design to ensure a seamless experience across different devices and platforms.
          </p>
          <p class="popa">After the design phase, the actual coding and development of the web application take place.
            Developers employ various programming languages such as HTML, CSS, JavaScript, and frameworks like React,
            Angular, or Django to build the application's front-end and back-end components. They also integrate
            databases, APIs, and other third-party services to enhance the application's functionality.</p>
          <p class="popa">Testing and quality assurance are vital stages in web application development. Rigorous testing
            is conducted to identify and rectify any bugs, errors, or security vulnerabilities. This includes unit
            testing, integration testing, performance testing, and user acceptance testing to ensure the application
            functions reliably and provides a smooth user experience.</p>
          <p class="popa">Once the development and testing phases are complete, the web application is ready for
            deployment. It is hosted on servers or cloud platforms, making it accessible to users worldwide. Continuous
            monitoring, maintenance, and updates are essential to ensure the application's performance, security, and
            scalability.</p>
          <p class="popa">Web application development is a multidisciplinary field that requires expertise in programming,
            design, and user experience. It empowers businesses and individuals to deliver innovative solutions, reach a
            wider audience, and streamline their operations. As technology continues to advance, web application
            development will remain at the forefront of digital innovation, shaping the way we interact and engage with
            the online world.</p>
        </div>
      </transition>

      <div class="container">
        <p @click="mored(2)" class="show">
          show {{ val[2] }}
        </p>
      </div>

    </div>
  </section>
  <section class="offers mt">
    <div class="wrapper">
      <div class="taksebe">
        <img src="assets/img/gruppa3.svg" alt="">
        <div class="gdirection">
          <p class="switch">Software Testing & Quality Assurance</p>
          <p class="popa">A perfect user experience and impeccable data security are crucial for a modern application.</p>
          <p class="popa">That is why our team helps you to find and handle any possible bugs, vulnerabilities, or issues
            in your product via manual, automated, API, security, or performance testing.</p>

          <p class="popa">Note that we conduct QA and Software testing for every software we develop, plus we can check
            your application performance as a separate service</p>
        </div>
      </div>
      <transition name="nana">
        <div class="container" v-if="more[3]">
          <p class="popa">Web application development is a dynamic and ever-evolving field that plays a crucial role in
            shaping our digital world. With the exponential growth of the internet and the increasing demand for online
            services, web applications have become an integral part of our daily lives. From e-commerce platforms and
            social networking sites to productivity tools and streaming services, web applications offer a wide range of
            functionalities to cater to diverse user needs.</p>
          <p class="popa">The process of web application development involves several key steps. It begins with thorough
            planning and requirement analysis, where developers collaborate with stakeholders to understand their
            objectives and define the application's features and functionalities. This stage lays the foundation for the
            entire development process and ensures that the end product aligns with the client's vision.</p>
          <p class="popa">Once the planning phase is complete, the development team moves on to designing the user
            interface (UI) and user experience (UX) of the web application. This involves creating wireframes, mockups,
            and prototypes to visualize the application's structure and navigation flow. Attention is paid to usability,
            accessibility, and responsive design to ensure a seamless experience across different devices and platforms.
          </p>
          <p class="popa">After the design phase, the actual coding and development of the web application take place.
            Developers employ various programming languages such as HTML, CSS, JavaScript, and frameworks like React,
            Angular, or Django to build the application's front-end and back-end components. They also integrate
            databases, APIs, and other third-party services to enhance the application's functionality.</p>
          <p class="popa">Testing and quality assurance are vital stages in web application development. Rigorous testing
            is conducted to identify and rectify any bugs, errors, or security vulnerabilities. This includes unit
            testing, integration testing, performance testing, and user acceptance testing to ensure the application
            functions reliably and provides a smooth user experience.</p>
          <p class="popa">Once the development and testing phases are complete, the web application is ready for
            deployment. It is hosted on servers or cloud platforms, making it accessible to users worldwide. Continuous
            monitoring, maintenance, and updates are essential to ensure the application's performance, security, and
            scalability.</p>
          <p class="popa">Web application development is a multidisciplinary field that requires expertise in programming,
            design, and user experience. It empowers businesses and individuals to deliver innovative solutions, reach a
            wider audience, and streamline their operations. As technology continues to advance, web application
            development will remain at the forefront of digital innovation, shaping the way we interact and engage with
            the online world.</p>
        </div>

      </transition>

      <div class="container">
        <p @click="mored(3)" class="show">
          show {{ val[3] }}
        </p>
      </div>

    </div>
  </section>
  <section class="carth">
    <div class="container">
      <div class="atop">
        <div class="vtu">
          <p>Why choose us?</p>
          <h2>
            ideal software <span> solutions Only</span>
          </h2>
        </div>
        <NuxtLink @click="pash('/about')" to="/about">About Us</NuxtLink>
      </div>
      <div class="sixthings">
        <div class="six">
          <p class="lqbt">step 1</p>
          <p class="bald">Initial Assessment</p>
          <div class="laromatic">Once we receive a request from you, we arrange a call to go over the project concepts and
            specifics. Based on that, we prepare an initial assessment (estimate)</div>
        </div>
        <div class="six">
          <p class="lqbt">step 2</p>
          <p class="bald">Planning & Roadmap Creation</p>
          <div class="laromatic">Having agreed upon the initial assessment, we prepare a detailed roadmap with scope,
            timeline, and a dedicated team</div>
        </div>
        <div class="six">
          <p class="lqbt">step 3</p>
          <p class="bald">Roadmap Implementation</p>
          <div class="laromatic">The team performs development of your application with an Agile approach. When the core
            functionality is ready, the app undergoes thorough testing</div>
        </div>
        <div class="six">
          <p class="lqbt">step 4</p>
          <p class="bald">Result Evaluation</p>
          <div class="laromatic">We help you analyze the achieved result, decide & plan on further development stages or
            improvements
          </div>
        </div>
        <div class="six">
          <p class="lqbt">step 5</p>
          <p class="bald">Maintenance & Expansion</p>
          <div class="laromatic">The team works on optimization, bug fixing and new features implementation</div>
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
          <NuxtLink @click="pash('/project')" to="/project">View Case</NuxtLink>
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
          <NuxtLink @click="pash('/project')" to="/project">View Case</NuxtLink>
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
          <NuxtLink @click="pash('/project')" to="/project">View Case</NuxtLink>
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
          <NuxtLink @click="pash('/project')" to="/project">View Case</NuxtLink>
        </div>
      </swiper-slide>

    </swiper>
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
        <swiper :slidesPerView="vifa" :space-between="10" :navigation="{
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
        </swiper>
      </div>
    </div>
  </section>
  <section class="aur">
    <div class="container">
      <div class="aurk">
        <p class="acknowladge">
          our knowledge
        </p>
        <p class="expertise">Expertise</p>
        <div class="larame">
          Over many years in IT, our team has gained experience in developing applications of various business domains.
          Furthermore, we expand our knowledge by designing and developing our own Products
        </div>
      </div>
      <div class="imgur">
        <img src="assets/img/varvar.svg" alt="">
        <div class="wrapp">
          <p class="trading">Trading</p>
          <p class="lamaza">TRADS – a custom “turnkey” FOREX trading solution for a Ukrainian investment fund.</p>
          <p class="lamaza">The application was designed as a constructor for trading strategies, allowing users to
            seamlessly create and back-test various trading setups using a wide variety of classic indicators. TRADS also
            features a full-fledged trading mode supporting several broker integrations</p>
          <p class="lamaza">TRADS also features a full-fledged trading mode supporting several broker integrations</p>
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
import { useRouter } from 'vue-router'
const router = useRouter()
const pash = (ika) => {
  router.push(ika)
}
const modules = [Pagination, FreeMode, Autoplay, Navigation]

const screenWidth = 1920
onMounted(() => {
  window.addEventListener('resize', () => {
    screenWidth.value = window.innerWidth;
  });
});
let vifa = ref(2)
watchEffect(() => {
  if (process.client) {
    if (window.innerWidth < 500) {
      vifa.value = 0.9
    }
  }
})
const computedSlidesPerView = computed(() => {
  if (screenWidth.value > 1400) return 5
  else if (screenWidth.value < 1400 && screenWidth.value > 1249) return 4
  else if (screenWidth.value < 1250 && screenWidth.value > 1000) return 3
  else if (screenWidth.value < 950) return 1
});
let more = ref([
  false, false, false, false
])
let val = ref(['more', 'more', 'more', 'more'])
const mored = (i) => {
  more.value[i] = !more.value[i]
  setTimeout(() => {
    if (val.value[i] == 'more') val.value[i] = 'less'
    else val.value[i] = 'more'
  }, 499);

}

</script>

<style lang="scss" scoped>@import './services.scss';</style>
