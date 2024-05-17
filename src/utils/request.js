import axios from 'axios'
import errorCode from '@/utils/errorCode'
import { ElMessage, ElNotification } from 'element-plus'

// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: process.env.VUE_APP_BASE_API,
    // 超时
    timeout: 10000
})

// 响应拦截器
service.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    let code = res.data.code || 200
    // 获取错误信息
    let msg = errorCode[code] || res.data.msg || errorCode['default']
    // 处理状态码
    if (code === 401) {
        return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    } else if (code === 500) {
        ElMessage({ message: msg, type: 'error' })
        return Promise.reject(new Error(msg))
    } else if (code === 601) {
        ElMessage({ message: msg, type: 'warning' })
        return Promise.reject('error')
    } else if (code !== 200) {
        ElNotification({ title: msg, type: 'error' })
        return Promise.reject('error')
    } else {
        return res.data
    }
})

export default service
