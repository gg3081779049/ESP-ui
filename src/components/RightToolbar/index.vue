<template>
  <div class="top-right-btn">
    <el-tooltip :content="showSearch ? '隐藏搜索' : '显示搜索'" placement="top" effect="light">
      <el-button circle @click="toggleSearch">
        <SvgIcon style="margin-right: 0" icon-class="query"/>
      </el-button>
    </el-tooltip>
    <el-tooltip content="刷新" placement="top" effect="light">
      <el-button circle @click="refresh">
        <SvgIcon style="margin-right: 0" icon-class="reset"/>
      </el-button>
    </el-tooltip>
  </div>
</template>
<script>
export default {
  name: "RightToolbar",
  props: {
    showSearch: {
      type: Boolean,
      default: true,
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {

    };
  },
  methods: {
    // 搜索
    toggleSearch() {
      this.$emit("update:showSearch", !this.showSearch);
    },
    // 刷新
    refresh() {
      this.$emit("queryTable");
    },
  }
};
</script>
<style lang="scss" scoped>
.top-right-btn {
  float: right;
}
</style>
