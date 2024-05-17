const getters = {
    theme: state => state.settings.theme,
    fixedHeader: state => state.settings.fixedHeader,
    isFullScreen: state => state.settings.isFullScreen,
    isCollapse: state => state.settings.isCollapse,
    menuRouterTree: state => state.menu.menuRouterTree,
    menuRouterList: state => state.menu.menuRouterList,
}
export default getters