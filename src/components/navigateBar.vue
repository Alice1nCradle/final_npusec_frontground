<script setup>
import axios from "axios"
import {ref} from "vue";
function search()
{
  const keyword = document.getElementById("searchBox").value;
  alert("正在搜索：" + keyword)
}
const username = "admin";
function fetchUserName()
{
  let username = ref();
  axios.post("/api/get_user",
      {
        username: username
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      })
}
</script>

<template>

  <!-- Product Modal -->
  <div class="NFTLeo_fn_modal product_modal">
    <div class="modal_in">
      <div class="modal_closer">
        <a href="#">
          <img src="../static/picture/cancel.svg" alt="" class="fn__svg">
        </a>
      </div>
      <div class="modal_content">
        <div class="NFTLeo_fn_product_modal">
          <div class="img_item">
            <!-- here comes product's image -->
          </div>
          <div class="content_item">
            <div class="NFTLeo_fn_title" data-align="left">
              <h3 class="fn_title"><!-- here comes product's title --></h3>
              <div class="line"><span></span></div>
            </div>

            <div class="desc">
              <p><!-- here comes product's description --></p>
            </div>

            <div class="buttons">
              <a href="https://www.github.com" class="NFTLeo_fn_button Github">
                <span class="icon"><img src="../static/picture/discord.svg" alt="" class="fn__svg"></span>
                <span class="text">More on Github</span>
              </a>
              <a href="https://git.qwq.cc/" class="NFTLeo_fn_button Github">
                <span class="icon"><img src="../static/picture/discord.svg" alt="" class="fn__svg"></span>
                <span class="text">More on Gitlab</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- !Product Modal -->

  <!-- Right Navigation -->
  <div class="nav_overlay"></div>
  <div class="NFTLeo_fn_nav">
    <div class="trigger is-active">
      <div class="trigger_in">
        <span class="text">Close</span>
        <span class="hamb">
					<span class="hamb_a"></span>
					<span class="hamb_b"></span>
					<span class="hamb_c"></span>
				</span>
      </div>
    </div>
    <div class="nav_content">
      <div class="nav_menu">
        <ul>
          <li class="menu-item"><a href="index.html">首页</a></li>
          <li class="menu-item menu-item-has-children">
            <a href="index.html">分组</a>
            <ul class="sub-menu">
              <li class="menu-item"><a href="web.html">Web组</a></li>
              <li class="menu-item"><a href="re.html">Re组</a></li>
              <li class="menu-item"><a href="pwn.html">Pwn组</a></li>
            </ul>
          </li>
          <li class="menu-item"><a href="blog.html">Blogs</a></li>
        </ul>
      </div>
      <div class="nav_buttons">
        <a href="/login" class="NFTLeo_fn_button">
          <span class="icon"><img src="../static/picture/discord.svg" alt="" class="fn__svg"></span>
          <span class="text">登录</span>
        </a>
        <a href="/register" class="NFTLeo_fn_button">
          <span class="icon"><img src="../static/picture/discord.svg" alt="" class="fn__svg"></span>
          <span class="text">注册</span>
        </a>
      </div>
    </div>
    <!-- Nav Footer -->
    <div class="nav_footer">
      <div class="nf_left">
        <p>Copyright &copy; 2024.NPUSEC All rights reserved.</p>
      </div>
      <div class="nf_right">
        <div class="NFTLeo_fn_social_list">
          <ul>
            <li><a href="#"><i class="fn-icon-wechat"></i></a></li>
            <li><a href="#"><i class="fn-icon-github"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- !Nav Footer -->
  </div>
  <!-- !Right Navigation -->

  <!-- Header -->
  <header class="NFTLeo_fn_header">
    <div class="container">
      <div class="header_in">

        <div class="fn_title">
          <p class="fn_desc fn_animated_text">Hello, {{ username }}</p>
        </div>

        <div class="trigger">
          <div class="trigger_in">
            <span class="text">Menu</span>
            <span class="hamb">
							<span class="hamb_a"></span>
							<span class="hamb_b"></span>
							<span class="hamb_c"></span>
						</span>
          </div>
        </div>

      </div>
    </div>
  </header>
  <!-- !Header -->

</template>

<style scoped>

</style>