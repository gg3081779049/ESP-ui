<template>
  <div class="top-right-btn">
    <el-tooltip 
      :content="showSearch ? '隐藏搜索' : '显示搜索'" 
      placement="top" 
      effect="light" 
      hide-after="0">
      <el-button circle @click="toggleSearch" style="position:relative">
        <SvgIcon style="margin-right:0" icon-class="search"/>
        <svg style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)scale(1.2)" viewBox="0 0 1024 1024" v-if="!showSearch">
          <polyline points="0,940 940,0 985,45 45,985 0,940" />
        </svg>
      </el-button>
    </el-tooltip>
    <el-tooltip content="刷新" placement="top" effect="light">
      <el-button circle @click="refresh">
        <SvgIcon style="margin-right: 0" ref="refresh" icon-class="refresh"/>
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
  methods: {
    // 搜索
    toggleSearch() {
      this.$emit("update:showSearch", !this.showSearch)
    },
    // 刷新
    refresh() {
      this.$emit("queryTable")
      this.$refs.refresh.$el.animate({ transform: `rotate(-180deg)` }, { duration: 500, easing: 'ease-out' })
    },
  }
};
</script>
<style lang="scss" scoped>
.top-right-btn {
  float: right;
}
</style>
