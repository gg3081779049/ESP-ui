import defaultSettings from '@/settings.js'

const settings = {
    state: {
        theme: defaultSettings.theme,
        fixedHeader: defaultSettings.fixedHeader,
        showBreadcrumb: defaultSettings.showBreadcrumb,
        showBreadcrumbIcon: defaultSettings.showBreadcrumbIcon,
        showTagsView: defaultSettings.showTagsView,
        showTagsViewIcon: defaultSettings.showTagsViewIcon,
        isUniqueOpened: defaultSettings.isUniqueOpened,
        draggable: defaultSettings.draggable,
        isActivateAnimation: true,
        isFullScreen: false,
        isCollapse: false,
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
                        let themeSwitch = document.getElementsByClassName('theme-switch')[0]
                        let x = themeSwitch.getBoundingClientRect()['x'];
                        let y = themeSwitch.getBoundingClientRect()['y'];
                        let r = Math.hypot(Math.max(window.innerWidth - x, x), Math.max(window.innerHeight - y, y));
                        document.documentElement.animate({
                            clipPath: [`circle(0% at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`]
                        }, {
                            duration: 500,
                            pseudoElement: '::view-transition-new(root)'
                        })
                    }
                })
            } catch (e) {
                document.documentElement.className = theme
            }
        },
        changeFixedHeader(state, fixedHeader) {
            state.fixedHeader = fixedHeader
        },
        changeShowBreadcrumbIcon(state, showBreadcrumbIcon) {
            state.showBreadcrumbIcon = showBreadcrumbIcon
        },
        changeIsUniqueOpened(state, isUniqueOpened) {
            state.isUniqueOpened = isUniqueOpened
        },
        changeDraggable(state, draggable) {
            state.draggable = draggable
        },
        changeFullScreen(state, isFullScreen) {
            state.isFullScreen = isFullScreen
        },
        changeCollapse(state, isCollapse) {
            state.isCollapse = isCollapse
            document.documentElement.style.setProperty('--sidebar-width', isCollapse ? '54px' : '216px')
        },

    }
}

export default settings
