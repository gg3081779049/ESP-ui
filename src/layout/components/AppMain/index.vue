<template>
<section :style="{ 'margin-top': fixedHeader ? `${showTagsView ? 84 : 50}px` : `0` }">
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <keep-alive :include="cachedViews">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppMain",
  computed: {
    ...mapGetters(["fixedHeader", "showTagsView"]),
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    },
  },
};
</script>
