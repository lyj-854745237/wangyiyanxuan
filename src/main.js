import Vue from 'vue'
import App from './App.vue'
// 适配
import 'lib-flexible/flexible'
// 路由
import router from './router/index'
import 'vant/lib/index.css';
// 适配
import VueMeta from 'vue-meta'
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)
Vue.use(VueMeta)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
