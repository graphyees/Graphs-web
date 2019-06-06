import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";

import axios from 'axios'
import vueAxios from 'vue-axios'

import store from "./store/dataStore"

import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'

Vue.use(VueChartkick, { Chartkick })

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");

Vue.use(axios, vueAxios);
