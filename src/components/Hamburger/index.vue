<template>
  <SvgIcon iconClass="hamburger" className="hamburger" :style="{ transform: collapse ? '' : 'rotate(180deg)' }" @click="changeCollapse(!collapse)" />
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Hamburger",
  computed: { ...mapGetters(["collapse"]) },
  methods: {
    ...mapMutations(["changeCollapse"]),
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
