const app = {
    state: {
        title: process.env.VUE_APP_TITLE.toUpperCase(),
        collapse: false,
        showSettings: false,
    },
    mutations: {
        changeCollapse(state, collapse) {
            state.collapse = collapse
        },
        changeShowSettings(state, showSettings) {
            state.showSettings = showSettings
        }
    }
};

export default app