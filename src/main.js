import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/assets/styles/index.scss'
import router from '@/router'
import store from '@/store'
import '@/permission'
import '@/icons'
import SvgIcon from '@/components/SvgIcon'
import RightToolbar from "@/components/RightToolbar"
import { download } from '@/utils/request'

const app = createApp(App)

// 禁用生产提示信息
app.config.productionTip = false

app.config.globalProperties.download = download

app.component(SvgIcon.name || 'SvgIcon', SvgIcon)
app.component(RightToolbar.name || 'RightToolbar', RightToolbar)

app.use(router)
app.use(store)
app.use(ElementPlus)

app.mount('#app')
