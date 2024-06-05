const getters = {
    // settings
    theme: state => state.settings.theme,
    fixedHeader: state => state.settings.fixedHeader,
    showBreadcrumb: state => state.settings.showBreadcrumb,
    showBreadcrumbIcon: state => state.settings.showBreadcrumbIcon,
    showTagsView: state => state.settings.showTagsView,
    showTagsViewIcon: state => state.settings.showTagsViewIcon,
    isFullScreen: state => state.settings.isFullScreen,
    isCollapse: state => state.settings.isCollapse,
    isUniqueOpened: state => state.settings.isUniqueOpened,
    draggable: state => state.settings.draggable,
    // menu
    menuRouterTree: state => state.menu.menuRouterTree,
    menuRouterList: state => state.menu.menuRouterList,
    // user
    avatar: state => state.user.avatar,
    // tagsView
    visitedViews: state => state.tagsView.visitedViews,
}
export default getters
