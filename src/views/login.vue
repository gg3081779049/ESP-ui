<template>
  <div class="login">
    <el-form class="login-form" ref="loginForm" :model="loginForm" :rules="loginRules">
      <h2 class="login-title">节能先锋</h2>
      <el-form-item prop="username">
        <el-input class="login-input"
          v-model="loginForm.username"
          type="text"
          auto-complete="off"
          placeholder="账号"
        ><template #prefix>
          <SvgIcon iconClass="user" style="fill: #a8abb2" />
        </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input class="login-input"
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
          show-password
        ><template #prefix>
          <SvgIcon iconClass="password" style="fill: #a8abb2" />
        </template>
        </el-input>
      </el-form-item>
      <el-button class="login-btn"
        :loading="loading"
        @click.native.prevent="handleLogin">
        <span v-if="!loading">登 录</span>
        <span v-else>登 录 中...</span>
      </el-button>
      <div>
        <router-link :to="'/register'" class="register-link">立即注册</router-link>
      </div>
      <span class="copyright">Copyright © 2024 guangjiu All Rights Reserved.</span>
    </el-form>
  </div>
</template>

<script>
import { getCodeImg } from "@/api/login";
import Cookies from "js-cookie";
import { encrypt, decrypt } from '@/utils/jsencrypt';

export default {
  name: "Login",
  data() {
    return {
      codeUrl: "",
      loginForm: {
        username: "admin",
        password: "admin123",
        rememberMe: false,
        code: "",
        uuid: ""
      },
      loginRules: {
        username: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
        password: [{ required: true, trigger: "blur", message: "请输入您的密码" }],
        code: [{ required: true, trigger: "change", message: "请输入验证码" }],
      },
      loading: false,
      // 验证码开关
      captchaEnabled: true,
      redirect: undefined,
    };
  },
  created() {
    this.getCode();
    this.getCookie();
  },
  methods: {
    getCode() {
      getCodeImg().then(res => {
        this.captchaEnabled = res.captchaEnabled === undefined ? true : res.captchaEnabled;
        if (this.captchaEnabled) {
          this.codeUrl = "data:image/gif;base64," + res.img;
          this.loginForm.uuid = res.uuid;
        }
      })
    },
    getCookie() {
      let username = Cookies.get("username");
      let password = Cookies.get("password");
      let rememberMe = Cookies.get('rememberMe');
      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        password: password === undefined ? this.loginForm.password : decrypt(password),
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          if (this.loginForm.rememberMe) {
            Cookies.set("username", this.loginForm.username, { expires: 30 });
            Cookies.set("password", encrypt(this.loginForm.password), { expires: 30 });
            Cookies.set('rememberMe', this.loginForm.rememberMe, { expires: 30 });
          } else {
            Cookies.remove("username");
            Cookies.remove("password");
            Cookies.remove('rememberMe');
          }
          this.$store.dispatch("Login", this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || "/" }).catch(null);
          }).catch(() => {
            this.loading = false;
            if (this.captchaEnabled) {
              this.getCode();
            }
          })
        }
      })
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        this.redirect = route.query && route.query.redirect;
      },
    }
  },
}
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/images/login-background.jpg");
  background-size: cover;
}

.login-form {
  width: 400px;
  height: 500px;
  background: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 8%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.login-title {
  margin-bottom: 24px;
  letter-spacing: 1px;
  color: #666;
}

.login-input {
  width: 300px;
}

.login-btn {
  width: 120px;
  height: 32px;
  margin: 16px 0;
  border-radius: 8px;
  background: #67c23a;
  color: white;
}

.register-link {
  text-decoration: none;
  color: #67c23a;
}

.copyright {
  color: #999;
  font-size: 12px;
  position: absolute;
  bottom: 18px;
}
</style>
