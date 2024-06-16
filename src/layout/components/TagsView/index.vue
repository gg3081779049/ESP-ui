<template>
<div class="tags-view-container">
  <scroll-pane ref="scrollPane" class="tags-view-wrapper" @scroll="closeMenu">
    <router-link
      ref="tag"
      class="tags-view-item"
      :class="{ 'is-active': tag.path === $route.path }"
      :draggable="draggable"
      v-for="tag in visitedViews"
      :key="tag"
      :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
      @click.middle="closeSelectedTag(tag)"
      @contextmenu.prevent="openMenu($event, tag)">
      <SvgIcon :icon-class="tag.meta.icon.at(-1)" v-if="showTagsViewIcon && tag.meta.icon" />
      {{ tag.meta.title.at(-1) }}
      <SvgIcon class="close-icon" icon-class="close" v-if="tag.path !== '/home'" @click.prevent.stop="closeSelectedTag(tag)" />
    </router-link>
  </scroll-pane>
  <ul class="contextmenu" v-show="visible" :style="{ left: left + 'px', top: top + 'px' }">
    <li @click="closeSelectedTag(selectedTag)" v-if="!isDefaultView"><SvgIcon icon-class="close" /> 关闭当前</li>
    <li @click="closeOthersTags"><SvgIcon icon-class="close" /> 关闭其他</li>
    <li @click="closeLeftTags" v-if="showCloseLeft"><SvgIcon icon-class="back" /> 关闭左侧</li>
    <li @click="closeRightTags" v-if="showCloseRight"><SvgIcon icon-class="right" /> 关闭右侧</li>
    <li @click="closeAllTags" v-if="!isDefaultView"><SvgIcon icon-class="circle-close" /> 全部关闭</li>
  </ul>
</div>
</template>

<script>
import ScrollPane from "./scrollPane";
import { useDraggable } from "vue-draggable-plus";
import { mapGetters } from "vuex";

export default {
  name: "TagsView",
  components: { ScrollPane },
  data() {
    return {
      visible: false,
      left: 0,
      top: 0,
      selectedTag: {},
      dragger: null
    };
  },
  computed: {
    ...mapGetters(["visitedViews", "showTagsViewIcon", "draggable"]),
    defaultViewIndex() {
      return this.visitedViews.findIndex(
        (v) => v.name === this.$store.state.tagsView.defaultViewName
      );
    },
    selectedViewIndex() {
      return this.visitedViews.findIndex(
        (v) => v.path === this.selectedTag.path
      );
    },
    isDefaultView() {
      return (
        this.defaultViewIndex > -1 &&
        this.selectedTag.path === this.visitedViews[this.defaultViewIndex].path
      );
    },
    showCloseLeft() {
      return (
        this.selectedViewIndex >
        (this.selectedViewIndex > this.defaultViewIndex ? 1 : 0)
      );
    },
    showCloseRight() {
      return (
        this.visitedViews.length - this.selectedViewIndex >
        (this.selectedViewIndex < this.defaultViewIndex ? 2 : 1)
      );
    },
  },
  mounted() {
    this.addTags();
    this.dragger = useDraggable(this.$refs.scrollPane.$el.querySelector(".el-scrollbar__view"), {
        animation: 150,
        ghostClass: "ghost",
        onUpdate: this.handleUpdate,
      });
    this.draggable ? this.dragger.start() : this.dragger.pause()
  },
  methods: {
    openMenu(e, tag) {
      this.left = Math.min(
        e.clientX - this.$el.getBoundingClientRect().left + 15,
        this.$el.offsetWidth - 105
      );
      this.top = e.clientY - 50;
      this.visible = true;
      this.selectedTag = tag;
    },
    closeMenu() {
      this.visible = false;
    },
    addTags() {
      this.$store.commit("tagsView/addView", this.$route);
    },
    closeSelectedTag(tag) {
      this.$store.commit("tagsView/delView", tag);
      if (tag.path === this.$route.path) {
        this.$router.push(this.visitedViews.at(-1).fullPath);
      }
    },
    closeLeftTags() {
      let currentIndex = this.visitedViews.findIndex(
        (v) => v.path === this.$route.path
      );
      this.$store.commit("tagsView/delLeftView", this.selectedTag);
      if (currentIndex < this.selectedViewIndex) {
        this.$router.push(this.visitedViews.at(-1).fullPath);
      }
    },
    closeRightTags() {
      let currentIndex = this.visitedViews.findIndex(
        (v) => v.path === this.$route.path
      );
      this.$store.commit("tagsView/delRightView", this.selectedTag);
      if (currentIndex > this.selectedViewIndex) {
        this.$router.push(this.visitedViews.at(-1).fullPath);
      }
    },
    closeOthersTags() {
      this.$store.commit("tagsView/delOthersViews", this.selectedTag);
      this.$router.push(this.selectedTag.fullPath);
    },
    closeAllTags() {
      this.$store.commit("tagsView/delAllViews");
      this.$router.push("/");
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag;
      this.$nextTick(() => {
        for (const [index, tag] of tags.entries()) {
          if (tag.to.path === this.$route.path) {
            const scrollContainer = this.$el.querySelector(".scroll-container");
            const scrollWrapper = scrollContainer.querySelector(
              ".el-scrollbar__wrap"
            );
            const tags = this.$refs.tag;

            let containerWidth = scrollContainer.offsetWidth;
            let tagAndTagSpacing = 4;

            let firstTag = null;
            let lastTag = null;
            let prevTag = tags[index - 1];
            let nextTag = tags[index + 1];

            if (tags.length > 0) {
              firstTag = tags[0];
              lastTag = tags.at(-1);
            }

            if (firstTag === tag) {
              scrollWrapper.scrollLeft = 0;
            } else if (lastTag === tag) {
              scrollWrapper.scrollLeft =
                scrollWrapper.scrollWidth - containerWidth;
            } else {
              let afterNextTagOffsetLeft =
                nextTag.$el.offsetLeft +
                nextTag.$el.offsetWidth +
                tagAndTagSpacing;
              let beforePrevTagOffsetLeft =
                prevTag.$el.offsetLeft - tagAndTagSpacing;

              if (
                afterNextTagOffsetLeft >
                scrollWrapper.scrollLeft + containerWidth
              ) {
                scrollWrapper.scrollLeft =
                  afterNextTagOffsetLeft - containerWidth;
              } else if (beforePrevTagOffsetLeft < scrollWrapper.scrollLeft) {
                scrollWrapper.scrollLeft = beforePrevTagOffsetLeft;
              }
            }

            break;
          }
        }
      });
    },
    handleUpdate(e) {
      this.$store.commit("tagsView/moveView", {
        oldIndex: e.oldIndex,
        newIndex: e.newIndex,
      });
      this.$refs.scrollPane.$nextTick(() => {
        let pathNameList = [
          ...this.$refs.scrollPane.$el.querySelectorAll(
            ".el-scrollbar__view a"
          ),
        ];
        for (let i = 0; i < this.visitedViews.length; i++) {
          if (this.visitedViews[i].path !== pathNameList[i].pathname) {
            console.log("标签发生位置异常");
          }
        }
      });
    },
  },
  watch: {
    $route() {
      this.addTags();
      this.moveToCurrentTag();
    },
    visible(value) {
      if (value) {
        document.body.addEventListener("click", this.closeMenu);
      } else {
        document.body.removeEventListener("click", this.closeMenu);
      }
    },
    draggable: {
      handler(draggable) {
        if (this.dragger) {
          draggable ? this.dragger.start() : this.dragger.pause()
        }
      },
    }
  },
};
</script>

<style lang="scss" scoped>
.tags-view-container {
  width: 100%;
  height: 34px;
  background: var(--tagsView-background);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  position: relative;

  .tags-view-wrapper {
    .tags-view-item {
      height: 25px;
      margin-left: 5px;
      margin-top: 4px;
      padding: 0 8px;
      border: 1px solid var(--el-color-primary-light-3);
      background: var(--tag--background);
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
      &.is-active {
        background: var(--tag--background-active);
        color: #fff;
        svg {
          fill: #fff;
        }
      }
    }
    .ghost {
      opacity: 0.2;
    }
  }

  .contextmenu {
    padding: 5px 0;
    border-radius: 4px;
    background: var(--el-bg-color-overlay);
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    font-size: 12px;
    font-weight: 400;
    position: absolute;
    list-style-type: none;
    z-index: 3000;
    cursor: pointer;
    li {
      margin: 0;
      padding: 7px 16px;
      color: var(--el-text-color-regular);
      svg {
        fill: var(--el-text-color-regular);
      }
      &:hover {
        background: var(--el-color-primary-light-9);
        color: var(--el-color-primary);
        svg {
          fill: var(--el-color-primary);
        }
      }
    }
  }
}
</style>
