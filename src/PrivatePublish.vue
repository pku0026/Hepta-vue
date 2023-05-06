<template>
    <div>
      <div class="txt-container">
        <div class="publish">发布<span class="italic">Private</span></div>
        <div class="slogan">
          <div class="slogan-title">一点小钱，可以让你更轻松</div>
          <div class="function">委托，发单，约会样样精通</div>
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
    color: white;
    margin-top: 5px;
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