import { login, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
    state: {
        token: getToken(),
        name: '',
        avatar: '',
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        }
    },
    actions: {
        // 登录
        Login({ commit }, userInfo) {
            const username = userInfo.username.trim()
            const password = userInfo.password
            const code = userInfo.code
            const uuid = userInfo.uuid
            return new Promise((resolve, reject) => {
                login(username, password, code, uuid).then(res => {
                    setToken(res.token)
                    commit('SET_TOKEN', res.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 获取用户信息
        GetInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                getInfo().then(res => {
                    const user = res.user
                    const avatar = (user.avatar === "" || user.avatar === null) ? require("@/assets/images/avatar.png") : process.env.VUE_APP_BASE_API + user.avatar
                    commit('SET_AVATAR', avatar)
                    resolve(res)
                })
            })
        }
    }
};

export default user;