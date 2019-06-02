import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";

import axios from 'axios'
import vueAxios from 'vue-axios'

import store from "./store/dataStore"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
 
}).$mount("#app");

Vue.use(axios, vueAxios);

// new Vue({
//   el: "#app",
//   router,
//   //store,
//   //template: '<App/>',
//   component: {
//     App
//   },
//   //render: h => h(App),
//   data() {
//     return {
//       info: null
//     };
//   },
//   // mounted() {
//   //   axios
//   //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
//   //     .then(response => {
//   //       console.log(response);
//   //      })
//   //      .catch(error => {
//   //       console.log(error);
//   //      });
//   // }
// });