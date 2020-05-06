import Vue from 'vue'
import App from './App.vue'
// 适配
import 'lib-flexible/flexible'
// 路由
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
