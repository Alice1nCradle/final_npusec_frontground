<script setup>
import {ref} from "vue";
import axios from "axios";

const searchPre = ref(
  {
    title: '全力以赴！'
  }
)
const searchNext = ref(
    {
      title: '为美好的网络安全事业献上祝福！'
    }
)
/*
axios: (
    {
      methods: 'post',
      url: '/api/getNearBlog',
      data: {
        searchPre: '',
        searchNext: ''
      }
    }
)

 */
</script>

<template>
  <!-- Previous & Next Box -->
  <div class="NFTLeo_fn_pnb">
    <div class="container">
      <div class="pnb_wrapper">

        <div class="prev item">
          <a href="/single-blog-pre.html" class="full_link"></a>
          <div class="item_in">
            <div class="img" data-bg-img="img/blog/1.jpg"></div>
            <div class="desc">
              <p class="fn_desc">上一篇文章</p>
              <h3 class="fn_title">{{ searchPre.title }}</h3>
            </div>
          </div>
        </div>

        <div class="trigger">
          <a href="blog.html" class="full_link"></a>
          <div class="icon">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>
        </div>

        <div class="next item">
          <a href="/single-blog-next.html" class="full_link"></a>
          <div class="item_in">
            <div class="img" data-bg-img="img/blog/3.jpg"></div>
            <div class="desc">
              <p class="fn_desc">下一篇文章</p>
              <h3 class="fn_title">{{ searchNext.title }}</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <!-- !Previous & Next Box -->
</template>

<style scoped>

</style>