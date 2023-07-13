<template>
    <nav :class="{ 'fixed-nav': isFixed }">
      <img class="logo" src="./assets/hepta_ai2-1.png" alt="商标">
      <ul>
        <li><a href="#SliderHome">Home</a></li>
        <li><a href="#intro-wrapper">About</a></li>
        <li><a href="#publish-wrapper">Publish</a></li>
        <li><a href="#hottask-wrapper">Hot</a></li>
        <li><a href="#pay">Account</a></li>
        <li><a href="#help">Help</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'FixedNav',
    data() {
      return {
        isFixed: false,
        navTop: 0,
      };
    },
    mounted() {
      this.navTop = this.$el.offsetTop;
      window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        this.isFixed = window.pageYOffset >= this.navTop;
      },
    },
  };
  </script>
  
  <style scoped>
  nav {
    position: relative;
    width: auto;
    height: 100px;
    background-color: black;
    color: white;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin: 0px;
    z-index: 2;
  }
  
  .fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  
  .logo {
    font-size: 24px;
    margin-left: 20px;
    max-width: 100%;
    max-height: 100%;
  }
  
  ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 20px 0 0;
    padding: 0;
  }
  
  li {
    margin: 0 10px;
  }
  
  a {
    color: white;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }
  
  a:hover {
    color: #f2f2f2;
  }
  </style>
  