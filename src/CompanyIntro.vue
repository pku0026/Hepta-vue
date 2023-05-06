<template>
    <div class="company-profile">
      <h2 class="section-title">公司简介</h2>
      <swiper :options="swiperOption" modules="modules" :pagination="{ clickable: true }">
        <swiper-slide>
            <div class="row">
            <div class="column">
                <img src="./assets/hepta.jpg" alt="">
                <h3>高活跃度+平均日活1000w+</h3>
                <p>拥有超过1000万的日活跃用户，用户粘性极高，平均每日使用时长超过3小时。</p>
            </div>
            <div class="column">
                <img src="./assets/hepta.jpg" alt="">
                <h3>用户粘性高，使用时长3小时+</h3>
                <p>用户粘性非常高，每日使用时长超过3小时，用户生活中不可或缺的一部分。</p>
            </div>
            <div class="column">
                <img src="./assets/hepta.jpg" alt="">
                <h3>交易量大，每日交易额1亿+</h3>
                <p>每日交易额突破1亿，交易量庞大，为用户提供了高效、便捷的交易服务。</p>
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
    font-size: 24px;
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
  </style>
  