import Vue from 'vue'
import App from './App.vue'
import { ClientTable } from 'vue-tables-2';
import 'bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
Vue.use(ClientTable);

new Vue({
  el: '#app',
  render: h => h(App)
})
