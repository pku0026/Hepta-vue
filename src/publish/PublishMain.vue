<template>
  <div class="post-container">
    <div class="post-header">
      <img src="hepta_ai2-1.png" class="logo">
      <h1 style="color: aliceblue; font-size: 40px;">Publish</h1>
      <button @click="goToHomePage">Return</button>
    </div>
    <div class="user-info">
        <div class="user-avatar"></div>
        <div class="user-details">
          <div class="user-name">用户名</div>
          <div class="user-certification">国家一级运动员</div>
          <div class="user-age">年龄</div>
          <div class="user-location">地区</div>
          <div class="user-record">
            <img src="logo.png">
            <div class="record-details">
              <div class="record-time">2023-04-30</div>
              <div class="record-summary">这是我的第一条发表记录</div>
              <div class="record-amount">100元</div>
            </div>
          </div>
          <div class="user-record">
            <img src="logo.png">
            <div class="record-details">
              <div class="record-time">2023-04-29</div>
              <div class="record-summary">这是我的第二条发表记录</div>
              <div class="record-amount">200元</div>
            </div>
          </div>
          <div class="user-record">
            <img src="logo.png">
            <div class="record-details">
              <div class="record-time">2023-04-28</div>
              <div class="record-summary">这是我的第三条发表记录</div>
              <div class="record-amount">300元</div>
            </div>
          </div>
          <div class="show-more">显示更多历史记录</div>
        </div>
      </div>
    <div class="post-body">
      <form>
        <table>
            <tr>
                <td><label for="amount">Title</label></td>
                <td><input type="text" id="title" name="title" required></td>
              </tr>
          <tr>
            <td><label for="amount">Price</label></td>
            <td><input type="text" id="amount" name="amount" required></td>
          </tr>
          <tr>
            <td><label for="time">Time</label></td>
            <td><input type="date" id="time" name="time" required><input type="time" id="time" name="time" required></td>
          </tr>
          <tr>
            <td><label for="location">Place</label></td>
            <td><input type="text" id="location" name="location" required></td>
          </tr>
          <tr>
            <td><label for="summary">Description</label></td>
            <td><FeiShu /></td>
          </tr>
          <tr>
            <td><label for="contact">Contact</label></td>
            <td><input type="text" id="contact" name="contact" required></td>
          </tr>
        </table>
      </form>
      <div class="photo-picker">
        <div class="thumbnail-container">
          <div v-for="(base64Image, index) in photos" :key="index">
            <img :src="base64Image" alt="Image" class="thumbnail"/>
          </div>
        </div>
        <label for = "file-input" class="pick-button">选择照片</label>
        <input type="file" accept="image/*" id="file-input" style="display: none;" class="file-input" @change="handleFileChange">
      </div>
      <div class="amount-estimate">
        <span>预估金额：</span>
        <span id="estimate">0</span>
      </div>
      <button id="submit-button">发布</button>
    </div>
  </div>

</template>

<script>

import FeiShu from "./FeiShu.vue"
export default {
    name: 'PublishMain',
    components: {
    FeiShu,
    },
  data() {
    return {
      title: '',
      amount: '',
      time: '',
      location: '',
      summary: '',
      contact: '',
      content: '',
      estimate: 0,
      records: [
        { image: 'logo.png', time: '2023-04-30', summary: '这是我的第一条发表记录', amount: 100 },
        { image: 'logo.png', time: '2023-04-29', summary: '这是我的第二条发表记录', amount: 200 },
        { image: 'logo.png', time: '2023-04-28', summary: '这是我的第三条发表记录', amount: 300 }
      ],
      photos: [],
    };
  },
  methods: {
    submitPost() {
      // Implement the logic for submitting the post here
      // For example, you can send the data to a server using AJAX
    },
    goToHomePage() {
      // Implement the logic to navigate to the home page here
      // For example, you can use Vue Router to navigate to the desired page
      this.$router.push('/');
    },
    handleFileChange(event) {
      const fileInput = event.target;
      if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          // 将文件数据转换为Base64编码
          const base64Data = e.target.result;
          console.log(base64Data);
          this.photos.push(base64Data);
        };
        reader.readAsDataURL(fileInput.files[0]);
      }
    },
  },
  computed: {
    totalAmount() {
      return this.records.reduce((acc, record) => acc + record.amount, 0);
    }
  }
};
</script>

<style scoped>

  
  /* 页面标题 */
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }
  
  /* 页面按钮 */
  button {
    background-color: grey;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
  
  button:hover {
    background-color: #999;
  }
  
  /* 页面容器 */
  .post-container {
    height: auto;
    overflow: hidden;
    background-color: #1b1b1b;
  }
  
  
  /* 发布头部 */
  .post-header {
    height: 100px;
    padding: 10px 20px;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    background-color: black;
  }
  
  /* 用户信息 */
  .user-info {
    float: left;
    width: 30%; /* 可根据需要进行调整 */
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-right: #ccc solid 5px;
    border-bottom: #ccc solid 5px;
  }
  
  /* 用户头像 */
  .user-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #eee;
    margin-right: 10px;
  }
  
  /* 用户详情 */
  .user-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
  }
  
  /* 用户名 */
  .user-name {
    font-size: 24px;
    font-weight: bold;
    color:#eee;
  }
  
  /* 用户认证 */
  .user-certification {
    font-size: 21px;
    color: #999;
  }
  
  /* 用户年龄 */
  .user-age {
    font-size: 21px;
    color: #999;
  }
  
  /* 用户地区 */
  .user-location {
    font-size: 21px;
    color: #999;
    margin-bottom: 30px;
  }
  
  /* 发布内容 */
  .post-body {
    float: right;
    width: 70%; /* 可根据需要进行调整 */
    box-sizing: border-box;
    padding: 20px;
  }
  
  /* 发布表单 */
  form {
    margin-bottom: 20px;
  }
  
  /* 表单标签 */
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: bold;
    color: white;
  }
  
  /* 表单输入框 */
  input[type="text"],
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  
  /* 文本输入框 */
  textarea {
    resize: vertical;
  }
  
  /* 预估金额 */
  .amount-estimate {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #eee;
    margin-top: 20px;
  }
  
  /* 发布按钮 */
  #submit-button {
    background-color: #eee;
    color: #1b1b1b;
    border: none;
    padding: 10px 20px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
  
  #submit-button:hover {
    background-color: #e05766;
  }
  
  .user-record {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .user-record img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .record-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .record-time {
    font-size: 14px;
    color: #999;
  }
  
  .record-summary {
    font-size: 16px;
    color: #eee;
    margin-top: 5px;
  }
  
  .record-amount {
    font-size: 18px;
    color: #f00;
    margin-top: 5px;
  }

  .show-more {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    color: #666;
    cursor: pointer;
  }

  .photo-picker {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .thumbnail-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .thumbnail {
    max-width: 200px;
    max-height: 200px;
    margin: 10px;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
  }
  
  .pick-button {
    padding: 10px 20px;
    background-color: #F85F73;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .image-modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image-modal img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  }
  
  .logo{
    max-height: 90%;
  }
</style>
