import router from '@/router'
import { getMenu } from '@/api/system/menu'

const menu = {
    state: {
        menuRouterList: [],
        menuRouterTree: []
    },
    mutations: {
        SET_MENU_ROUTER_TREE(state, menuRouterTree) {
            state.menuRouterTree = menuRouterTree
        },
        SET_MENU_ROUTER_LIST(state, menuRouterList) {
            state.menuRouterList = menuRouterList
        }
    },
    actions: {
        init({ state, commit }) {
            return new Promise(resolve => {
                getMenu().then(res => {
                    commit('SET_MENU_ROUTER_TREE', res.data)
                    commit('SET_MENU_ROUTER_LIST', getMenuRouterList(state.menuRouterTree))
                    // 添加菜单路由
                    for (let route of state.menuRouterList) {
                        router.addRoute('Layout', route)
                    }
                    resolve()
                })
            })
        }
    }
}

function getMenuRouterList(menu, parentList = []) {
    let routers = []
    menu.forEach(m => {
        if (m.children) {
            routers = routers.concat(getMenuRouterList(m.children, [...parentList, m]))
        } else {
            let list = parentList.concat(m)
            let component = require(`@/views/${list.map(m => m.path).join('/')}/index.vue`)
            let componentName = component.default.name || (component.default.name = m.path)
            routers.push({
                path: m.path,
                name: componentName,
                meta: { title: list.map(m => m.name), icon: list.map(m => m.icon) },
                component: () => component
            })
        }
    });
    return routers
}

export default menu
