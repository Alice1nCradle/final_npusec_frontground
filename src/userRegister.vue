<template>
  <div class="register">
    <h2>注册</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">用户名:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="email">邮箱:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">密码:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">注册</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    const email = ref('');
    const password = ref('');

    const submitForm = () => {
      // 在这里处理注册逻辑，例如发送请求到后端创建新用户
      console.log(`用户名: ${username.value}, 邮箱: ${email.value}, 密码: ${password.value}`);
    };

    return { username, email, password, submitForm };
  },
  name: 'userRegister',
};
</script>

<style scoped>
.register {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.register h2 {
  text-align: center;
  color: #333;
}

.register form {
  display: flex;
  flex-direction: column;
}

.register form div {
  margin-bottom: 10px;
}

.register form label {
  font-weight: bold;
  margin-bottom: 5px;
}

.register form input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.register form button {
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.register form button:hover {
  background-color: #0056b3;
}
</style>
