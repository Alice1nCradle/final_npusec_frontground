<template>
  <!-- Main -->
  <div class="NFTLeo_fn_main" data-footer-sticky="">
    <navigate-bar></navigate-bar>
    <div class="bg">
      <div class="welcome">
        <h1>欢迎光临</h1>
      </div>
      <div class="login-top">
        <h2>登录</h2>
        <form class="form-horizontal" role="form">
          <!--第1行：账号-->
          <div class="form-group">
            <label for="name" class="col-sm-3 control-label">Username：</label>
            <div class="col-sm-8">
              <input type="text" id="name" class="form-control" placeholder="请输入用户名">
            </div>
          </div>
          <!--第2行：密码-->
          <div class="form-group">
            <label for="password" class="col-sm-3 control-label">Password：</label>
            <div class="col-sm-8">
              <input type="password" id="password" class="form-control" placeholder="请输入密码">
            </div>
          </div>
          <div class="form-group">
            <div class="forgot col-sm-offset-2 col-sm-10">
              <input type="submit" value="Login">
              <!--<button type="submit" class="btn btn-success">登录</button>-->
            </div>
          </div>
        </form>
      </div>
      <!--第2框：新用户登录框-->
      <div class="login-bottom">
        <h3>A new user? &nbsp;&nbsp<a href="/register">Register</a>&nbsp Here</h3>
      </div>
    </div>
  </div>

  <the-footer></the-footer>


</template>

<script>
import { ref } from 'vue';
import NavigateBar from "@/components/navigateBar.vue";
import TheFooter from "@/components/theFooter.vue";

export default {
  components: {TheFooter, NavigateBar},
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
/*--2.中间登录框的大小，根据屏幕比例自适应变化--*/
.bg {
  width: 200%;
  margin: 0 auto;
}
.bg h2{
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin: 0 0 50px 0;
}

/*--3.登录框上半部分--*/
.login-top {
  background-color:#E1E1E1 ;
  border-radius: 25px 25px 0 0;
  padding: 40px 60px;
  opacity:0.9;
}
.login-top h1 {
  text-align: center;
  font-size: 27px;
  font-weight: 500;
  color: #ADD8E6;
  margin: 0 0 20px 0;
}

/*3.2.账户输入框的样式自定义*/
.login-top input[type="text"] {
  outline: none;
  font-size: 15px;
  font-weight: 500;
  color: #818181;
  padding: 1px 20px;
  background: #CACACA;
  border: 1px solid #ccc;
  border-radius:25px;
  margin: 0 0 12px 0;
  width: 88%;
}

/*3.3.密码输入框的样式自定义*/
.login-top input[type="password"]{
  outline: none;
  font-size: 15px;
  font-weight: 500;
  color: #818181;
  padding: 1px 20px;
  background: #CACACA;
  border: 1px solid #ccc;
  border-radius:25px;
  margin: 0 0 12px 0;
  width: 88%;
}

/*3.4.忘记密码*/
.forgot  a{
  font-size: 13px;
  font-weight: 500;
  color: #F45B4B;
  display: inline-block;
  border-right: 2px solid #ADD8E6;
  padding: 0 7px 0 0;
}
.forgot  a:hover{
  color: #818181;
}

.forgot input[type="submit"] {
  background: #ADD8E6;
  color: #FFF;
  font-size: 17px;
  font-weight: 400;
  padding: 8px 7px;
  width: 20%;
  display: inline-block;
  cursor: pointer;
  border-radius: 6px;
  margin: 0 7px 0 3px;
  outline: none;
  border: none;
}
.forgot input[type="submit"]:hover {
  background:#818181;
  transition: 0.5s all;
}

.login-bottom {
  background: #ADD8E6;
  padding: 20px 65px;
  border-radius: 0 0 25px 25px;
  text-align: right;
  border-top: 2px solid #ADD8E6;
}
.login-bottom h3 {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}
.login-bottom h3 a {
  font-size: 25px;
  font-weight: 500;
  color: #fff;
}
.login-bottom h3 a:hover {
  color:#696969;
  transition: 0.5s all;/*颜色渐变效果*/
}

.welcome {
  justify-content: center;
}

</style>
