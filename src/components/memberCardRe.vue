<script setup>
import {ref} from "vue";
defineProps(['id', 'name', 'content', 'group', 'link'])
defineEmits(['clickMember'])
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
function clickMember(link)
{
  window.href(link);
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
          <p class="fn_desc">{{ member.content }}</p>
        </div>
      </div>
    </div>
  </li>

</template>

<style scoped>

</style>