<template>
  <div class="scroll-container">
    <div class="scroll-wrapper">
      <ul>
        <router-link :to="{ path: '/productList' }">商品列表</router-link>
        <br>
        <router-link :to="{ path: '/detail' }">商品详情</router-link>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: "sidebar",
  data: function () {
    return {
      routes: [
        { name: "系统1", path: "/header" },
        { name: "系统2", path: "/HelloWorld/engine" },
      ],
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.scroll-container {
  width: 180px;
}
.scroll-wrapper {
  width: 180px;
  height: 100px;
}
</style>