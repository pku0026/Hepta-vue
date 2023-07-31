<template>
    <div class="feishu-editor">
      <div class="editor">
        <div v-for="(component, index) in components" :key="index" class="editor-component">
          <div v-if="component.type === 'Heading-1'">
            <h1>{{ component.content }}</h1>
          </div>
          <div v-else-if="component.type === 'Heading-2'">
            <h2>{{ component.content }}</h2>
          </div>
          <div v-else-if="component.type === 'Heading-3'">
            <h3>{{ component.content }}</h3>
          </div>
          <div v-else-if="component.type === 'Paragraph'">
            <p>{{ component.content }}</p>
          </div>
          <!-- Add other component types here -->
        </div>
        <button class="add-button" @click="showAddMenuFun">+</button>
        <div v-if="showAddMenu" class="add-menu">
          <div v-for="option in addOptions" :key="option" @click="addComponent(option)">
            {{ option }}
          </div>
        </div>
        <div v-if="!showAddMenu" class="content-input">
          <textarea v-model="currentInput" @blur="handleInputBlur"></textarea>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showAddMenu: false,
        components: [
          { type: 'Heading-1', content: 'Sample Heading' },
          { type: 'Paragraph', content: 'This is a sample paragraph.' },
        ],
        addOptions: ['Heading-1', 'Heading-2', 'Heading-3', 'Paragraph', 'Table', 'Link', 'Code Block'],
        currentInput: '', // Store the user's current input
      };
    },
    methods: {
      showAddMenuFun() {
        this.showAddMenu = !this.showAddMenu;
      },
      addComponent(option) {
        // In a real implementation, handle different component types here and update the components list accordingly.
        // For simplicity, we'll just add a sample component.
        if (option === 'Table') {
          this.components.push({ type: 'Table', content: '' });
        } else {
        this.components.push({ type: option, content: '' });
        }
        this.showAddMenu = false;
      },
      handleInputBlur() {
        // Store the current input as the content of the last added component
        console.log(this.currentInput);
        const lastComponentIndex = this.components.length - 1;
        this.components[lastComponentIndex].content = this.currentInput;
        this.currentInput = '';
        this.showAddMenu = false;
      },
    },
  };
  </script>
  
  
  <style scoped>
  .feishu-editor {
    width: 100%;
  }
  
  .editor {
    border: 1px solid #ccc;
    padding: 10px;
    min-height: 200px;
  }
  
  .editor-component {
    margin-bottom: 10px;
  }
  
  .add-button {
    background-color: #555;
    color: #fff;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
  
  .add-button:hover {
    background-color: #444;
  }
  
  .add-menu {
    background-color: #f2f2f2;
    border: 1px solid #ccc;

    padding: 5px;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }
  
  .add-menu div {
    padding: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
  
  .add-menu div:hover {
    background-color: #ccc;
  }
  </style>
  