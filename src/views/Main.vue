
<template>
  <el-container>
    <el-header>
      <box-head></box-head>
    </el-header>
    <el-container>
      <el-aside width="260px">
        <aside-photo></aside-photo>
        <aside-menu-list></aside-menu-list>
      </el-aside>
      <el-main>
        <bread-crumb class="bread-crumb"></bread-crumb>
        <div class="content"><router-view></router-view></div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import boxHead from "views/head/BoxHead";

import asidePhoto from "views/aside/AsidePhoto";
import asideMenuList from "views/aside/AsideMenuList";

import breadCrumb from "views/main/BreadCrumb";

export default {
  name: "Main",
  data() {
    return {};
  },
  components: {
    boxHead,
    asidePhoto,
    asideMenuList,
    breadCrumb
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #3eb8f7;
  color: #fff;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
}

.el-main {
  background-color: #f0f4f7;
  color: #333;
  padding: 0;

  // 面包屑导航
  .bread-crumb {
    background-color: #f4f8fb;
    height: 50px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  }

  // 主体内容
  .content {
    padding: 10px;
    height: calc(100% - 70px);
  }
}
</style>