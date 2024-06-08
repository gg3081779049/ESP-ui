<template>
  <div class="sidebar-container" :style="{ width: `${isCollapse ? 54 : sidebarWidth}px` }">
    <div class="sidebar-logo-container">
      <img draggable="false" src="@/assets/logo/logo.png" alt="logo">
      <transition name="el-zoom-in-center">
        <h1 v-show="!isCollapse">{{ title }}</h1>
      </transition>
    </div>
    <el-scrollbar>
      <el-menu
        :default-active="$route.path.substring(1)" 
        :collapse="isCollapse"
        :unique-opened="isUniqueOpened"
        router>
        <MenuItem v-for="route in menuRouterTree" :key="route" :item="route" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MenuItem from "./MenuItem";

export default {
  name: "Sidebar",
  components: { MenuItem },
  computed: {
    ...mapGetters([
      "menuRouterTree",
      "isCollapse",
      "isUniqueOpened",
      "sidebarWidth",
    ]),
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
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: width 0.28s;
  -webkit-box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
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
}
</style>
