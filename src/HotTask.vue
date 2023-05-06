<template>
  <div>
    <div class="txt-container">
      <div class="hot">热门<span class="italic">Hot</span></div>
      <div class="slogan">
        <div class="work">工作——属于你</div>
        <div class="money">快来赚钱吧</div>
      </div>
    </div>
    <nav>
      <ul>
        <li v-for="category in categories" :key="category">
          <a href="#" @click.prevent="changeCategory(category)" :class="{ active: category === activeCategory }">{{ category }}</a>
        </li>
      </ul>
    </nav>
    <HotCard :count="count" :category="activeCategory" />
  </div>
</template>

<script>
import HotCard from './HotCard.vue';

export default {
  name: 'HotTask',
  components: {
    HotCard,
  },
  data() {
    return {
      count: 6,
      categories: ["category1", "category2", "category3", "category4"],
      activeCategory: "category1",
    };
  },
  methods: {
    changeCategory(category) {
      this.activeCategory = category;
    },
  },
};
</script>

<style>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  width: 100%;
  height: auto;
  background-color: black;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav li {
  margin: 0 10px;
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
  border-radius: 4px;
  color: white;
  transition: background-color 0.2s ease-in-out;
}

nav a.active {
  background-color: #f0f0f0;
  color: black;
}
.txt-container {
  display: flex;
  align-items: center;
  background-color: black;
  padding: 20px;
  color: white;
  margin-bottom: 5px;
}

.hot {
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

.work {
  font-size: 24px;
  color: #4CAF50;
  margin-bottom: 10px;
}

.money {
  font-size: 16px;
  color: #9E9E9E;
}
</style>
