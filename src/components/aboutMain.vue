<script setup>
import {ref} from "vue";

const items = ref ([
    {
      id: 1,
      name: 'web',
      source: 'img/bg.jpg'
    },
    {
      id: 2,
      name: 'pwn',
      source: 'img/bg.jpg'
    },
    {
      id: 3,
      name: 're',
      source: 'img/bg.jpg'
    },
])
</script>

<template>
 <div class="container">
   <el-carousel :interval="4000" type="card" height="200px">
     <el-carousel-item v-for="item in items" :key="item.id">
       <h3>{{item}}</h3>
     </el-carousel-item>
   </el-carousel>
 </div>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>