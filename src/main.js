import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import { BootstrapVue } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
 
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(BootstrapVue);
Vue.use(Vuelidate);

export const bus = new Vue();

new Vue({
  render: h => h(App)
}).$mount('#app')