<template>
    <router-link
      class="tag" 
      :class="{ 'active-tag': tag.path === $route.path }" 
      :draggable="draggable"
      :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }">
        <SvgIcon :icon-class="tag.meta.icon.at(-1)" v-if="showTagsViewIcon && tag.meta.icon" />
        {{ tag.meta.title.at(-1) }}
        <SvgIcon class="close-icon" icon-class="close" v-if="tag.path !== '/home'" @click.prevent.stop="closeSelectedTag(tag)" />
    </router-link>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'Tag',
    props: {
        tag: {
            type: Object,
            required: true
        }
    },
    computed: { ...mapGetters(["showTagsViewIcon", "draggable"]) },
    methods: {
        closeSelectedTag(tag) {
            this.$emit('closeSelectedTag', tag)
        }
    }
}

</script>

<style lang="scss" scoped>
.tag {
  height: 25px;
  margin-left: 5px;
  margin-top: 4px;
  padding: 0 8px;
  border: 1px solid var(--el-color-primary-light-3);
  background: var(--el-color-primary-light-9);
  display: inline-block;
  color: var(--el-color-primary);
  font-size: 12px;
  line-height: 26px;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  svg {
    width: 12px;
    height: 12px;
    fill: var(--el-color-primary);
    &.close-icon {
      border-radius: 50%;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      &:hover {
        background: hsl(120, 19%, 75%);
        fill: var(--el-color-primary-light-8);
        transform: scale(1.1);
      }
    }
  }
  &:first-of-type {
    margin-left: 15px;
  }
  &:last-of-type {
    margin-right: 15px;
  }
  &.active-tag {
    background: var(--el-color-primary);
    color: #fff;
    svg {
      fill: #fff;
    }
  }
}
</style>