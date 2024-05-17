<template>
  <div class="navbar">
    <Hamburger class="hamburger-container" />
    <Breadcrumb />
    <div class="right-menu">
      <HeaderSearch />
      <Screenfull />
      <ThemeSwitch />
      <el-divider direction="vertical" class="divider" />
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img src="@/assets/images/avatar.png" class="user-avatar" alt="avatar">
          <span>&nbsp;管理员</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <span @click="$router.push('user')">个人中心</span>
            </el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">
              <span>退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import HeaderSearch from '@/components/HeaderSearch'
import Screenfull from '@/components/Screenfull'
import ThemeSwitch from '@/components/ThemeSwitch'
import { mapMutations } from 'vuex'

export default {
    name: 'Navbar',
    components: { Hamburger, Breadcrumb, HeaderSearch, Screenfull, ThemeSwitch },
    methods: {
      ...mapMutations(['changeLogin']),
      async logout() {
        this.$confirm('确定要退出系统吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          
        }).catch(() => {});
      },
    }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: var(--navbar-background);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);

  .hamburger-container {
    height: 100%;
    float: left;
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, .025);
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

    .avatar-container {
      .avatar-wrapper {
        cursor: pointer;
        display: flex;
        align-items: center;
        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          box-sizing: border-box;
        }
        span {
          color: var(--navbar-icon-color);
          &:hover{
            color: var(--el-color-primary);
          }
        }
      }
    }
  }
}
</style>