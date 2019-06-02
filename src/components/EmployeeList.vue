
<template>
  <div class="hello">
   <h1>Employee list </h1>
   <div>
     <table class="table table-striped table-bordered table-sm">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">NAME</th>
          <th scope="col">SALARY</th>
          <th scope="col">DEPARTMENT</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in data" v-bind:key="index">
          <th scope="row">{{index+1}}</th>
          <td>{{employee.name}}</td>
          <td>{{employee.salary}} Euros</td>
          <td>{{employee.department}}</td>    
          <td> <button type="button" value="Submit" class="btn btn-danger" @click = deleteEmployee()>X</button></td>
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
