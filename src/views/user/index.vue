<template>
<div class="app-container">
  <el-card style="width: 98%;height: 99%;">
    <template #header>
      <h3>个人中心</h3>
    </template>
    <el-upload action="#"></el-upload>
    <el-form label-position="right" label-width="auto" style="padding-left: 40px;" ref="form" :model="form">
      <el-form-item label="用户账号">
        
      </el-form-item>
      <el-form-item label="用户名称">

      </el-form-item>
      <el-form-item label="手机号">

      </el-form-item>
      <el-form-item label="邮箱">

      </el-form-item>
      <el-form-item label="性别">
        
      </el-form-item>
      <el-form-item label="所属部门">
        <el-select style="width:200px;" placeholder="请选择所属部门">

        </el-select>
      </el-form-item>
      <el-form-item label="密码">
        <ResetPwd :password="form.password" />
      </el-form-item>
      <el-form-item label="更新账号时间">
        {{ form.updateTime }}
      </el-form-item>
      <el-form-item label="创建账号时间">
        {{ form.createTime }}
      </el-form-item>
    </el-form>
  </el-card>
</div>
</template>

<script>
import { getUser } from "@/api/system/user"
import ResetPwd from '@/views/user/ResetPwd';

export default {
  name: "User",
  components: { ResetPwd },
  data() {
    return {
      upload: {},
      form: {
        userName: "",
        nickName: "",
        phoneNumber: "",
        gender: "",
        email: "",
        dept: "",
        updateTime: "",
        createTime: "",
        password: ""
      },
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      getUser().then(res => {
        this.form = res.data.user
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  height: calc(100vh - 84px);
  display: flex;
  justify-content: center;
  align-items: center;

  .el-form-item {
    margin-bottom: 15px;
    ::v-deep .el-form-item__label {
      margin-right: 24px;
    }
  }
}
</style>
