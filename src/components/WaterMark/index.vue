<template>
  <el-watermark :content="show ? '节能先锋' : null" :font="{ color: theme === 'light' ? '#00000026' : '#ffffff26' }">
    <slot />
  </el-watermark>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  computed: { ...mapGetters(["theme"]) },
};
</script>