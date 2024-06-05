<template>
  <el-drawer class="drawer-container" size="360" title="系统设置">
    <el-scrollbar style="height:calc(100% - 52.8px)">
      <el-divider>主题设置</el-divider>
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
    saveSetting() {},
    resetSetting() {},
  },
};
</script>

<style lang="scss" scoped>
.drawer-container {
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