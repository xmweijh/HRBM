import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import * as directives from '@/directives'
import Component from '@/components'
Vue.use(Component) // 注册自己的插件

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

Object.keys(directives).forEach(key => {
  // 注册自定义指令
  Vue.directive(key, directives[key])
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
