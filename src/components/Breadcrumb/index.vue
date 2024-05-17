<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <el-breadcrumb-item v-for="item in title" :key="item">{{ item }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>

export default {
  name: "Breadcrumb",
  data() {
    return {
      title: null
    }
  },
  watch: {
    $route: {
        immediate: true,
        handler (route) {
          if (route.meta.title) {
            this.title = route.meta.title
          }
        }
    }
  }
}
</script>

<style scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
}
</style>
