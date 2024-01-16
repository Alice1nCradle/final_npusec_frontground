<script setup>
import NavigateBar from "@/components/navigateBar.vue";
import Sidebar from "@/components/sidebar.vue";
import BlogPost from "@/components/blogPost.vue";
import {computed, ref} from "vue";
import NewMember from "@/components/newMember.vue";
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
const total = computed(() => webMembers.value.length);
const showTotal = ref(true);

function toggleTotal()
{
  showTotal.value = !showTotal.value;
}
</script>

<template>
 <div class="fixed-top">
   <navigate-bar></navigate-bar>
   <sidebar></sidebar>
 </div>
 <div class="container">
   <blog-post v-for="member in webMembers" :key="member.id" v-bind="member"></blog-post>
   <h3 v-if="showTotal">共计 {{total}} 个成员</h3>
   <button @click="toggleTotal" class="hideButton">{{showTotal ? "隐藏" : "显示"}}总数</button>
 </div>
 <new-member @submit.prevent="addPost" ></new-member>

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
