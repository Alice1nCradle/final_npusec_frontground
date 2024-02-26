<script setup>
import {ref} from "vue";
defineProps(['name', 'number', 'id'])
const categories = ref([
  {
    id: 1,
    name: '命令执行',
    number: 77
  },
  {
    id: 2,
    name: '爆破',
    number: 48
  },
  {
    id: 3,
    name: 'XSS',
    number: 31
  },
  {
    id: 4,
    name: '反序列化',
    number: 29,
  },
  {
    id: 5,
    name: 'Java',
    number: 33,
  },
  {
    id: 6,
    name: 'SQL注入',
    number: 24,
  },
  {
    id: 7,
    name: '文件包含',
    number: 53,
  },
  {
    id: 8,
    name: '文件上传',
    number: 42,
  },
])

function handleClick() {

}
</script>

<template>
  <!-- Widget (Custom Categories) -->
  <div class="widget widget-custom-categories">
    <div class="wid-title">
      <span class="text">分类</span>
      <span class="icon"></span>
    </div>
    <div class="NFTLeo_fn_categories" data-more="Show More" data-less="Show Less" data-count="4">
      <ul v-for="item in categories" :key="item.id">
        <li><a @click.prevent="handleClick(item.title)">{{ item.name }}</a><span class="count">{{ item.number }}</span></li>
      </ul>
      <div class="clearfix"></div>
    </div>
  </div>
  <!-- !Widget (Custom Categories) -->
</template>

<style scoped>

</style>