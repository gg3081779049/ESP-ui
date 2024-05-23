const state = {
    visitedViews: [],
    cachedViews: [],
    defaultViewName: 'Home'
}

const mutations = {
    addView(state, view) {
        if (!state.visitedViews.some(v => v.path === view.path) && !state.cachedViews.includes(view.name)) {
            state.visitedViews.push(view)
            state.cachedViews.push(view.name)
        }
    },
    delView(state, view) {
        let visitedViewIndex = state.visitedViews.findIndex(v => v.path === view.path)
        let defaultViewIndex = state.visitedViews.findIndex(v => v.name === state.defaultViewName)
        if (visitedViewIndex < 0 || defaultViewIndex < 0) return
        if (visitedViewIndex !== defaultViewIndex) {
            state.visitedViews.splice(visitedViewIndex, 1)
            state.cachedViews.splice(visitedViewIndex, 1)
        }
    },
    delLeftView(state, view) {
        let visitedViewIndex = state.visitedViews.findIndex(v => v.path === view.path)
        let defaultViewIndex = state.visitedViews.findIndex(v => v.name === state.defaultViewName)
        if (visitedViewIndex < 0 || defaultViewIndex < 0) return
        if (visitedViewIndex > defaultViewIndex) {
            state.visitedViews = [state.visitedViews[defaultViewIndex], ...state.visitedViews.slice(visitedViewIndex)]
            state.cachedViews = [state.cachedViews[defaultViewIndex], ...state.cachedViews.slice(visitedViewIndex)]
        } else {
            state.visitedViews = state.visitedViews.slice(visitedViewIndex)
            state.cachedViews = state.cachedViews.slice(visitedViewIndex)
        }
    },
    delRightView(state, view) {
        let visitedViewIndex = state.visitedViews.findIndex(v => v.path === view.path)
        let defaultViewIndex = state.visitedViews.findIndex(v => v.name === state.defaultViewName)
        if (visitedViewIndex < 0 || defaultViewIndex < 0) return
        if (visitedViewIndex < defaultViewIndex) {
            state.visitedViews = [...state.visitedViews.slice(0, visitedViewIndex + 1), state.visitedViews[defaultViewIndex]]
            state.cachedViews = [...state.cachedViews.slice(0, visitedViewIndex + 1), state.cachedViews[defaultViewIndex]]
        } else {
            state.visitedViews = state.visitedViews.slice(0, visitedViewIndex + 1)
            state.cachedViews = state.cachedViews.slice(0, visitedViewIndex + 1)
        }
    },
    delOthersViews(state, view) {
        let visitedViewIndex = state.visitedViews.findIndex(v => v.path === view.path)
        let defaultViewIndex = state.visitedViews.findIndex(v => v.name === state.defaultViewName)
        if (visitedViewIndex < 0 || defaultViewIndex < 0) return
        if (visitedViewIndex === defaultViewIndex) {
            state.visitedViews = [state.visitedViews[visitedViewIndex]]
            state.cachedViews = [state.cachedViews[visitedViewIndex]]
        } else {
            state.visitedViews = [state.visitedViews[defaultViewIndex], state.visitedViews[visitedViewIndex]]
            state.cachedViews = [state.cachedViews[defaultViewIndex], state.cachedViews[visitedViewIndex]]
        }
    },
    delAllViews(state) {
        state.visitedViews = []
        state.cachedViews = []
    },
    moveView(state, { oldIndex, newIndex }) {
        state.visitedViews.splice(newIndex, 0, state.visitedViews.splice(oldIndex, 1)[0])
        state.cachedViews.splice(newIndex, 0, state.cachedViews.splice(oldIndex, 1)[0])
    }
}

export default {
    namespaced: true,
    state,
    mutations
}
