<template>
  <div>
    <div class="sidebar-logo-container">
      <img draggable="false" src="@/assets/logo/logo.png" alt="logo">
      <transition name="el-zoom-in-center">
        <h1 v-show="!this.isCollapse">{{ title }}</h1>
      </transition>
    </div>
    <el-scrollbar>
      <el-menu
        :default-active="$route.path.substring(1)" 
        :collapse="this.isCollapse" 
        :unique-opened="isUniqueOpened" 
        router>
        <MenuItem v-for="route in this.menuRouterTree" :key="route" :item="route" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuItem from "./MenuItem"

export default {
  name: 'Sidebar',
  components: { MenuItem },
  computed: { ...mapGetters(['menuRouterTree', 'isCollapse', 'isUniqueOpened']) },
  data() {
    return {
      title: process.env.VUE_APP_TITLE.toUpperCase(),
    }
  },
}
</script>

<style lang="scss" scoped>
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
</style>
