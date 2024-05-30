<template>
  <el-dialog class="user-center-dialog" :close-on-click-modal="false" append-to-body>
    <template #header>
      <h4 class="title">
        <SvgIcon icon-class="user" />个人中心
      </h4>
    </template>
    <div class="dialog-body">
      <div class="aside">
        <div class="item" :class="{ 'activeItem' : i === activeIndex }" v-for="(item, i) in menuList" :key="item" @click="activeIndex = i">
          <SvgIcon :icon-class="item.icon" />{{ item.title }}
        </div>
      </div>
      <div class="main">
        <el-scrollbar>
            <Account v-if="menuList[activeIndex].title === '账号设置'" />
            <System v-if="menuList[activeIndex].title === '系统设置'" />
        </el-scrollbar>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import Account from "./account";
import System from "./system";

export default {
  components: { Account, System },
  data() {
    return {
      activeIndex: 0,
      menuList: [
        { title: "账号设置", icon: "user" },
        { title: "系统设置", icon: "setting" },
      ],
    };
  },
};
</script>

<style lang="scss">
.user-center-dialog {
  width: 800px;
  height: 600px;
  position: relative;

  .el-dialog__header {
    border-bottom: 1px solid var(--el-border-color-light);
    .title {
      color: var(--el-text-color-primary);
      cursor: pointer;
      svg {
        margin-right: 5px;
        fill: var(--el-text-color-primary);
      }
    }
  }
  .el-dialog__body {
    width: 100%;
    height: calc(100% - 36px);
    .dialog-body {
      width: 100%;
      height: 100%;
      display: flex;
      .aside {
        width: 200px;
        height: 100%;
        padding: 16px 16px 0;
        border-right: 1px solid var(--el-border-color);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 2px;
        .item {
          width: 100%;
          height: 36px;
          padding-left: 9px;
          border-radius: 6px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          user-select: none;
          cursor: pointer;
          svg {
            fill: var(--el-text-color-regular);
            margin-right: 5px;
          }

          &:hover,
          &.activeItem {
            background: var(--el-color-primary-light-9);
          }
        }
      }
      .main {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }
    }
  }
}
</style>