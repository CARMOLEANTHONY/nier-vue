// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueWechatTitle from 'vue-wechat-title'
import store from './store/index'
import $ from 'jquery'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'
Vue.config.productionTip = false
Vue.use(VueWechatTitle)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
