<script setup>

</script>

<template>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">-----------------</h5>
      <h4 class="offcanvas-title" id="offcanvasExampleLabel">Welcome to NPUSEC</h4>
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">-----------------</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="container">
        请问你今天要来点兔子吗？
      </div>
      <div class="dropdown mt-5">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
          成员介绍
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="/web">Web</a></li>
          <li><a class="dropdown-item" href="/pwn">Pwn</a></li>
          <li><a class="dropdown-item" href="/re">Re</a></li>
        </ul>

      </div>
      <div class="dropdown mt-5">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
          博客文章
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="/articles/2023">2023</a></li>
          <li><a class="dropdown-item" href="/articles/2024">2024</a></li>
        </ul>
      </div>
      <div class="dropdown mt-5">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
          任务进展
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="/missions/all">任务总览</a></li>
          <li><a class="dropdown-item" href="/missions/progress">任务进度</a></li>
          <li><a class="dropdown-item" href="/missions/accept">当前任务</a></li>
        </ul>
      </div>
      <div class="dropdown mt-5">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
          指导老师
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar{
  height: 20px;
  width: 20px;
}
::-webkit-scrollbar-corner {
  background-color: transparent;
}
</style>