<script setup>
import {ref} from "vue";
import axios from "axios";
defineProps(['id', 'name', 'content', 'group', 'link'])
defineEmits(['clickMember'])
const pwnMembers = ref([
  {
    id : 1,
    name : "陈驰",
    group:　'Pwn',
    link: "/pwn/chichen"
  },
  {
    id : 2,
    name : "熊深平",
    group:　'Pwn',
    link: "/pwn/shenpingxiong"
  },
  {
    id : 3,
    name : "贺宇超",
    group:　'Pwn',
    link: "/pwn/yuchaohe"
  },
  {
    id : 4,
    name : "黄豆豆",
    group: 'Pwn',
    link: "/pwn/doudouhuang"
  }
])
function getPwnMember(id)
{
  let { name } = this;
  axios.get(`/api/get_user?group=pwn&id=${id}`)
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
  <li class="team_item" v-for="member in pwnMembers" >
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