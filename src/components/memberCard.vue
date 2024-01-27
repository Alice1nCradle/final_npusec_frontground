<script setup>
import {ref} from "vue";
defineProps(['id', 'name', 'content', 'group', 'link'])
const webMembers = ref([
  {
    id : 1,
    name : "高思平",
    content : "Test",
    group:　'Web',
    link: "/web/sipinggao"
  },
  {
    id : 2,
    name : "陈十",
    content : "test",
    group:　'Web',
    link: "/web/shichen"
  },
  {
    id : 3,
    name : "郑传礼",
    content : "test",
    group:　'Web',
    link: "/web/chuanlizheng"
  },
  {
    id : 4,
    name : "郑植",
    content : "test",
    group:　'Web',
    link: "/web/zhizheng"
  }
])
</script>

<template>
  <div class="person_info">
    <div class="img_holder">
      <img src="../static/picture/111.jpg" alt="">
    </div>
    <div class="title_holder">
      <h3 class="fn_title">test</h3>
      <p class="fn_desc">test</p>
    </div>
  </div>
  <div class="person_social">
    <ul>
      <li><a href="#"><i class="fn-icon-twitter"></i></a></li>
      <li><a href="#"><i class="fn-icon-facebook"></i></a></li>
      <li><a href="#"><i class="fn-icon-instagram"></i></a></li>
      <li><a href="#"><i class="fn-icon-pinterest"></i></a></li>
      <li><a href="#"><i class="fn-icon-behance"></i></a></li>
    </ul>
  </div>
</template>

<style scoped>

</style>