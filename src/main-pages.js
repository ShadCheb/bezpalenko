import Vue from 'vue';
import App from './AppPages.vue';

// import VueRouter from 'vue-router';
import 'vue-router';
import router from './router';

import '../public/style/lightgallery.css'
import '../public/style/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
