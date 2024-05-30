<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <el-scrollbar>
        <div :class="{ 'fixed-header': fixedHeader }">
          <Navbar />
          <TagsView />
        </div>
        <AppMain />
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import TagsView from "./components/TagsView";
import AppMain from "./components/AppMain";

export default {
  name: "Layout",
  components: { Sidebar, Navbar, TagsView, AppMain },
  computed: { ...mapGetters(["theme", "fixedHeader"]) },
  created() {
    document.documentElement.className = this.theme;
  },
};
</script>

<style scoped>
.app-wrapper {
  width: 100vw;
  height: 100vh;
  background: var(--base-background);
}

.sidebar-container {
  width: var(--sidebar-width);
  height: 100%;
  background-color: var(--sidebar-background);
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  -webkit-box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  -webkit-transition: width 0.28s;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  transition: width 0.28s;
}

.main-container {
  height: 100%;
  transition: margin-left 0.28s;
  margin-left: var(--sidebar-width);
  position: relative;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - var(--sidebar-width));
  transition: width 0.28s;
}
</style>
