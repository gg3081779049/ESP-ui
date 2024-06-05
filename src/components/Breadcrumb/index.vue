<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <el-breadcrumb-item v-for="item in meta" :key="item">
      <SvgIcon :icon-class="item.icon" v-if="showBreadcrumbIcon && item.icon" />
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Breadcrumb",
  computed: {
    ...mapGetters(["showBreadcrumbIcon"]),
    meta() {
      let meta = this.$route.meta;
      return meta.title.map((title, i) => ({ title, icon: meta.icon[i] }));
    },
  },
};
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  svg {
    fill: var(--el-text-color-regular);
  }
}
</style>
