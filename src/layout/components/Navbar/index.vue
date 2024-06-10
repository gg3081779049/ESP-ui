<template>
  <div class="navbar-container">
    <div class="left-menu">
      <Hamburger class="hamburger-container" />
      <Breadcrumb v-if="showBreadcrumb" />
      <Settings v-model="showSettings" />
    </div>
    <div class="right-menu">
      <HeaderSearch />
      <Screenfull />
      <ThemeSwitch />
      <el-divider direction="vertical" class="divider" />
      <el-dropdown class="avatar-container" trigger="click" teleported
        @visible-change="$refs['arrow-right'].$el.style.transform=`rotate(${$event * 90}deg)`">
        <div class="avatar-wrapper">
          <img src="@/assets/images/avatar.png" class="user-avatar" alt="avatar">
          <span>&nbsp;管理员</span>
          <SvgIcon icon-class="arrow-right" ref="arrow-right" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$router.push('user')">
              <span>
                <SvgIcon icon-class="user" />
                个人中心
              </span>
            </el-dropdown-item>
            <el-dropdown-item @click="showSettings = true">
              <span>
                <SvgIcon icon-class="setting" />
                系统设置
              </span>
            </el-dropdown-item>
            <el-dropdown-item divided @click="logout">
              <span>
                <SvgIcon icon-class="exit" />
                退出登录
              </span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Hamburger from "@/components/Hamburger";
import Breadcrumb from "@/components/Breadcrumb";
import HeaderSearch from "@/components/HeaderSearch";
import Screenfull from "@/components/Screenfull";
import ThemeSwitch from "@/components/ThemeSwitch";
import Settings from "@/layout/components/Settings";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Navbar",
  components: {
    Hamburger,
    Breadcrumb,
    HeaderSearch,
    Screenfull,
    ThemeSwitch,
    Settings,
  },
  data() {
    return {
      showSettings: false,
    };
  },
  computed: { ...mapGetters(["avatar", "showBreadcrumb"]) },
  methods: {
    ...mapMutations(["changeLogin"]),
    async logout() {
      this.$confirm("确定要退出系统吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.changeLogin(false);
          this.$router.push("/login");
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-container {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  background: var(--navbar-background);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  z-index: 1;

  .left-menu {
    display: flex;
    align-items: center;
    .hamburger-container {
      margin: 0 8px;
      padding: 7px;
      cursor: pointer;
      &:hover {
        background: rgba(0, 0, 0, 0.05);
      }
    }
  }

  .right-menu {
    padding-right: 12px;
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
      }
      svg {
        fill: var(--navbar-icon-color);
        transition: var(--el-transition-duration);
      }
      &:hover {
        span {
          color: var(--el-color-primary);
        }
        svg {
          fill: var(--el-color-primary);
        }
      }
    }
  }
}
</style>