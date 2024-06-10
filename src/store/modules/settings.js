import defaultSettings from '@/settings.js'

const storageSettings = JSON.parse(localStorage.getItem('system-settings')) || ''

const settings = {
    state: {
        theme: storageSettings.theme === undefined ? defaultSettings.theme : storageSettings.theme,
        layout: storageSettings.layout === undefined ? defaultSettings.layout : storageSettings.layout,
        fixedHeader: storageSettings.fixedHeader === undefined ? defaultSettings.fixedHeader : storageSettings.fixedHeader,
        showBreadcrumb: storageSettings.showBreadcrumb === undefined ? defaultSettings.showBreadcrumb : storageSettings.showBreadcrumb,
        showBreadcrumbIcon: storageSettings.showBreadcrumbIcon === undefined ? defaultSettings.showBreadcrumbIcon : storageSettings.showBreadcrumbIcon,
        showTagsView: storageSettings.showTagsView === undefined ? defaultSettings.showTagsView : storageSettings.showTagsView,
        showTagsViewIcon: storageSettings.showTagsViewIcon === undefined ? defaultSettings.showTagsViewIcon : storageSettings.showTagsViewIcon,
        draggable: storageSettings.draggable === undefined ? defaultSettings.draggable : storageSettings.draggable,
        sidebarWidth: storageSettings.sidebarWidth === undefined ? defaultSettings.sidebarWidth : storageSettings.sidebarWidth,
        uniqueOpened: storageSettings.uniqueOpened === undefined ? defaultSettings.uniqueOpened : storageSettings.uniqueOpened,
        watermark: storageSettings.watermark === undefined ? defaultSettings.watermark : storageSettings.watermark,
        isActivateAnimation: true,
    },
    mutations: {
        changeTheme(state, theme) {
            state.theme = theme
            try {
                document.startViewTransition(() => {
                    document.documentElement.className = theme
                }).ready.then(() => {
                    // 切换动画
                    if (state.isActivateAnimation) {
                        let themeSwitch = document.querySelector('.theme-switch')
                        let x = themeSwitch.getBoundingClientRect()['x'];
                        let y = themeSwitch.getBoundingClientRect()['y'];
                        let r = Math.hypot(Math.max(window.innerWidth - x, x), Math.max(window.innerHeight - y, y));
                        let clipPath = [`circle(0% at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`]
                        document.documentElement.animate({ clipPath }, {
                            duration: 500,
                            pseudoElement: '::view-transition-new(root)'
                        })
                    }
                })
            } catch (e) {
                document.documentElement.className = theme
            }
        },
        changeLayout(state, layout) {
            state.layout = layout
        },
        changeFixedHeader(state, fixedHeader) {
            state.fixedHeader = fixedHeader
        },
        changeShowBreadcrumb(state, showBreadcrumb) {
            state.showBreadcrumb = showBreadcrumb
        },
        changeShowBreadcrumbIcon(state, showBreadcrumbIcon) {
            state.showBreadcrumbIcon = showBreadcrumbIcon
        },
        changeShowTagsView(state, showTagsView) {
            state.showTagsView = showTagsView
        },
        changeShowTagsViewIcon(state, showTagsViewIcon) {
            state.showTagsViewIcon = showTagsViewIcon
        },

        changeDraggable(state, draggable) {
            state.draggable = draggable
        },
        changeSidebarWidth(state, sidebarWidth) {
            state.sidebarWidth = sidebarWidth
        },
        changeUniqueOpened(state, uniqueOpened) {
            state.uniqueOpened = uniqueOpened
        },
        changeWatermark(state, watermark) {
            state.watermark = watermark
        },
    }
}

export default settings
