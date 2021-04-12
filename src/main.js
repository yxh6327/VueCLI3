import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import toast from 'components/common/toast/index.js'
import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'

Vue.config.productionTip = false;

//添加事件总线对象
Vue.prototype.$bus = new Vue();

//安装自己封装的toast插件
// Vue.use(toast); //调用use后就会执行toast的install函数；

//使用fastclick解决移动端300ms的延时问题
FastClick.attach(document.body);

//使用图片懒加载
Vue.use(LazyLoad);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
