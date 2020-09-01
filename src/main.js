import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store/store"
import descriptionLimitFilter from './filters/descriptionLimit'


Vue.config.productionTip = false

Vue.filter('descriptionLimitFilter', descriptionLimitFilter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
