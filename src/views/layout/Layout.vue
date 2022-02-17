<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container">   菜单</sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
import { Navbar, Sidebar, AppMain } from "./components";
export default {
  name: "layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 1000px;
  width: 100%;
  min-height: 100%;
  background-color: aqua;
}

.main-container {
  position: relative;
  background-color: rgb(226, 11, 119);
  height: 100%;
    min-height: 100%;
 
  transition: margin-left 0.28s;
  margin-left: 180px;
}

// 侧边栏
.sidebar-container {
  background-color: blueviolet;
  transition: width 0.28s;
  width: 180px !important;
  height: 100%;
  position: fixed;
  // font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
</style>