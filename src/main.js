// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import mixins from './mixins'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入全局样式
import './../static/css/base.css'
Vue.use(MintUI)

Vue.config.productionTip = false

// register global mixins.
Vue.mixin(mixins);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
