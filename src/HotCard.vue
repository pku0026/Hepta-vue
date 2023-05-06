<template>
    <div class="card-container">
      <div class="content" id="content">
        <div class="card" v-for="card in cards" :key="card.id" @click="goToAcceptPage(card)">
          <img :src="card.url" :alt="card.alt" />
          <div class="content">
            <div class="title">{{ card.title }}</div>
            <div class="description">{{ card.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import previewAsset from "./assets/preview_asset.json";
  export default {
    props: {
      count: {
        type: Number,
        default: 5,
      },
      category: {
        type: String,
        default: "category1",
      },
    },
    data() {
      return {
        cards: [],
        activeCategory: "",
      };
    },
    watch: {
      category: {
        immediate: true,
        handler(newVal, oldVal) {
          if (newVal !== oldVal) {
            this.updateCards();
          }
        },
      },
    },
    methods: {
      async randomChooseImage(category) {
        // 获取 asset.json 文件中的数据
        const data = previewAsset
  
        // 筛选出符合 category 的图片信息
        const filteredData = data[category];
  
        // 如果没有符合 category 的图片信息，返回空数组
        if (filteredData.length === 0) {
          return;
        }
  
        // 随机选择一个图片信息并返回
        const randomIndex = Math.floor(Math.random() * filteredData.length);
        const { url, description, price, author, area } = filteredData[randomIndex];
  
        return {
          id: Math.random().toString(36).substr(2, 9),
          url,
          alt: "Card Image",
          title: "这是一张随机图片",
          description,
          price,
          author,
          area,
        };
      },
      async generateCards(count = this.count) {
        for (let i = 0; i < count; i++) {
          const card = await this.randomChooseImage(this.category);
          if (card) {
            this.cards.push(card);
          }
        }
        this.activeCategory = this.category;
      },
      async updateCards() {
        // 清空 container 中的所有卡片
        this.cards = [];
        await this.generateCards();
      },
      goToPublishPage() {
        window.location.href = "www.baidu.com";
      },
      goToAcceptPage(card) {
        window.location.href = "publish.html?id="+card.id;
      },
      async handleScroll (){
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const offsetHeight = document.documentElement.offsetHeight;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= offsetHeight) {
          await this.generateCards(6);
        }
      },
  
    },
    created() {
      this.generateCards();
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      },
  };
</script>
  
  <style>
  .card-container {
    display: flex;
    justify-content: center;
    background-color: black;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 40px;
}
  
  .card {
    width: calc(100% / 3 - 40px);
    margin: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
}
.card .content {
    padding: 20px;
}

.card .title {
  font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
}

.card .description {
  font-size: 14px;
    color: #666;
    line-height: 1.5;
}
</style>