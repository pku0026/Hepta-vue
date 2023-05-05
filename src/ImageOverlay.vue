<template>
    <div class="image-overlay">
      <div class="image-buttons">
        <a v-for="(button, index) in buttons"
           :key="index"
           :href="button.link"
           target="_blank"
           class="button">
          {{ button.text }}
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageOverlay',
    props: {
      buttons: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  
  .image-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 14px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.2s ease;
  }
  
  .button:hover {
    background-color: rgba(0, 0, 0, 1);
  }
  </style>
  