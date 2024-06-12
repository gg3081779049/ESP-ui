const getters = {
    // settings
    theme: state => state.settings.theme,
    layout: state => state.settings.layout,
    language: state => state.settings.language,
    fixedHeader: state => state.settings.fixedHeader,
    showBreadcrumb: state => state.settings.showBreadcrumb,
    showBreadcrumbIcon: state => state.settings.showBreadcrumbIcon,
    showTagsView: state => state.settings.showTagsView,
    showTagsViewIcon: state => state.settings.showTagsViewIcon,
    draggable: state => state.settings.draggable,
    sidebarWidth: state => state.settings.sidebarWidth,
    uniqueOpened: state => state.settings.uniqueOpened,
    watermark: state => state.settings.watermark,
    // menu
    menuRouterTree: state => state.menu.menuRouterTree,
    menuRouterList: state => state.menu.menuRouterList,
    // user
    name: state => state.user.name,
    avatar: state => state.user.avatar,
    // tagsView
    visitedViews: state => state.tagsView.visitedViews,
    // app
    title: state => state.app.title,
    collapse: state => state.app.collapse,
    showSettings: state => state.app.showSettings,
}

export default getters