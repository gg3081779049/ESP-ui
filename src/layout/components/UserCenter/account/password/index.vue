<template>
  {{ isEdit ? '******' : '-' }}
  <el-button @click="open = true" plain>
    <SvgIcon icon-class="edit" />{{ isEdit ? '修改' : '设置' }}
  </el-button>
  <el-dialog v-model="open" :title="isEdit ? '修改密码' : '设置密码'" width="480px" top="20vh" append-to-body>
    <el-form ref="form" :model="form">
      <el-form-item label="旧的密码" prop="oldPassword" :rules="rule">
        <el-input v-model="form.oldPassword" placeholder="请输入旧的密码" maxlength="64" show-password />
      </el-form-item>
      <el-form-item label="新的密码" prop="newPassword" :rules="rule">
        <el-input v-model="form.newPassword" placeholder="请输入新的密码" maxlength="64" show-password />
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword" :rules="rule">
        <el-input v-model="form.confirmPassword" placeholder="请输入确认密码" maxlength="64" show-password />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="open = false">取 消</el-button>
      <el-button @click="submitForm" type="primary">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  props: ["password"],
  computed: {
    isEdit() {
      return this.password && this.password.length;
    },
  },
  data() {
    return {
      open: false,
      form: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      rule: [
        { required: true, message: "密码不能为空" },
        { min: 4, message: "密码不能少于4位", trigger: "blur" },
      ],
    };
  },
  methods: {
    submitForm() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          if (this.form.oldPassword !== this.password) {
            this.$message({
              message: "旧的密码输入错误",
              type: "error",
            });
          } else if (this.form.newPassword !== this.form.confirmPassword) {
            this.$message({
              message: "两次输入的密码不一样",
              type: "error",
            });
          } else {
            // 提交新密码
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>