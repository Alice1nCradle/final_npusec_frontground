<script setup>
import {ref} from "vue";
defineProps(['id', 'name', 'content', 'group', 'link'])
defineEmits(['clickMember'])
const webMembers = ref([
  {
    id : 1,
    name : "高思平",
    content : "组长",
    group:　'Web',
    link: "/web/sipinggao"
  },
  {
    id : 2,
    name : "陈十",
    content : "组员",
    group:　'Web',
    link: "/web/shichen"
  },
  {
    id : 3,
    name : "郑传礼",
    content : "组员",
    group:　'Web',
    link: "/web/chuanlizheng"
  },
  {
    id : 4,
    name : "郑植",
    content : "组员",
    group:　'Web',
    link: "/web/zhizheng"
  },
  {
    id : 5,
    name : "林明升",
    content : "组员",
    group: 'Web',
    link: "/web/mingshenglin"
  }
])
function clickMember(link)
{
  window.href(link);
}
</script>

<template>
  <li class="team_item" v-for="member in webMembers" :key="member.id">
    <div class="t_item">
      <div class="person_info">
        <div class="img_holder">
          <img src="../static/picture/111.jpg" alt="">
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