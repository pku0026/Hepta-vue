<template>
    <div class="simple-publish-container">
      <div class="image-container">
        <img :src="imageSrc" :alt="imageAlt" />
      </div>
      <div class="title-container">
        <h1 class="main-title">{{ mainTitle }}</h1>
        <h2 class="sub-title">{{ subTitle }}</h2>
        <p class="slogan">{{ Slogan }}</p>
      </div>
      <div class="form-container">
        <h3 class="form-title">Login</h3>
        <form class="login-form">
          <div class="form-group">
            <label for="username">Account</label>
            <input type="text" id="username" name="username" placeholder="请输入账号" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="请输入密码" />
          </div>
          <div class="form-group">
            <label for="verify">Verification</label>
            <input type="text" id="verify" name="verify" placeholder="请输入验证码" />
            <img class="verify-img" :src="verifyImgSrc" :alt="verifyImgAlt" />
            <p class="error-msg" v-if="showErrorMsg">Please Try Again</p>
          </div>
          <button class="submit-btn" type="button" @click="handleLogin">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios';
  export default {
    name: "SimplePublish",
    props: {
      imageSrc: {
        type: String,
        default: require('@/assets/logo.png'),
      },
      imageAlt: {
        type: String,
        default: "hahaha",
      },
      mainTitle: {
        type: String,
        default: "Always Ready for You",
      },
      subTitle: {
        type: String,
        default: "Any Request",
      },
        Slogan: {
            type: String,
            default: "What Esver You Want",
        },
      verifyImgSrc: {
        type: String,
        default: require('@/assets/meghna.png'),
      },
      verifyImgAlt: {
        type: String,
        default: "验证码",
      },
    },
    data() {
      return {
        verify_truth: "meghua",
        showErrorMsg: false, // 默认不显示错误消息
      };
    },
    methods: {
      check_verify(usr_input){
        if(usr_input == this.verify_truth){
          return true;
        }
        else{
          return false;
        }
      },
      handleLogin() {
  
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const Verification = document.getElementById('verify').value;

        // 在这里你可以使用Axios或其他方式发送POST请求
        // 例如：
        const data = {
          account: username,
          password: password,
        }

        if (!this.check_verify(Verification)) {
        this.showErrorMsg = true; // 验证码校验失败，显示错误消息
        return; // 验证失败时终止登录处理
        }
        axios.post('http://127.0.0.1:5000/api/usr_login', data)
          .then(response => {
            console.log(response);
            const success = response.data.success;
            console.log(success);
          })
          .catch(error => {
            console.log(error);});
      }
  }
  };
  </script>
  
  <style scoped>
  .simple-publish-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1b1b1b;
    color: white;
    padding: 50px;
    box-sizing: border-box;
    width: 100%;
    position: relative;
  }
  .simple-publish-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 65%; /* 竖线左边的内容占33.33%，加上25px的左边距 */
  width: 3px; /* 竖线宽度 */
  height: 100%;
  background-color: #38c172; /* 竖线颜色 */

}
  .image-container {
    width: 30%;
    display: flex;
    align-items: center;
  }
  
  .image-container img {
    width: 100%;
  }
  
  .title-container {
    width: 40%;
  }
  
  .main-title {
    font-size: 28px;
    font-weight: bold;
    color: #38c172;
    text-align: center;
  }
  
  .sub-title {
    font-size: 24px;
    font-weight: normal;
    color: #ccc;
    text-align: center;
  }
  
  .slogan {
    font-size: 20px;
    font-weight: normal;
    color: white;
    text-align: center;
  }
  .form-container {
    width: 30%;
  }
  
  .form-title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  label {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  input {
    padding: 10px;
    font-size: 18px;
    border: none;
    background-color: #444;
    color: white;
  }
  
  .verify-img {
    width: 120px;
    height: 40px;
    margin-left: auto;
    margin-right: 0;
    margin-top: 10px;
    background-color: #ccc;
  }
  
  .submit-btn {
  margin-top: 40px;
  padding: 10px 20px;
  font-size: 24px;
  font-weight: bold;
  border: none;
    background-color: #38c172;
color: white;
cursor: pointer;
transition: background-color 0.3s ease;
}

.submit-btn:hover {
background-color: #2d6a4f;
}

.error-msg {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>