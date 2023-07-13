<template>
  <!-- 第一个板块 -->
  <div class="slider">
    <div class="slides-container">
      <div class="slide active" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.img" alt="">
        <div class="overlay-wrapper">
          <image-overlay :buttons="slide.buttons" />
        </div>
      </div>
    </div>
    <div class="text-box">
    <div class="max-w-3xl text-center mx-auto">
      <h2 class="heading-xlarge mb-6 text-center" style="color: rgb(255, 255, 255); font-family: Oswald, sans-serif; font-weight: 400;">AI Revolutionizes Businesses around the World</h2>
      <p class="body-large" style="color: rgb(255, 255, 255); font-family: Quattrocento, serif; font-weight: 400;">HeptaAI is an Artificial Intelligence business specializing in creating innovative solutions for households. Combining the latest AI technology with an experienced team of economists and developers, HeptaAI provides intelligent, automated solutions to help households tackle their toughest challenges.</p>
    </div>
  </div>
    <a class="prev" @click="prevSlide">&#10094;</a>
    <a class="next" @click="nextSlide">&#10095;</a>
  </div>
</template>

<script>
import ImageOverlay from './ImageOverlay.vue'
  export default {
    name: 'ImageSlider',
    components: {
      ImageOverlay
    },
    data() {
      return {
        currentSlide: 1
      }
    },
    props: {
    slides: {
      type: Array,
      required: true
    }
  },
    methods: {
      nextSlide() {
        if (this.currentSlide < this.slides.length) {
          this.currentSlide++
        } else {
          this.currentSlide = 1
        }
        this.updateSlider()
      },
      prevSlide() {
        if (this.currentSlide > 1) {
          this.currentSlide--
        } else {
          this.currentSlide = this.slides.length
        }
        this.updateSlider()
      },
      updateSlider() {
        const slides = document.querySelectorAll('.slide')
        slides.forEach((slide, index) => {
          if (index + 1 === this.currentSlide) {
            slide.classList.add('active')
          } else {
            slide.classList.remove('active')
          }
          const slidesContainer = document.querySelector('.slides-container')
          slidesContainer.style.transform = `translateX(calc(-${(this.currentSlide - 1) * 100 /this.slides.length }%))`
        })
  
      }
  
    },
    mounted() {
      /*setInterval(() => {
        this.nextSlide()
      }, 5000)*/
    }
  }
</script>

<style scoped>
  .slider {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  
  .slides-container {
    position: absolute;
    width: calc(100% * 3);
    height: 100%;
    display: flex;
    left: calc(-100% * 0);
  }
  
  .slide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.5s;
    opacity: 0;
    position: relative;
  }
  
  .slide.active {
    opacity: 1;
    z-index: 1;
    transform: translateX(0);
  }
  
  .slide:nth-child(1) {
    background-color: #1b1b1b;
  }
  
  .slide:nth-child(2) {
    background-color: #f2f2f2;
  }
  
  .slide:nth-child(3) {
    background-color: #1b1b1b;
  }
  
  .slide img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    -webkit-user-select: none;
    margin: auto;
    opacity: 0.5; /* 设置透明度为 0.5 */
  }
  
  .prev,
  .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    z-index: 2;
  }
  
  .prev {
    left: 20px;
  }
  
  .next {
    right: 20px;
  }
  
  .overlay-wrapper {
    position: absolute;
    bottom: 120px;
    right: 80px;
    width: 300px; /* 调整 ImageOverlay 组件的宽度 */
    height: auto;
    z-index: 2;
  }

  .text-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  justify-content: center;
  text-align: center;
  font-size: 30px;
  /* 添加其他样式属性，例如宽度、背景颜色等 */
}
</style>