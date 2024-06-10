const app = {
    state: {
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