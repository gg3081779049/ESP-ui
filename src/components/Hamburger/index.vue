<template>
  <SvgIcon iconClass="hamburger" className="hamburger" :style="{ transform: collapse ? '' : 'rotate(180deg)' }" @click="toggleClick" />
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Hamburger",
  computed: { ...mapGetters(["collapse"]) },
  methods: {
    ...mapMutations(["changeCollapse"]),
    toggleClick() {
      this.changeCollapse(!this.collapse);
    },
  },
};
</script>

<style scoped>
.hamburger {
  width: 20px;
  height: 20px;
  fill: var(--navbar-icon-color);
}
</style>
