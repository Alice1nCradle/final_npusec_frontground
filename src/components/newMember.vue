<script setup>
import {ref} from "vue";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt()
const initialBlogForm = {
  name: "",
  content:"",
  link:"",
  group:""
};
const blogForm = ref({ ...initialBlogForm});

</script>

<template>
  <form class="container-fluid" >
    <h3 class="blogTitle">新的成员</h3>
    <input type = "text" id="blogTitle" v-model="blogForm.name">
    <h3 class="link">链接</h3>
    <input type="text" id="link" v-model="blogForm.link">
    <h3 class="link">组别</h3>
    <input type="text" id="link" v-model="blogForm.group">
    <h3 class="markdown-preview">正文（支持Markdown语法）</h3>
    <div class="markdown" id="markdownResult">
      <textarea v-model="blogForm.content" placeholder="可在下方查看渲染结果" rows="10"></textarea>
      <div v-html="md.render(blogForm.content)"></div>
    </div>
    <button class="btn btn-outline-warning" type="submit">提交</button>
  </form>
</template>

<style scoped>
.container-fluid {
  margin-top: 4em;
}
.markdown{
  display: grid;
  grid-template-columns: repeat(2, 235px);
  justify-content: start;
}
</style>