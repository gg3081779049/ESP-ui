<template>
  <el-menu
    :default-active="$route.path.substring(1)"
    :collapse="collapse"
    :unique-opened="uniqueOpened"
    router>
    <MenuItem v-for="route in menuRouterTree" :key="route" :item="route" />
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
import MenuItem from "./MenuItem";

export default {
  name: "Menu",
  components: { MenuItem },
  computed: {
    ...mapGetters(["menuRouterTree", "collapse", "uniqueOpened"]),
  },
};
</script>

<style scoped>
</style>