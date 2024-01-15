<script setup>
function search()
{
  const keyword = document.getElementById("searchBox").value;
  alert("正在搜索：" + keyword)
}
</script>

<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/#offcanvasExample" data-bs-toggle="offcanvas" aria-controls="offcanvasExample">NPUSEC</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a href="/" class="nav-link active" aria-current="page">首页</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              用户选项
            </a>
            <ul class="dropdown-menu">
              <li><a href="/login" class="dropdown-item">登录</a></li>
              <li><a href="/register" class="dropdown-item" >注册</a></li>
            </ul>
          </li>

        </ul>

        <form class="d-flex" role="search">
          <input id="searchBox" class="form-control me-lg-3" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-primary search" type="submit" @click="search()">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>