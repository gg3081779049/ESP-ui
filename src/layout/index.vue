<template>
  <el-container>
    <el-aside>
      <Sidebar />
    </el-aside>
    <el-main>
      <el-scrollbar class="main-scrollbar">
        <div :style="{ position: fixedHeader ? 'absolute' : '' }">
          <Navbar />
          <TagsView v-if="showTagsView" />
        </div>
        <AppMain :style="{ marginTop: `${fixedHeader ? showTagsView ? 84 : 50 : 0}px` }" />
      </el-scrollbar>
    </el-main>
  </el-container>
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
  computed: { ...mapGetters(["theme", "fixedHeader", "showTagsView"]) },
  created() {
    document.documentElement.className = this.theme;
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  width: 100vw;
  height: 100vh;
  background: var(--base-background);
  .el-aside {
    width: auto;
    overflow: visible;
    z-index: 11;
  }
  .el-main {
    padding: 0;
    .main-scrollbar {
      .el-scrollbar__view > div {
        width: 100%;
        right: 0;
        top: 0;
        z-index: 10;
      }
    }
  }
}
</style>
