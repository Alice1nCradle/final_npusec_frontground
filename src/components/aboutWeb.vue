<script setup>
import NavigateBar from "@/components/navigateBar.vue";
import Sidebar from "@/components/sidebar.vue";
import BlogPost from "@/components/blogPost.vue";
import {ref} from "vue";

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
  <div class="fixed-top">
    <navigate-bar></navigate-bar>
    <sidebar></sidebar>
  </div>

  <div class="container-fluid">
    <h1>Web组</h1>
    <div class="group_introduction">
      <h2>成员</h2>
    </div>

  </div>

  <div class="el-container">
    <blog-post v-for="member in webMembers" :key="member.id" v-bind="member"></blog-post>
  </div>

</template>

<style scoped>
.el-container {
  display:grid;
  grid-template-columns: repeat(3, 200px);
  justify-content: center;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  margin-top: 4em;
}

.container {

}

::-webkit-scrollbar{
  height: 20px;
  width: 20px;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}
</style>