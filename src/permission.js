import router from '@/router'
import store from '@/store'
import { getToken } from '@/utils/auth'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 不显示旋转图标
NProgress.configure({ showSpinner: false })

// 是否已经登录
let isLogin = false;
// 白名单
const whiteList = ['/login', '/register']

router.beforeEach((to, from, next) => {
    NProgress.start();
    if (getToken()) {
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done();
        } else {
            if (!isLogin) {
                // 生成路由
                store.dispatch('init').then(() => {
                    next();
                    NProgress.done();
                    isLogin = true;
                })
            } else {
                next();
                NProgress.done();
            }
        }
    } else {
        // 没有token
        if (whiteList.indexOf(to.path) !== -1) {
            // 在免登录白名单，直接进入
            next()
        } else {
            // 否则全部重定向到登录页
            next(`/login?redirect=${to.fullPath}`);
            NProgress.done();
        }
    }
});

router.afterEach(() => {
    NProgress.done()
})
