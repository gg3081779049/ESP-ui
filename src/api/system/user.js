import request from '@/utils/request'

export function getUser(id) {
    return new Promise((res, rej) => {
        res({
            data: {
                user: {
                    userName: "admin",
                    nickName: "admin",
                    phoneNumber: "13766891121",
                    gender: "0",
                    email: "gg308177@qq.com",
                    dept: "测试部",
                    updateTime: "2024-05-07 20:30:53",
                    createTime: "2023-11-19 23:45:51",
                    password: "admin"
                }
            }
        })
    })
}