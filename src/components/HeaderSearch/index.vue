<template>
  <div :class="{'show':show }" class="header-search">
    <SvgIcon class="search-icon" icon-class="head-search" @click.stop="click" />
    <el-select
      ref="headerSearchSelect"
      v-model="search"
      filterable
      default-first-option
      remote
      placeholder="搜索"
      class="header-search-select"
      :remote-method="querySearch"
      @change="change">
      <el-option v-for="option in options" :key="option" :label="option.label" :value="option.value" />
    </el-select>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Fuse from "fuse.js";

export default {
  name: "HeaderSearch",
  data() {
    return {
      show: false,
      search: "",
      options: [],
      searchPool: [],
      fuse: null,
    };
  },
  computed: { ...mapGetters(["menuRouterList"]) },
  created() {
    this.searchPool = this.menuRouterList.map((item) => ({
      title: item.meta.title.join(" > "),
      path: item.path,
    }));
    this.fuse = new Fuse(this.searchPool, {
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      minMatchCharLength: 1,
      keys: [{ name: "title", weight: 0.7 }],
    });
  },
  methods: {
    click() {
      this.show = !this.show;
      // 自动聚焦
      if (this.show) {
        this.$nextTick(() => {
          this.$refs.headerSearchSelect.focus();
        });
      }
    },
    querySearch(query) {
      if (query[0] !== " " && query[0] !== ">") {
        this.options = this.fuse
          .search(query)
          .map((item) => ({ label: item.item.title, value: item.item.path }));
      } else {
        this.options = [];
      }
    },
    change(val) {
      this.$router.push(val);
      this.search = "";
      this.options = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;

  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
    width: 1em;
    height: 1em;
    fill: var(--navbar-icon-color);
    overflow: hidden;
  }

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;
    --el-border-color: var(--el-color-info-light-3);

    ::v-deep input {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
