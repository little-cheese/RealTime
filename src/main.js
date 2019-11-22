import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/element.js'
Vue.config.productionTip = false

//axiso
import axios from 'axios'
Vue.prototype.$ajax = axios;
//element-ui
import 'element-ui/lib/theme-chalk/index.css';
//echarts
import echarts from './plugins/echarts.js'
Vue.use(echarts);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
