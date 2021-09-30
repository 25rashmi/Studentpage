import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import Vuesax from 'vuesax';
import App from './App.vue';
import router from './router';
import 'vuesax/dist/vuesax.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'material-icons/iconfont/material-icons.css';
import './axios';
// import '@/assets/css/main.css';

Vue.use(BootstrapVue);
Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
