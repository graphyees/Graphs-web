<template>
  <div class="hello">
    <h1>New Employee </h1>
    <div>
      <form>
        <div class="form-group">
          <label for="name">Employee Name</label>
          <input v-model="name" class="input form-control" type="text" id="name" aria-describedby="emailHelp" placeholder="Enter employee name">
        </div>
        <div class="form-group">
          <label for="salary">Salary</label>
          <input v-model="salary" type="number" class="form-control" id="salary" aria-describedby="emailHelp" placeholder="Enter the salary in number">
        </div>  
        <div class="form-group">
          <label for="department">Department</label>
          <select v-model="department"  type="text" class="form-control" id="department" placeholder="select a department">
            <option>admin</option>
            <option>support</option>
            <option>contracts</option>
            <option>proyects</option>
            <option>rrhh</option>
          </select>
        </div>
          <button type="button" value="Submit" class="btn btn-success" @click = onFormSubmit(name,salary,department)>Add</button>
      </form>
    </div>
  </div>
</template>


<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios); 

export default {
  name: 'NewWmployee',
  data () {
    return {
      name:'',
      salary: null,
      department: ''
    }
  },
  mounted(){
  },
  methods: {
    onFormSubmit: function (name, salary, department) {
        axios.post('http://localhost:3001/my-employees/newemployee', {
            name: name,
            salary: salary,
            department: department
          }).then(response => {
            if (event){
              event.preventDefault();
              alert("Employee registered")
            }             
          }).catch(error => {
            if (event) event.preventDefault()
            alert("Employee not registered\n" + error)
        });
      this.name='';
      this.salary=null;
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.form-group {
    margin-bottom: 0rem;
    background-color: #FAFBE7;
    margin: 9rem;
    padding: 2rem;
    border: 2px solid #CCC;
    text-align: center;
    margin: 40px 100px;
    -webkit-box-shadow: 10px 11px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 7px 8px 8px 0px rgba(0,0,0,0.25);
}
</style>
