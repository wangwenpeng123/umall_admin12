// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 1.reset.css
import "./assets/css/reset.css"


import store from "./store"





import "./filters"

import "./components"


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


new Vue({
  el: '#app',
  router:router,
  store:store,
  components: { App },
  template: '<App/>'
})
