<script setup>
import {ref} from "vue";
defineProps(['id', 'name', 'content', 'group', 'link'])
defineEmits(['clickMember'])
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
  {
    id : 4,
    name : "黄豆豆",
    content : "test",
    group: 'Pwn',
    link: "/pwn/doudouhuang"
  }
])
function clickMember(link)
{
  window.href(link);
}
</script>

<template>
  <li class="team_item" v-for="member in pwnMembers" :key="member.id">
    <div class="t_item">
      <div class="person_info">
        <div class="img_holder">
          <img src="../static/picture/61.jpg" alt="">
        </div>
        <div class="title_holder">
          <h3 class="fn_title">{{ member.name }}</h3>
          <p class="fn_desc">{{ member.content }}</p>
        </div>
      </div>
    </div>
  </li>

</template>

<style scoped>

</style>