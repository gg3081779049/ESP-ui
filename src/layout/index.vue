<template>
  <WaterMark :show="watermark">
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
  </WaterMark>
  <Settings v-model="showSettings" />
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import WaterMark from "@/components/WaterMark";
import Settings from "@/layout/components/Settings";
import Sidebar from "@/layout/components/Sidebar";
import Navbar from "@/layout/components/Navbar";
import TagsView from "@/layout/components/TagsView";
import AppMain from "@/layout/components/AppMain";

export default {
  name: "Layout",
  components: { WaterMark, Settings, Sidebar, Navbar, TagsView, AppMain },
  computed: {
    ...mapGetters(["watermark", "theme", "fixedHeader", "showTagsView"]),
    showSettings: {
      get() {
        return this.$store.state.app.showSettings;
      },
      set(val) {
        this.changeShowSettings(val);
      },
    },
  },
  created() {
    document.documentElement.className = this.theme;
  },
  methods: {
    ...mapMutations(["changeShowSettings"]),
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
    z-index: 9;
  }
  .el-main {
    padding: 0;
    .main-scrollbar {
      .el-scrollbar__view > div {
        width: 100%;
        right: 0;
        top: 0;
        z-index: 8;
      }
    }
  }
}
</style>