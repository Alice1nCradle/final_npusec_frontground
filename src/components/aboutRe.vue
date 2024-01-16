<script setup>
import NavigateBar from "@/components/navigateBar.vue";
import Sidebar from "@/components/sidebar.vue";
import BlogPost from "@/components/blogPost.vue";
import {ref} from "vue";

const reMembers = ref([
  {
    id : 1,
    name : "戚乐怡",
    content : "Test",
    group:　'Re',
    link: "/re/leyiqi"
  },
  {
    id : 2,
    name : "鲁逸晴",
    content : "test",
    group:　'Re',
    link: "/re/yiqinglu"
  },
])

</script>

<template>
  <div class="fixed-top">
    <navigate-bar></navigate-bar>
    <sidebar></sidebar>
  </div>

  <div class="container">
    <blog-post v-for="member in reMembers" :key="member.id" v-bind="member"></blog-post>
  </div>

</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 200px);
  justify-content: center;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  margin-top: 4em;
}



::-webkit-scrollbar{
  height: 20px;
  width: 20px;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}
</style>