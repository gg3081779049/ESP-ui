<template>
  <div class="account-main">
    <div style="display:flex;justify-content:center;">
      <Avatar />
    </div>
    <el-form ref="form" :model="form" label-width="auto" label-position="left">
      <el-form-item label="用户账号" prop="userName">
        {{ form.userName }}
        <el-button @click="copyText(form.userName)" plain><SvgIcon icon-class="copy" />复制</el-button>
      </el-form-item>
      <el-form-item label="用户名称" prop="nickName">
        {{ form.nickName }}
        <el-button plain><SvgIcon icon-class="edit" />修改</el-button>
      </el-form-item>
      <el-form-item label="手机号" prop="phoneNumber">
        {{ form.phoneNumber }}
        <el-button plain><SvgIcon icon-class="edit" />修改</el-button>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-button plain><SvgIcon icon-class="edit" />修改</el-button>
        {{ form.email }}
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        {{ form.gender === "0" ? '男' : '女' }}
        <el-button plain><SvgIcon icon-class="edit" />修改</el-button>
      </el-form-item>
      <el-form-item label="所属部门" prop="dept">
        {{ form.dept }}
        <el-button plain><SvgIcon icon-class="edit" />修改</el-button>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <Password :password="form.password" />
      </el-form-item>
      <el-form-item label="更新账号时间" prop="updateTime">
        {{ form.updateTime }}
      </el-form-item>
      <el-form-item label="创建账号时间" prop="createTime">
        {{ form.createTime }}
      </el-form-item>
    </el-form>
    <el-button class="logout-btn" type="large" @click="logout">
      退出登录
    </el-button>
  </div>
</template>

<script>
import { getUser } from "@/api/system/user";
import { mapMutations } from "vuex";
import Avatar from "./avatar";
import Password from "./password";

export default {
  name: "Account",
  components: { Avatar, Password },
  data() {
    return {
      form: {
        userName: "",
        nickName: "",
        phoneNumber: "",
        gender: "",
        email: "",
        dept: "",
        password: "",
        updateTime: "",
        createTime: "",
      },
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    getUser() {
      getUser().then((res) => {
        this.form = res.data.user;
      });
    },
    async logout() {
      this.$confirm("确定要退出系统吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {})
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.account-main {
  padding: 24px;
  .el-form-item {
    height: 60px;
    margin-bottom: 0;
    border-bottom: 1px solid var(--el-border-color-light);

    ::v-deep {
      .el-form-item__label-wrap {
        display: flex;
        align-items: center;
        .el-form-item__label {
          margin-right: 30px;
        }
      }
      .el-form-item__content .el-button {
        position: absolute;
        right: 0;
        svg {
          transform: translateY(-1px);
        }
      }
    }
  }
  .logout-btn {
    width: 100%;
    margin-top: 20px;
    letter-spacing: 2px;
    color: var(--el-color-primary);
    border-color: var(--el-color-primary-light-7);
  }
}
</style>