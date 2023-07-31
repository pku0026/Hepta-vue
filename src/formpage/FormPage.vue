<template>
    <div class="post-container">
      <div class="post-header">
        <img src="/hepta_ai2-1.png" class="logo">
        <h1 style="color: aliceblue; font-size: 40px;">{{title}}</h1>
        <button @click="goToHomePage">Return</button>
      </div>
      <div class="row-container">
      <div class="user-info">
          <div class="user-avatar"></div>
          <div class="user-details">
            <div class="user-name">用户名</div>
            <div class="user-certification">国家一级运动员</div>
            <div class="user-age">年龄</div>
            <div class="user-location">地区</div>
            <div class="user-record">
              <img src="/logo.png">
              <div class="record-details">
                <div class="record-time">2023-04-30</div>
                <div class="record-summary">这是我的第一条发表记录</div>
                <div class="record-amount">100元</div>
              </div>
            </div>
            <div class="user-record">
              <img src="/logo.png">
              <div class="record-details">
                <div class="record-time">2023-04-29</div>
                <div class="record-summary">这是我的第二条发表记录</div>
                <div class="record-amount">200元</div>
              </div>
            </div>
            <div class="user-record">
              <img src="/logo.png">
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
      <div class="container">
    <div class="header">
      <div class="date-time">2023年07月31日 14:30</div>
      <div class="location">地点：某某地区</div>
      <div class="contact">联系方式：xxx-xxx-xxxx</div>
    </div>
    <div class="image-preview">
      <img
        v-for="(photo, index) in photos"
        :key="index"
        :src="photo"
        @click="toggleImagePreview(index)"
        :class="{ 'enlarged': enlargedImage === index }"
        alt="预览图片"
      />
    </div>
    <div class="overlay" v-if="enlargedImage !==null">
      </div>
    <div class="content">
      <p>
        这里是一大段文字内容，用于描述详细信息。这里是一大段文字内容，用于描述详细信息。这里是一大段文字内容，用于描述详细信息。
      </p>
      <p>
        这里是一大段文字内容，用于描述详细信息。这里是一大段文字内容，用于描述详细信息。这里是一大段文字内容，用于描述详细信息。
      </p>
      <p>
        这里是一大段文字内容，用于描述详细信息。这里是一大段文字内容，用于描述详细信息。这里是一大段文字内容，用于描述详细信息。
      </p>
      <p>
        这里是一大段文字内容，用于描述详细信息。这里是一大段文字内容，用于描述详细信息。这里是一大段文字内容，用于描述详细信息。
      </p>
      <p>
        这里是一大段文字内容，用于描述详细信息。这里是一大段文字内容，用于描述详细信息。这里是一大段文字内容，用于描述详细信息。
      </p>
      <p>
        这里是一大段文字内容，用于描述详细信息。这里是一大段文字内容，用于描述详细信息。这里是一大段文字内容，用于描述详细信息。
      </p>
    </div>
  </div>
</div>
<div class="rightbody">
        <div class="amount-estimate">
          <span>预估金额：</span>
          <span id="estimate">0</span>
          <span>实际金额：</span>
          <span id="actuall">100</span>
        </div>
        <button id="submit-button">Accept</button>
        <div class="comment-area">
    <h2 style="color:white;">评论区</h2>
    <div class="comment-input">
      <textarea v-model="newComment" placeholder="输入您的评论..."></textarea>
      <button @click="addComment">发表评论</button>
    </div>
    <div class="comment-list">
      <div v-for="(comment, index) in comments" :key="index" class="comment-item">
        <p style="color:white;">{{ comment }}</p>
        <button @click="deleteComment(index)">删除</button>
      </div>
    </div>
  </div>
      </div>
      </div>div>
    </div>
  
  </template>
  
  <script>
  
  export default {
      name: 'FormPage',
    data() {
      return {
        title: 'First Post',
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
        photos: ['/logo.png','/hepta_ai2-1.png'],
        enlargedImage: null, // 用于记录放大的图片索引
        newComment: "", // 用户输入的新评论
      comments: [], // 存储所有评论的数组
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
      toggleImagePreview(index) {
      // 切换图片预览状态
      if (this.enlargedImage === index) {
        this.enlargedImage = null; // 再次点击图片时，恢复原样
      } else {
        this.enlargedImage = index; // 点击图片放大
      }
    },
      addComment() {
      if (this.newComment.trim() !== "") {
        this.comments.push(this.newComment.trim());
        this.newComment = ""; // 清空输入框
      }
    },
    deleteComment(index) {
      this.comments.splice(index, 1);
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
      float: 0 0 30%;;
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
      width: 100%; /* 可根据需要进行调整 */
      box-sizing: border-box;
      padding: 10px;
      flex: 1;
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
    .container {
      padding: 20px;
  margin: 0 auto;
  background-color: #333;
  float: left;
  margin: 10px;
}

.header {
  text-align: left;
  margin-bottom: 20px;
}

.date-time {
  font-size: 20px;
  font-weight: bold;
  color: #1e90ff;
}

.location,
.contact {
  font-size: 16px;
  color: #aba8a8;
}

.image-preview {
  text-align: center;
  margin-bottom: 20px;

}

.image-preview img {
  max-width: 100%;
  border: 2px solid #aba8a8;
  border-radius: 5px;
  cursor: pointer;
}

.image-preview img.enlarged {
  position: absolute;
      top: 50%;
      left: 50%;
  transform: scale(1.5) translate(calc(-100%/3), calc(-100%/3)); /* 放大效果 */
  transition: transform 0.2s ease-in-out;
  max-width: 50%;
  z-index: 2;
}

.content {
  color: #bbb9b9;
  line-height: 1.6;
}
.overlay {
  background-color: #333;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.comment-area {
  max-width: 400px;
  margin: 0 auto;
}

.comment-input textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}

.comment-input button {
  padding: 8px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.comment-list .comment-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;
}

.rightbody {
  flex: 0 0 30%; /* 占最右边30%的宽度，不可伸缩 */
  padding: 10px;
}

.row-container {
  display: flex;
}

  </style>
  