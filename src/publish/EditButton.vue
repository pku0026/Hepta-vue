<template>
    <div>
      <button v-on:click="$emit('fontsize')">字体大小</button>
      <button v-on:click="$emit('color')">字体颜色</button>
      <button v-on:click="$emit('italic')">斜体</button>
      <!-- 其他编辑按钮 -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'EditButtons',
    // props接收外部传递的参数
    props: {
      // 可以定义默认值
      fontSize: {
        type: Number,
        default: 14
      },
      // 其他参数
    }
  }
  </script>
  