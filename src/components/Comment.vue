<script setup>
import {computed, ref} from "vue";
// import axios from "axios";
const commentMember = ref([
  {
    id: 1,
    author: 'Mion',
    date: 20240401,
    text: '迎面走来的你让我如此蠢蠢欲动。'
  },
  {
    id: 2,
    author: '陈驰',
    date: 20240401,
    text: '狗熊岭仙人'
  },
  {
    id: 3,
    author: '陈十',
    date: 20240401,
    text: 'All of these bullshit are fake news.'
  }
])
let commentNumber = commentMember.value.length;
/*
axios: ({
  methods: 'post',
  url: '/api/getCommentData',
  data: {
    id: '',
    author: '',
    text: '',
    date: ''
  }
})

 */
</script>

<template>
  <!-- Comments -->
  <div class="NFTLeo_fn_comments">

    <div class="comment-title">
      <h3 class="fn_title">{{ commentNumber }} Comments</h3>
    </div>

    <div class="comment-list">
      <ul class="list">
        <li class="comment" v-for="item in commentMember" :key="item.id">
          <div class="comment-body">
            <div class="comment-avatar">
              <img src="/src/static/picture/comment-author1.jpg" alt="">
            </div>
            <div class="comment-text-wrap">
              <div class="comment-data">
                <h3 class="author">{{ item.author }}</h3>
                <p class="date">{{ item.date }}</p>
              </div>
              <div class="comment-text">
                <div class="desc">
                  <p>{{ item.text }}</p>
                </div>
                <div class="fn_reply">
                  <a href="#" class="reply">

                    <span>回复</span>
                  </a>
                  <a href="#" class="edit">编辑</a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="comment-respond">
      <div class="respond-title">
        <h3 class="fn_title">评论 (支持Markdown)</h3>
      </div>
      <div class="respond-log">
        <p>
          <a href="/login.html">登录</a>
          |
          <a href="/register.html">注册</a>
        </p>
      </div>
      <form class="comment-form">
        <ul class="input-items">
          <li class="input-item">
            <div class="input_item">
              <textarea name="comment" placeholder="请在此处输入"></textarea>
            </div>
          </li>
        </ul>
        <div class="clearfix"></div>
        <a href="#" class="NFTLeo_fn_button only_text">
          <span class="text">发表评论</span>
        </a>
      </form>
    </div>

  </div>
  <!-- Comments -->
</template>

<style scoped>

</style>