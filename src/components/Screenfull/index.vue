<template>
  <SvgIcon :icon-class="isFullScreen ? 'exit-fullscreen' : 'fullscreen'" @click="toggle" />
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "Screenfull",
  data() {
    return {
      isFullScreen: false,
    };
  },
  methods: {
    toggle() {
      if (screenfull.isEnabled) {
        screenfull.toggle();
        this.isFullScreen ^= true;
      } else {
        this.$message({ message: "你的浏览器不支持全屏", type: "warning" });
      }
    },
  },
};
</script>

<style scoped>
svg {
  width: 1em;
  height: 1em;
  fill: var(--navbar-icon-color);
  cursor: pointer;
}
</style>
