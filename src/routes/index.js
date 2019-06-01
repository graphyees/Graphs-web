import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../components/Home.vue'
import EmployeesList from './../components/ProductDetails.vue'
import NewEmployee from './../components/ProductDetails.vue'
import Graphys from './../components/ProductDetails.vue'

Vue.use(VueRouter)

export default new VueRouter({
 routes: [
   { path: '/', component: Home },
   { path: '/employees-list', component: EmployeesList },
   { path: '/my-employees/newemployee', component: NewEmployee },
   { path: '/graphyees', component: Graphys }
 ]
})