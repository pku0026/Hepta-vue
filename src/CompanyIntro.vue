<template>
    <div class="company-profile">
      <h2 class="section-title">Our services</h2>
      <swiper :options="swiperOption" modules="modules" :pagination="{ clickable: true }">
        <swiper-slide>
            <div class="row">
            <div class="column">
                <img src="./assets/hepta.jpg" alt="">
                <h3>Empowering HeptaAI Intelligence</h3>
                <p>HeptaAI's Empowering HeptaAI Intelligence service provides organizations with the most advanced Artificial Intelligence technology and resources. Our service provides powerful AI models, cutting-edge algorithms, and comprehensive data analysis to help organizations unlock the potential of their data. With our AI-powered solutions, organizations can not only maximize the value of their data but also gain a competitive edge in their respective industries.</p>
            </div>
            <div class="column">
                <img src="./assets/hepta.jpg" alt="">
                <h3>HeptaAI: AI Solutions</h3>
                <p>HeptaAI: AI Solutions provides cutting-edge Artificial Intelligence solutions to help organizations optimize their operations and deliver an enhanced customer experience. We leverage advanced AI technology to automate processes, increase efficiency, and reduce costs. Our services include AI-powered automation, data analysis, and machine learning. We also provide customized AI solutions tailored to your specific needs. Together, we can create a smarter, more efficient future.</p>
            </div>
            <div class="column">
                <img src="./assets/hepta.jpg" alt="">
                <h3>Unlock AI Potential with HeptaAI</h3>
                <p>HeptaAI provides businesses with the tools and resources needed to unlock the potential of Artificial Intelligence. Our team of experts are dedicated to helping you understand and use AI to increase efficiency, reduce costs, and unlock new opportunities. We offer customized solutions to meet your custom needs and goals. With HeptaAI, you can achieve success faster and easier than ever before!</p>
            </div>
            </div>

        </swiper-slide>
        <swiper-slide>
          <div class="row">
            <div class="column">
              <img src="./assets/hepta.jpg" alt="">
              <p>文字描述4</p>
            </div>
            <div class="column">
              <img src="./assets/hepta.jpg" alt="">
              <p>文字描述5</p>
            </div>
            <div class="column">
              <img src="./assets/hepta.jpg" alt="">
              <p>文字描述6</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="row">
            <div class="column">
              <img src="./assets/hepta.jpg" alt="">
              <p>文字描述7</p>
            </div>
            <div class="column">
              <img src="./assets/hepta.jpg" alt="">
              <p>文字描述8</p>
            </div>
            <div class="column">
              <img src="./assets/hepta.jpg" alt="">
              <p>文字描述9</p>
            </div>
          </div>
        </swiper-slide>
        
      </swiper>
    </div>
    <div class="About-Us" style="background-color: #1b1b1b;color: rgb(255, 255, 255);">
          <h3 style="font-size: 30px;">About Us</h3>
          <p >I am the proud CEO of HeptaAI, a Artificial Intelligence business based in the United States. We specialize in creating AI-based products and services for businesses of all sizes. Our mission is to create technology that will revolutionize the way businesses operate.HeptaAI's services include AI-driven customer service, automated marketing, and predictive analytics. We have a team of experts who work hard to develop AI algorithms that can help businesses make better decisions. We also provide consulting services to help businesses understand how AI can help them achieve their goals. We are passionate about helping our customers succeed and our team is constantly innovating to create the best AI solutions for our clients.
          </p>

    </div>
  </template>
  
  <script>
  import { Pagination } from 'swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  
  import 'swiper/css'
  import 'swiper/css/pagination'

  export default {
    name: 'CompanyIntro',
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        direction: 'horizontal',
      },
    };
  },
  setup() {
      return {
        modules: [Pagination]
      }
    }
};
  </script>
  
  <style scoped>
  .company-profile {
    background-color: black;
    color: white;
    font-size: 16px;
    padding: 20px;
  }
  
  .section-title {
    font-size: 40px;
    font-family: Oswald, sans-serif;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 -10px;
  }
  
  .column {
    flex: 1;
    max-width: 300px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid white;
    padding-right: 20px;
  }
  
  .column img {
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: cover;
  }
  
  .column p {
    margin-top: 10px;
  }

  .About-Us{
    padding: 20px;
    text-align: center;
  }
  </style>
  