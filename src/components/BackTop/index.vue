<template>
  <el-backtop target=".main-container .el-scrollbar__wrap" :visibility-height="120" title="返回顶部" class="backtop-btn">
    <template #default>
      <SvgIcon icon-class="backtop" />
    </template>
  </el-backtop>
</template>

<style lang="scss" scoped>
.backtop-btn {
  width: 32px;
  height: 32px;
  border: var(--el-border);
  background: var(--el-fill-color-blank);
  box-shadow: none;
  opacity: 0.5;
  position: relative;
  svg {
    width: 16px;
    height: 16px;
    fill: var(--el-text-color-regular);
  }
  &:hover {
    border-color: var(--el-color-primary-light-7);
    background: var(--el-color-primary-light-9);
    opacity: 1;
    svg {
      fill: var(--el-color-primary);
    }
  }
}
</style>