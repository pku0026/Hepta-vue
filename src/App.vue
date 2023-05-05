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
            img: require('@/assets/logo.png')
          },
          {
            img: require('@/assets/hepta.jpg')
          },
          {
            img: require('@/assets/meghna.png')
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
