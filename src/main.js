import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
 

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
new Vue({
  render: h => h(App),
}).$mount('#app')
