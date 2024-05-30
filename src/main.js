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
import BackTop from '@/components/BackTop'
import { copyText, resetForm } from '@/utils/index'
import { download } from '@/utils/request'

const app = createApp(App)

// 禁用生产提示信息
app.config.productionTip = false

app.config.globalProperties.copyText = copyText
app.config.globalProperties.download = download
app.config.globalProperties.resetForm = resetForm

app.component(SvgIcon.name || 'SvgIcon', SvgIcon)
app.component(RightToolbar.name || 'RightToolbar', RightToolbar)
app.component(BackTop.name || 'BackTop', BackTop)

app.use(router)
app.use(store)
app.use(ElementPlus)

app.mount('#app')
