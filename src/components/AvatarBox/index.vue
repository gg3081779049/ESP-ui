<template>
  <el-dropdown trigger="click" teleported>
    <slot :src="avatar">
      <img :src="avatar" class="user-avatar" alt="avatar">
    </slot>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="$router.push('user')">
          <span>
            <SvgIcon icon-class="user" />
            个人中心
          </span>
        </el-dropdown-item>
        <el-dropdown-item @click="changeShowSettings(true)">
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
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "AvatarBox",
  computed: { ...mapGetters(["name", "avatar"]) },
  methods: {
    ...mapMutations(["changeLogin", "changeShowSettings"]),
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
        .catch(() => { });
    },
  },
};
</script>

<style scoped>
  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-sizing: border-box;
  }
</style>