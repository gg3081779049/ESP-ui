<template>
  <el-menu-item v-if="!item.children || item.children.length === 0" :index="item.path">
    <div style="display: flex;align-items: center"><SvgIcon :icon-class="item.icon" class-name="menu-icon" /></div>
    <span>{{ item.name }}</span>
  </el-menu-item>
  <el-sub-menu v-else :index="item.path">
    <template #title>
      <div style="display: flex;align-items: center"><SvgIcon :icon-class="item.icon" class-name="menu-icon" /></div>
      <span>{{ item.name }}</span>
    </template>
    <MenuItem v-for="item in item.children" :key="item.path" :item="item" />
  </el-sub-menu>
</template>

<script>
import SvgIcon from "@/components/SvgIcon";
export default {
  name: "MenuItem",
  components: { SvgIcon },
  props: {
    item: {
      type: Object,
      required: true
    },
  }
}
</script>

<style scoped>
.menu-icon {
  width: 1em;
  height: 1em;
  margin-right: 15px;
  fill: var(--sidebar-text);
}
</style>
