<template>
  <WaterMark :show="watermark">
    <Vertical v-if="layout === 'vertical'" />
  </WaterMark>
</template>

<script>
import { mapGetters } from "vuex";

import Vertical from "@/layout/layouts/Vertical";
import WaterMark from "@/components/WaterMark";

export default {
  name: "Layout",
  components: { Vertical, WaterMark },
  computed: { ...mapGetters(["watermark", "layout"]) },
};
</script>

<style scoped>
</style>