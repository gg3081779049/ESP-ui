import { createStore } from 'vuex';

import getters from '@/store/getters'
import user from '@/store/modules/user'
import settings from '@/store/modules/settings'
import menu from '@/store/modules/menu'
import tagsView from '@/store/modules/tagsView'

const store = createStore({
    // 开启严格模式
    strict: true,
    modules: {
        user,
        tagsView,
        settings,
        menu,
    },
    getters,
});

export default store
