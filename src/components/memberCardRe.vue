<script setup>
import {ref} from "vue";
import axios from "axios";
defineProps(['id', 'name', 'content', 'group', 'link'])
const reMembers = ref([
  {
    id : 1,
    name : "戚乐怡",
    link: "/re/leyiqi"
  },
  {
    id : 2,
    name : "鲁逸晴",
    link: "/re/yiqinglu"
  },
])

function getReMember(id)
{
  let { name } = this;
  axios.get(`/api/get_user?group=re&id=${id}`)
      .then(response => {
        console.log(response.data);
        name = response.data.name
      })
      .catch(error => {
        console.error(error);
      })
}

</script>

<template>
  <li class="team_item" v-for="member in reMembers" :key="member.id">
    <div class="t_item">
      <div class="person_info">
        <div class="img_holder">
          <img src="../static/picture/61.jpg" alt="">
        </div>
        <div class="title_holder">
          <h3 class="fn_title">{{ member.name }}</h3>
        </div>
      </div>
    </div>
  </li>

</template>

<style scoped>

</style>