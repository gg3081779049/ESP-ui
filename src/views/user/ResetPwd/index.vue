<template>
  <div>
    <div class="reset-pwd" v-if="isEdit">
        <el-input type="password" placeholder="旧的密码" maxlength="30" v-model="oldPassword" />
        <el-input type="password" placeholder="新的密码" maxlength="30" v-model="newPassword" show-password />
        <el-input type="password" placeholder="确认密码" maxlength="30" v-model="confirmPassword" show-password />
        <el-button @click="canelEdit">取消</el-button>
        <el-button @click="confirmEdit" type="primary" style="margin-left:-6px">确定</el-button>
    </div>
    <el-button v-else @click="edit">
        <SvgIcon icon-class="edit" />
        <span>修改</span>
    </el-button>
  </div>
</template>

<script>
export default {
    name: 'ResetPwd',
    props: ['password'],
    data() {
        return {
            isEdit: false,
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
        }
    },
    methods: {
        reset() {
            this.oldPassword = ''
            this.newPassword = ''
            this.confirmPassword = ''
        },
        edit() {
            this.isEdit = true
            this.reset()
        },
        canelEdit() {
            this.isEdit = false
            this.reset()
        },
        confirmEdit() {
            if (this.password !== this.oldPassword) {
                this.$message({
                    message: '旧的密码输入错误',
                    type: 'error'
                })
            } else if (!this.confirmPassword.length) {
                this.$message({
                    message: '密码不能为空',
                    type: 'error'
                })
            } else if (this.newPassword !== this.confirmPassword) {
                this.$message({
                    message: '两次输入的密码不一样',
                    type: 'error'
                })
            } else {

            }
        }
    }
}
</script>

<style lang="scss" scoped>
.reset-pwd {
    display: flex;
    align-items: center;
    gap: 16px;
    .el-input {
        --el-input-hover-border-color: var(--el-color-primary);
    }
}
</style>