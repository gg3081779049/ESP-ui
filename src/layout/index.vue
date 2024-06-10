<template>
  <WaterMark :show="watermark">
    <Vertical v-if="layout === 'vertical'" />
  </WaterMark>
  <Settings v-model="showSettings" />
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import Vertical from "@/layout/layouts/Vertical";
import WaterMark from "@/components/WaterMark";
import Settings from "@/layout/components/Settings";

export default {
  name: "Layout",
  components: { Vertical, WaterMark, Settings },
  computed: {
    ...mapGetters(["watermark", "layout"]),
    showSettings: {
      get() {
        return this.$store.state.app.showSettings;
      },
      set(val) {
        this.changeShowSettings(val);
      },
    },
  },
  methods: {
    ...mapMutations(["changeShowSettings"]),
  },
};
</script>

<style scoped>
</style>