const state = {
    visitedViews: [],
    cachedViews: [],
}

const mutations = {
    addVisitedView(state, view) {
        if (!state.visitedViews.some(v => v.path === view.path)) {
            state.visitedViews.push(view)
        }
    },
    addCachedView(state, view) {
        if (!state.cachedViews.includes(view.name)) {
            state.cachedViews.push(view.name)
        }
    },
    delVisitedView(state, view) {
        let index = state.visitedViews.findIndex(v => v.path === view.path);
        if (index > -1) {
            state.visitedViews.splice(index, 1);
        }
    },
    delCachedView(state, view) {
        let index = state.cachedViews.indexOf(view.name)
        if (index > -1) {
            state.cachedViews.splice(index, 1)
        }
    },
    delLeftView(state, view) {
        let index = state.visitedViews.findIndex(v => v.path === view.path)
        if (index > 1) {
            state.visitedViews = [state.visitedViews[0], ...state.visitedViews.slice(index)]
            state.cachedViews = [state.cachedViews[0], ...state.cachedViews.slice(index)]
        }
    },
    delRightView(state, view) {
        let index = state.visitedViews.findIndex(v => v.path === view.path)
        if (index > -1) {
            state.visitedViews = state.visitedViews.slice(0, index + 1)
            state.cachedViews = state.cachedViews.slice(0, index + 1)
        }
    },
    delOthersViews(state, view) {
        let firstView = state.visitedViews[0]
        let firstCached = state.cachedViews[0]
        state.visitedViews = state.visitedViews.filter(v => ['/home', firstView.path, view.path].includes(v.path))
        state.cachedViews = state.cachedViews.filter(v => ['Home', firstCached, view.name].includes(v))
    },
    delAllViews(state) {
        state.visitedViews = []
        state.cachedViews = []
    }
}

export default {
    namespaced: true,
    state,
    mutations
}