<script>
import TheFooter from "@/components/theFooter.vue";
import {ref} from "vue";
import NavigateBar from "@/components/navigateBar.vue";
import axios from "axios";
import ValidCode from "@/components/ValidCode.vue";

export default {
  data() {
    return {
      username: ref(''),
      password: ref(''),
    }
  },
  methods: {
    login()
    {
      const {username, password} = this;
      if(username === 'admin' && password === "123456")
      {
        alert("Welcome to NPUSEC, " + username);
        window.location.href = 'index.html';
      }
      else if(username.length === 0 || password.length === 0)
      {
        alert("Please type in your username and password!")
      }
      else
      {
        alert("Invalid login request!");
      }
    }
  },
  loginCheck()
  {
    axios.post('/api/login_check', { username: ref(), password: ref() })
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.error(error);
        });
  },
  components:{ValidCode, NavigateBar, TheFooter},

}



</script>



<template>
  <!-- Main -->
  <div class="NFTLeo_fn_main" data-footer-sticky="">
    <navigate-bar></navigate-bar>
    <div class="NFTLeo_fn_pagetitle">
      <div class="bg_overlay">
        <div class="bg_image">
          <img src="./static/picture/1-test.jpg" alt="">
        </div>
      </div>
      <div class="pt_content">
        <div class="container">
          <h3 class="fn_title fn_animated_text" data-wait="1000" data-speed="8">Login</h3>
          <div class="container">
            <div class="bg">
              <div class="login-top">
                <form class="form-horizontal" role="form">
                  <!--第1行：账号-->
                  <div class="form-group">
                    <label for="name" class="col-sm-3 control-label">Username：</label>
                    <div class="col-sm-8">
                      <input type="text" v-model="username" class="form-control" placeholder="Username">
                    </div>
                  </div>
                  <!--第2行：密码-->
                  <div class="form-group">
                    <label for="password" class="col-sm-3 control-label">Password：</label>
                    <div class="col-sm-8">
                      <input type="password" v-model="password" class="form-control" placeholder="Password">
                    </div>
                  </div>
                  <valid-code></valid-code>
                  <div class="form-group">
                    <div class="forgot col-sm-offset-2 col-sm-10">
                      <input type="submit" value="Login" @click.prevent="login">
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
        </div>
      </div>

    </div>
    <the-footer></the-footer>
  </div>



</template>



<style scoped>

</style>
