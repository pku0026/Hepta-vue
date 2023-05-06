<template>
  <div class="slider-border">
    <ImageSlider :slides="slides" />
  </div>
</template>

<script>
import ImageSlider from './ImageSlider.vue'

export default {
  name: 'App',
  components: {
    ImageSlider
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
  }
  
  .slider-border {
    border: 5px solid #000;
    padding: 5px;
    margin: 0 auto;
  }
</style>
