import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './views/vuex/store'
// import ElementUI from 'element-ui' // 引入UI
// import 'element-ui/lib/theme-chalk/index.css' // 引入样式
// import axios from 'axios'
// Vue.prototype.$http = axios
// axios.defaults.baseURL = 'http://ttapi/research.itcast.cn/mp/v1_0'

Vue.config.productionTip = false
// Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
