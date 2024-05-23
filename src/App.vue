<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <h1 class="title">MyPlus 组件展示</h1>

  <!-- 导航栏组件 -->
  <nav class="nav">
    <!-- 导航到首页的链接，显示文字为"Icon" -->
    <RouterLink to="/">Icon</RouterLink>
    <!-- 导航到按钮页面的链接，显示文字为"Button" -->
    <RouterLink to="/button">Button</RouterLink>
    <!-- 导航到卡片页面的链接，显示文字为"Card" -->
    <RouterLink to="/card">Card</RouterLink>
    <!-- 导航到对话框页面的链接，显示文字为"Dialog" -->
    <RouterLink to="/dialog">Dialog</RouterLink>
    <!-- 导航到分页器页面的链接，显示文字为"Pager" -->
    <RouterLink to="/pager">Pager</RouterLink>
    <!-- 导航到折叠面板页面的链接，显示文字为"Collapse" -->
    <RouterLink to="/collapse">Collapse</RouterLink>
    <!-- 导航到工具提示页面的链接，显示文字为"Tooltip" -->
    <RouterLink to="/tooltip">Tooltip</RouterLink>
    <!-- 导航到下拉菜单页面的链接，显示文字为"DropDown" -->
    <RouterLink to="/dropdown">DropDown</RouterLink>
  </nav>
  <div class="displayArea">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
h1.title {
  text-align: center;
  // margin-top: 5em;
  font-weight: 200;
}

.nav {
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
}

.displayArea {
  margin-top: 2em;
}

.active {
  border-bottom: 3px solid hsla(160, 100%, 37%, 1);
}
</style>
