<script setup>
import {ref} from "vue";
import axios from "axios";

const authorData = ref(
    {
      author: '陈十',
      slogan: '我所热爱的，便是我的生活。'
    }
)

function getAuthor()
{
  let { author, slogan } = this;
  axios.get(`/api/get_author?author=${author}`)
      .then(response => {
        console.log(response.data);
        author = response.data.author;
        slogan = response.data.slogan;
      })
      .catch(error => {
        console.error(error);
      })
}
</script>

<template>
  <!-- Author Information Box -->
  <div class="NFTLeo_fn_author_info">
    <div class="info_img">
      <img src="/src/static/picture/61.jpg" alt="">
    </div>
    <div class="info_desc" :content="getAuthor">
      <h3 class="fn_title">{{ getAuthor.author }}</h3>
      <p class="fn_desc">{{ getAuthor.slogan }}</p>
      <ul class="social">
        <li><a href="#"><i class="fn-icon-wechat"></i></a></li>
        <li><a href="#"><i class="fn-icon-github"></i></a></li>
        <li><a href="#"><i class="fn-icon-rss"></i></a></li>
      </ul>
    </div>
  </div>
  <!-- !Author Information Box -->
</template>

<style scoped>

</style>