<template>
  <div class="slider-border" id="SliderHome">
    <ImageSlider :slides="slides" />
  </div>
  <div class="Nav-wrapper">
    <FixedNav />
  </div>
  <div class="intro-wrapper" id="intro-wrapper">
    <CompanyIntro />
  </div>
  <div class="publish-wrapper" id="publish-wrapper">
    <PrivatePublish />
  </div>
  <div class="hottask-wrapper" id="hottask-wrapper">
    <HotTask />
  </div>
</template>

<script>
import ImageSlider from './ImageSlider.vue'
import FixedNav from './FixedNav.vue'
import CompanyIntro from './CompanyIntro.vue'
import HotTask from './HotTask.vue'
import PrivatePublish from './PrivatePublish.vue'
export default {
  name: 'HomePage',
  components: {
    ImageSlider,
    FixedNav,
    CompanyIntro,
    HotTask,
    PrivatePublish
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
  .hottask-wrapper{
    margin-top: 20px;
  }
  .test {
    width: 100%;
    height: 200vh;
  }
</style>
