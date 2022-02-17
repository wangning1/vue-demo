<template>
  <div class="app-container">
    <div class="address-layout">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="out-border">
            <div class="layout-title">后台项目</div>
            <div class="color-main address-content">
              <a href="https://github.com/macrozheng/mall">mall</a>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="out-border">
            <div class="layout-title">前端项目</div>
            <div class="color-main address-content">
              <a href="https://github.com/macrozheng/mall-admin-web"
                >mall-admin-web</a
              >
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="out-border">
            <div class="layout-title">学习教程</div>
            <div class="color-main address-content">
              <a href="https://github.com/macrozheng/mall-learning"
                >mall-learning</a
              >
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
    name:"home",
    
}
</script>