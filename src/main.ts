import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueCookies from "vue-cookies";
import ElementUI from "element-ui";

Vue.config.productionTip = false

// 모듈 적용
Vue.use(VueCookies);
Vue.use(ElementUI);

// 쿠키 설정
Vue.$cookies.config("7d", "", "", false);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
