import Vue from "vue";
import Router from "vue-router";

import Home from './views/Home.vue'
import EmployeesList from './components/EmployeeList.vue'
import NewEmployee from './components/NewEmployee.vue'
import Graphys from './components/Graphys.vue'


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/employees-list',  name: 'employeesList',  component: EmployeesList },
    { path: '/my-employees/newemployee',  name: 'newEmployee', component: NewEmployee },
    { path: '/graphyees',  name: 'graphys', component: Graphys }
  ]
});
