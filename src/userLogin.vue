<template>
  <div class="box">
    <div class="content">
      <div class="login-wrapper">
        <h1>Login</h1>
        <div class="login-form">
          <div class="username form-item">
            <span>Use your email</span>
            <input type="text" class="input-item">
          </div>
          <div class="password form-item">
            <span>Input your password</span>
            <input type="password" class="input-item">
          </div>
          <button class="login-btn">Login</button>
        </div>
        <div class="divider">
          <span class="line"></span>
          <div class="divider-text">another login methods</div>
          <span class="line"></span>
        </div>
        <div class="other-login-wrapper">
          <div class="other-login-item">
            <img src="../img/assets/QQ.png" alt="QQ">
          </div>
          <div class="other-login-item">
            <img src="../img/bg.jpg" alt="Wechat">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const submitForm = () => {
      // 在这里处理登录逻辑，例如发送请求到后端验证用户名和密码
      console.log(`用户名: ${username.value}, 密码: ${password.value}`);
    };

    return { username, password, submitForm };
  },
  name: "userLogin",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;

}

.box {
  width: 100vw;
  height: 100vh;
  background-color: rgb(29, 67, 89);
  .content{
    .login-wrapper {
      h1 {
        text-align: center;
      }
      .login-form {
        .form-item {
          margin: 20px 0;
          span {
            display: block;
            margin: 5px 20px;
            font-weight: 100;
          }
          .input-item {
            width: 100%;
            border-radius: 40px;
            padding: 20px;
            box-sizing: border-box;
            font-size: 20px;
            font-weight: 200;
            &:focus {
              outline: none;
            }
          }
        }
        .login-btn {
          width: 100%;
          border-radius: 40px;
          color: #ffffff;
          
        }
      }
    }
  }
}
</style>
