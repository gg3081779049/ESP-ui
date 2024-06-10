<template>
  <el-drawer class="drawer-container" size="360" title="系统设置" append-to-body>
    <hr>
    <el-scrollbar style="height:calc(100% - 52.8px)">
      <el-divider>系统设置</el-divider>
      <div class="setting-item">
        <span>固定头部</span>
        <el-switch v-model="settings.fixedHeader" />
      </div>
      <div class="setting-item">
        <span>显示面包屑</span>
        <el-switch v-model="settings.showBreadcrumb" />
      </div>
      <div class="setting-item">
        <span>显示面包屑图标</span>
        <el-switch v-model="settings.showBreadcrumbIcon" />
      </div>
      <div class="setting-item">
        <span>显示标签页</span>
        <el-switch v-model="settings.showTagsView" />
      </div>
      <div class="setting-item">
        <span>显示标签页图标</span>
        <el-switch v-model="settings.showTagsViewIcon" />
      </div>
      <div class="setting-item">
        <span>开启标签拖拽</span>
        <el-switch v-model="settings.draggable" />
      </div>
      <div class="setting-item">
        <span>只保持一个子菜单展开</span>
        <el-switch v-model="settings.uniqueOpened" />
      </div>
      <div class="setting-item">
        <span>开启水印</span>
        <el-switch v-model="settings.watermark" />
      </div>
    </el-scrollbar>
    <div class="footer">
      <el-button plain type="primary" @click="saveSetting">
        <SvgIcon icon-class="save" />
        保存配置
      </el-button>
      <el-button plain @click="resetSetting">
        <SvgIcon icon-class="refresh" />
        重置配置
      </el-button>
    </div>
  </el-drawer>
</template>

<script>
import settings from "@/settings.js";
import { mapMutations } from "vuex";

export default {
  name: "Settings",
  data() {
    return {
      settings: {},
    };
  },
  created() {
    this.settings = JSON.parse(JSON.stringify(this.$store.state.settings));
  },
  methods: {
    saveSetting() {
      this.$model.loading("正在保存到本地，请稍候...");
      localStorage.setItem("system-settings", JSON.stringify(this.settings));
      setTimeout(() => this.$model.closeLoading(), 900);
    },
    resetSetting() {
      this.$model.loading("正在清除设置，请稍候...");
      localStorage.removeItem("system-settings");
      for (let key in settings) this.settings[key] = settings[key];
      setTimeout(() => this.$model.closeLoading(), 900);
    },
    ...mapMutations([
      "changeLayout",
      "changeFixedHeader",
      "changeShowBreadcrumb",
      "changeShowBreadcrumbIcon",
      "changeShowTagsView",
      "changeShowTagsViewIcon",
      "changeDraggable",
      "changeSidebarWidth",
      "changeUniqueOpened",
      "changeWatermark",
    ]),
  },
  watch: {
    "settings.layout"(layout) {
      this.changeLayout(layout);
    },
    "settings.fixedHeader"(fixedHeader) {
      this.changeFixedHeader(fixedHeader);
    },
    "settings.showBreadcrumb"(showBreadcrumb) {
      this.changeShowBreadcrumb(showBreadcrumb);
    },
    "settings.showBreadcrumbIcon"(showBreadcrumbIcon) {
      this.changeShowBreadcrumbIcon(showBreadcrumbIcon);
    },
    "settings.showTagsView"(showTagsView) {
      this.changeShowTagsView(showTagsView);
    },
    "settings.showTagsViewIcon"(showTagsViewIcon) {
      this.changeShowTagsViewIcon(showTagsViewIcon);
    },
    "settings.draggable"(draggable) {
      this.changeDraggable(draggable);
    },
    "settings.sidebarWidth"(sidebarWidth) {
      this.changeSidebarWidth(sidebarWidth);
    },
    "settings.uniqueOpened"(uniqueOpened) {
      this.changeUniqueOpened(uniqueOpened);
    },
    "settings.watermark"(watermark) {
      this.changeWatermark(watermark);
    },
  },
};
</script>

<style lang="scss" scoped>
.drawer-container {
  hr {
    width: 100%;
    border-top: 0.8px solid var(--el-border-color);
    border-bottom: none;
    overflow: visible;
    position: absolute;
    left: 50%;
    top: 60px;
    transform: translateX(-50%);
    opacity: 0.6;
  }
  .el-scrollbar {
    .el-divider--horizontal {
      margin: 16px 0;
    }
    .setting-item {
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: var(--el-text-color-primary);

      .el-input-number {
        width: 72px;
        ::v-deep {
          span {
            width: 24px;
          }
          .el-input__wrapper {
            padding-left: 8px;
            padding-right: 32px;
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    padding-top: 20px;
    border-top: 1px solid var(--el-border-color);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>