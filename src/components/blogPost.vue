<script setup>
import {ref} from "vue";
defineProps(['name', 'content', 'link','group'])
const shareWays = ref([
  {
    id : 1,
    name: "微信",
    link: "https://weixin.qq.com"
  },
  {
    id : 2,
    name: "QQ",
    link: "https://www.qq.com"
  },
]);


function jump(link)
{
  window.location.href=link;
}
</script>

<template>
  <div class="card border-danger mb-xxl-auto" style="max-width: 50rem;">
    <div class="card-header bg-transparent border-success">
      <a class="navbar-brand">{{name}}</a>
    </div>
    <div class="card-body text-success">
      <h5 class="card-title">{{group}}</h5>
      <p class="card-text">{{content}}</p>
    </div>
    <div class="card-footer bg-transparent border-warning">
      <div class="container" v-for="way in shareWays" :key="way.id">
        <button class="btn btn-outline-info" @click="jump(way.link)">分享至{{way.name}}</button>
      </div>
      <button class="btn btn-outline-warning" @click.prevent="">修改</button>
      <button class="btn btn-outline-danger" @click.prevent="">删除</button>
    </div>
  </div>

</template>

<style scoped>

</style>