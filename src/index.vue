<script setup>
import NavigateBar from "@/components/navigateBar.vue";
import Sidebar from "@/components/sidebar.vue";
import {ref} from "vue";
import MarkdownIt from "markdown-it";
import AboutMain from "@/components/aboutMain.vue";
const md = new MarkdownIt()
const initialBlogForm = {
  name: "",
  content:"",
  link:"",
  group:""
};
const blogForm = ref({ ...initialBlogForm});
function addPost()
{
  webMembers.value.push({
    id: webMembers.value.length + 1,
    ...blogForm.value,
  })
  blogForm.value = {...initialBlogForm};
}
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

 <div class="container">
   <about-main></about-main>
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
.container-fluid {
  margin-top: 4em;
}
.markdown{
  display: grid;
  grid-template-columns: repeat(2, 235px);
  justify-content: start;
}


::-webkit-scrollbar{
  height: 20px;
  width: 20px;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}
</style>
