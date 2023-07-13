<template>
  <div class="slider-border" id="SliderHome">
    <ImageSlider :slides="slides" />
  </div>
  <div class="Nav-wrapper">
    <FixedNav />
  </div>
  <div class="contact-wrapper" id="contact-wrapper">
    <ContactForm />
  </div>
  <div class="intro-wrapper" id="intro-wrapper">
    <CompanyIntro />
  </div>
  <div class="publish-wrapper" id="publish-wrapper">
    <PrivatePublish />
  </div>
  <div class="footer-wrapper" od="footer-wrapper">
    <FooterDiv />
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
import ContactForm from './ContactForm.vue'
import FooterDiv from './FooterDiv.vue'
export default {
  name: 'HomePage',
  components: {
    ImageSlider,
    FixedNav,
    CompanyIntro,
    HotTask,
    PrivatePublish,
    ContactForm,
    FooterDiv
  },
  data(){
    return {
    slides: [
          {
            img: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyNnx8QXJ0aWZpY2lhbCUyMEludGVsbGlnZW5jZXxlbnwwfHx8fDE2ODU5MzE0MDB8MA&ixlib=rb-4.0.3&q=80&w=1080',
            buttons : [
              {
                text: 'Contact',
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
    padding: 0px;
    margin: 0 auto;
  }
  .test {
    width: 100%;
    height: 200vh;
  }
</style>
