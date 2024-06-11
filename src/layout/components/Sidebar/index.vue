<template>
  <div class="sidebar-container" :style="{ width: `${collapse ? 54 : sidebarWidth}px` }">
    <div class="sidebar-logo-container">
      <img draggable="false" src="@/assets/logo/logo.png" alt="logo">
      <transition name="el-zoom-in-center">
        <h1 v-show="!collapse">{{ title }}</h1>
      </transition>
    </div>
    <el-scrollbar>
      <Menu />
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Menu from "./Menu";

export default {
  name: "Sidebar",
  components: { Menu },
  computed: {
    ...mapGetters(["collapse", "sidebarWidth", "sidebarResizeable"]),
  },
  data() {
    return {
      title: process.env.VUE_APP_TITLE.toUpperCase(),
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar-container {
  height: 100%;
  background: var(--sidebar-background);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: width 0.28s;
  -webkit-transition: width 0.28s;
  .sidebar-logo-container {
    width: 100%;
    height: 50px;
    background: var(--logo-background);
    line-height: 50px;
    text-align: center;
    overflow: hidden;
    img {
      width: 32px;
      height: 24px;
      vertical-align: middle;
      cursor: pointer;
    }
    h1 {
      margin-left: 12px;
      display: inline-block;
      color: var(--logo-title-color);
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
      transition: 0.5s;
      cursor: pointer;
    }
  }
  ::v-deep .el-menu {
    --el-menu-bg-color: var(--sidebar-background);
    --el-menu-hover-bg-color: var(--sidebar-background-hover);
    --el-menu-text-color: var(--sidebar-text);
    --el-menu-active-color: var(--sidebar-text-active);
    --el-menu-border-color: var(--sidebar-background);
    .el-menu {
      --el-menu-bg-color: var(--sidebar-menu-background);
      --el-menu-hover-bg-color: var(--sidebar-menu-background-hover);
    }
    li:not([aria-expanded]).is-active .menu-icon {
      fill: var(--sidebar-text-active);
    }
  }
}
</style>