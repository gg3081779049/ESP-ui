import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/assets/styles/index.scss'
import router from '@/router'
import store from '@/store'
import i18n from '@/locales'
import '@/permission'
import '@/icons'
// 全局组件
import SvgIcon from '@/components/SvgIcon'
import RightToolbar from "@/components/RightToolbar"
import BackTop from '@/components/BackTop'
// 全局方法
import { copyText, resetForm } from '@/utils/index'
import { download } from '@/utils/request'
import model from '@/utils/model'

const app = createApp(App)

// 禁用生产提示信息
app.config.productionTip = false

app.config.globalProperties.$copyText = copyText
app.config.globalProperties.$resetForm = resetForm
app.config.globalProperties.$download = download
app.config.globalProperties.$model = model

app.component(SvgIcon.name || 'SvgIcon', SvgIcon)
app.component(RightToolbar.name || 'RightToolbar', RightToolbar)
app.component(BackTop.name || 'BackTop', BackTop)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(i18n)

app.mount('#app')
