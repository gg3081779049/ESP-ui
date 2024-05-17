<template>
  <SvgIcon class="screenfull-svg" :icon-class="isFullScreen ? 'exit-fullscreen' : 'fullscreen'" @click="click" />
</template>

<script>
import screenfull from 'screenfull'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Screenfull',
  computed: { ...mapGetters(['isFullScreen']) },
  methods: {
    ...mapMutations(['changeFullScreen']),
    click() {
      if (screenfull.isEnabled) {
        screenfull.toggle()
        this.changeFullScreen(!screenfull.isFullscreen)
      } else {
        this.$message({ message: '你的浏览器不支持全屏', type: 'warning' })
        return false
      }
    },
  },
}
</script>

<style scoped>
.screenfull-svg {
  width: 1em;
  height: 1em;
  fill: var(--navbar-icon-color);
  cursor: pointer;
}
</style>
