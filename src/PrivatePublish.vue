<template>
    <div>
      <div class="txt-container">
        <div class="publish">Simple Try?<span class="italic">Private</span></div>
        <div class="slogan">
          <div class="slogan-title">Easily Get Start</div>
          <div class="function">Dating?Shopping?...</div>
        </div>
      </div>
    </div>
    <div class="simplepublish-wrapper">
        <SimplePublish />
    </div>
  </template>

<script>
import SimplePublish from './SimplePublish.vue';
export default {
    name: 'PrivatePublish',
    components: {
        SimplePublish,
    },

};

</script>

<style>
.txt-container {
    display: flex;
    align-items: center;
    background-color: black;
    padding: 20px;
    margin: 0px;
    color: white;
  }
  
  .publish {
    font-size: 48px;
    font-weight: bold;
    margin-right: 20px;
    position: relative;
  }
  
  .italic {
    font-style: italic;
    transform: translateX(-50%);
  }
  
  .slogan {
    display: flex;
    flex-direction: column;
  }
  
  .slogan-title {
    font-size: 24px;
    color: #4CAF50;
    margin-bottom: 10px;
  }
  
  .function {
    font-size: 16px;
    color: #9E9E9E;
  }
  </style>