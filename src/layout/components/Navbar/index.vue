<template>
  <div class="navbar">
    <Hamburger class="hamburger-container" />
    <Breadcrumb />
    <div class="right-menu">
      <HeaderSearch />
      <Screenfull />
      <ThemeSwitch />
      <el-divider direction="vertical" class="divider" />
      <div class="avatar-wrapper" @click="openUserCenter = true">
        <img :src="avatar" class="user-avatar" alt="avatar">
        <span>&nbsp;管理员</span>
        <UserCenter v-model="openUserCenter" />
      </div>
    </div>
  </div>
</template>

<script>
import Hamburger from "@/components/Hamburger";
import Breadcrumb from "@/components/Breadcrumb";
import HeaderSearch from "@/components/HeaderSearch";
import Screenfull from "@/components/Screenfull";
import ThemeSwitch from "@/components/ThemeSwitch";
import UserCenter from "@/layout/components/UserCenter";
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  components: {
    Hamburger,
    Breadcrumb,
    HeaderSearch,
    Screenfull,
    ThemeSwitch,
    UserCenter,
  },
  data() {
    return {
      openUserCenter: false,
    };
  },
  computed: { ...mapGetters(["avatar"]) }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: var(--navbar-background);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);

  .hamburger-container {
    height: 100%;
    float: left;
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .right-menu {
    padding-right: 16px;
    float: right;
    height: 100%;
    line-height: 50px;
    display: flex;
    align-items: center;
    gap: 16px;

    .divider {
      height: 22px;
      margin: 0 -6px;
      opacity: 0.4;
      border-left-width: 1px;
      border-color: var(--navbar-icon-color);
    }

    .avatar-wrapper {
      cursor: pointer;
      display: flex;
      align-items: center;
      color: var(--navbar-icon-color);
      .user-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        box-sizing: border-box;
        &:hover + span {
          color: var(--el-color-primary);
        }
      }
      span:hover {
        color: var(--el-color-primary);
      }
    }
  }
}
</style>