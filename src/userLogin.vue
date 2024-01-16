<template>
<div class="container">
  <div class="login">
    <h2>登录</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">用户名:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="password">密码:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">登录</button>
    </form>
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
.login {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
}
.login form label {
  font-weight: bold;
  margin-bottom: 5px;
}
.login form input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  justify-content: end;
}

.login form button {
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login form button:hover {
  background-color: #0056b3;
}

.login h2 {
  text-align: center;
  color: #333;
}
.login form {
  display: flex;
  flex-direction: column;
}

</style>
