<script>
import TheFooter from "@/components/theFooter.vue";
import {ref} from "vue";
import NavigateBar from "@/components/navigateBar.vue";

export default {
  data() {
    return {
      username: ref(''),
      password_1: ref(''),
      password_2: ref('')
    }
  },
  methods:{
    register()
    {
      const {username, password_1, password_2} = this;
      //1. assert_eq!(password1, password2)
      if(password_1 !== password_2)
      {
        alert("Passwords don't match!")
      }
      else
      {
        // 2. check if there is already a user named this username
        if(username === 'admin')
        {
          alert("The User: " + username + " already exists!");
        }
        else
        {
          alert("Welcome to join us! \n \
        Username: " + username + "\n \
        Password: " + password_1);
          window.location.href = "login.html";
        }
      }

    }
  },
    /*
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

     */
  components:{NavigateBar, TheFooter},
  /*
  axios:({
    methods: "post",
    url: "/api/getUserData",
    data: {
      username: ref(''),
      password: ref('')
    }
  })
      .then(function (response) {
        alert("Success!");
        this.location.href("/login-success.html");
      })
      .catch(function (error) {
        alert("Invalid login request!");
        this.location.href("/login-error.html");
      })
      //有后端再用
   */
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
          <h3 class="fn_title fn_animated_text" data-wait="1000" data-speed="8">Register</h3>
          <div class="container">
            <div class="bg">
              <div class="login-top">
                <form class="form-horizontal" role="form">
                  <!--第1行：账号-->
                  <div class="form-group">
                    <label for="name" class="col-sm-3 control-label">Username:</label>
                    <div class="col-sm-8">
                      <input type="text" v-model="username" class="form-control" placeholder="Username">
                    </div>
                  </div>
                  <!--第2行：密码-->
                  <div class="form-group">
                    <label for="password" class="col-sm-3 control-label">Password:</label>
                    <div class="col-sm-8">
                      <input type="password" v-model="password_1" class="form-control" placeholder="Password">
                    </div>
                  </div>
                  <!--第3行：重复密码-->
                  <div class="form-group">
                    <label for="password" class="col-sm-3 control-label">Retype Password:</label>
                    <div class="col-sm-8">
                      <input type="password" v-model="password_2" class="form-control" placeholder="Password again">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="forgot col-sm-offset-2 col-sm-10">
                      <input type="submit" value="Register" @click.prevent="register">
                      <!--<button type="submit" class="btn btn-success">登录</button>-->
                    </div>
                  </div>
                </form>
              </div>
              <!--第2框：新用户登录框-->
              <div class="login-bottom">
                <h3>Already has an account? &nbsp;&nbsp<a href="/login">Login</a>&nbsp Here</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <the-footer></the-footer>

</template>


<style scoped>

</style>
