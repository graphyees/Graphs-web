
<template>
  <div>
   <h1>Employee list </h1>
   <div>
     <table class="table table-striped table-bordered table-sm m-3">
      <thead class="thead-dark">
        <tr class="thead-dark">
          <th scope="col">#</th>
          <th scope="col">NAME</th>
          <th scope="col">SALARY</th>
          <th scope="col">DEPARTMENT</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in data" v-bind:key="index">
          <th class="table-light" scope="row">{{index+1}}</th>
          <td class="table-light">{{employee.name}}</td>
          <td class="table-light">{{employee.salary}} Euros</td>
          <td class="table-light">{{employee.department}}</td>    
          <td class="table-light"> <button type="button" value="Submit" class="btn btn-danger btn-sm" @click = deleteEmployee()>X</button></td>
        </tr>
      </tbody>
    </table>
   </div>
  </div>  
</template>


<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios); 

export default {
  data () {
    return {
      data: [],
      loading: true
    }
  },
  mounted () {
  axios.get('http://localhost:3001/employees-list')
    .then(response => {
      this.data = response.data
      this.loading = false
      console.log("Que tengo ->", this.data)
    })
    .catch(error => {
      console.log(error)
    })
  },
  methods: {
    deleteEmployee: function (id) {
      axios.delete('http://localhost:3001/employees-list/delete/' + id)
        .then(response => {
            if (event) event.preventDefault()
            alert("Employee deleted\n" + error)
        })
          .catch(error => {
            console.log(error)
            if (event) event.preventDefault()
              alert("Error deleting\n" + error)
        })
    } 
  }
}
</script>



<style scoped>
table{
  width: 95%;
  -webkit-box-shadow: 10px 11px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 11px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 11px 5px 0px rgba(0,0,0,0.75);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flow-root;
  margin: 5px 10px;
}
a {
  color: #42b983;
}
</style>
