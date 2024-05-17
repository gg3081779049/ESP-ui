<template>
<section class="app-main">
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
export default {
  name: "AppMain",
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
  }
}
</script>

<style scoped>
.app-main {
  margin-top: 84px;
}
</style>
