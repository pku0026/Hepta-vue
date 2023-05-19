<template>
    <textarea v-model="text" :style="{ width: '100%', height: '100px', overflow: 'auto' }"></textarea>
  </template>
  
  <script>
  export default {
    name: 'ScrollableInput',
    // props接收外部传递的参数
    props: {
      // 可以定义默认值
      text: {
        type: String,
        default: ''
      },
      // 其他参数
    },
    data() {
      return {
        // 组件内部数据
      }
    }
  }
  </script>
  