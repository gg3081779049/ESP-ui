<template>
  <SvgIcon iconClass="hamburger" className="hamburger" :style="{ transform: this.isCollapse ? '' : 'rotate(180deg)' }" @click="toggleClick" />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "Hamburger",
  computed: { ...mapGetters(['isCollapse']) },
  methods: {
    ...mapMutations(['changeCollapse']),
    toggleClick() {
      this.changeCollapse(!this.isCollapse)
    }
  }
}
</script>

<style scoped>
.hamburger {
  width: 20px;
  height: 20px;
  padding: 0 15px;
  fill: var(--navbar-icon-color);
}
</style>
