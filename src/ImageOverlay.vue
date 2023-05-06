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
  opacity: 1;
  transition: opacity 0.2s ease;
}
  
  .image-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .button {
    margin: 0 5px;
    padding: 15px 25px;
    font-size: 18px;
    color: #fff;
    background-color: rgba(240, 158, 107, 0.8);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.2s ease;
  }
  
  .button:hover {
    background-color: rgba(216, 145, 101, 0.8);
  }
  </style>
  