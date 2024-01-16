<script setup>
import NavigateBar from "@/components/navigateBar.vue";
import Sidebar from "@/components/sidebar.vue";
import BlogPost from "@/components/blogPost.vue";
import {computed, ref} from "vue";



const pwnMembers = ref([
  {
    id : 1,
    name : "陈驰",
    content : "Test",
    group:　'Pwn',
    link: "/pwn/chichen"
  },
  {
    id : 2,
    name : "熊深平",
    content : "test",
    group:　'Pwn',
    link: "/pwn/shenpingxiong"
  },
  {
    id : 3,
    name : "贺宇超",
    content : "test",
    group:　'Pwn',
    link: "/pwn/yuchaohe"
  },
])
const total = computed(() => pwnMembers.value.length);
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
    <blog-post v-for="member in pwnMembers" :key="member.id" v-bind="member"></blog-post>
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