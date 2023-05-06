<template>
  <div class="slider-border" id="SliderHome">
    <ImageSlider :slides="slides" />
  </div>
  <div class="Nav-wrapper">
    <FixedNav />
  </div>
  <div class="intro-wrapper">
    <CompanyIntro />
  </div>
  <div class="test">
    </div>
</template>

<script>
import ImageSlider from './ImageSlider.vue'
import FixedNav from './FixedNav.vue'
import CompanyIntro from './CompanyIntro.vue'
export default {
  name: 'App',
  components: {
    ImageSlider,
    FixedNav,
    CompanyIntro
  },
  data(){
    return {
    slides: [
          {
            img: require('@/assets/logo.png'),
            buttons : [
              {
                text: 'Button 1',
                link: 'https://www.google.com'
              },
              {
                text: 'Button 2',
                link: 'https://www.google.com'
              }
            ]
          },
          {
            img: require('@/assets/hepta.jpg'),
            buttons : [
              {
                text: 'Button 3',
                link: 'https://www.baidu.com'
              }
            ]
          },
          {
            img: require('@/assets/meghna.png'),
            buttons : [
            ]
          }
        ]
    }
  } 
}
</script>

<style>
  #app {
    background-color: #fff;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  
  .slider-border {
    border: 5px solid #000;
    padding: 5px;
    margin: 0 auto;
  }

  .test {
    width: 100%;
    height: 200vh;
  }
</style>
