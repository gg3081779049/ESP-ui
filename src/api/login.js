import request from '@/utils/request'

// 登录方法
export function login(username, password, code, uuid) {
    return request({
        url: '/login',
        method: 'post',
        data: {
            username,
            password,
            code,
            uuid,
        }
    })
}

// 获取验证码
export function getCodeImg() {
    return new Promise((resolve, reject) => {
        resolve({
            captchaEnabled: false,
            code: 200,
            msg: "操作成功",
        })
    })
}