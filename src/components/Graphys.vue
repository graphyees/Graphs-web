<template>
  <div class="hello">
   <h1>Graficas </h1>
      <div class="graphys">
        <div class="card m-5 mx-2">
          <pie-chart :data="chartDataPie" :download="true" :donut="false"></pie-chart>
          <button class="btn btn-info" @click="fillDataPie()">Visualizar/Cargar</button>
        </div>
        <div class="card m-5 mx-2">
          <column-chart class="column-chart" :data="chartDataBar" :download="true" :stacked="true"></column-chart>
          <button class="btn btn-info" @click="fillDataBar()">Actualizar</button>     
        </div>
      </div>
  </div>
</template>


<script>

import axios from 'axios'
import VueAxios from 'vue-axios'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

export default {
  name: 'Graphys',
  data () {
    return {
      data: [],
      department: ["admin", "contracts", "proyects", "rrhh", "support"],
      //departamentos, sueldo medio departamento
      chartDataPie:[],
      //departamentos, numero empleados
      chartDataBar:{'2017-05-13': 2, '2017-05-14': 5},
      loading: true
    }
  },
  beforeCreate(){

  },
  beforeMount(){
   axios.get('http://localhost:3001/employees-list')
    .then(response => {
      this.data = response.data
      this.loading = false
    })
    .catch(error => {
      console.log(error)
    })
  this.fillDataPie();
  },
  mounted () {
  
  },
  methods: {
   fillDataPie(){
     const data = this.data
     let dataPie=[[]]; 
     this.department.forEach((element, index) => {
       let numberPeopleDpartment = 0;
       let salary = 0;
       data.map( user => {
          if(user.department==this.department[index]){
            salary+=user.salary;
            numberPeopleDpartment++;
          }
        })
      dataPie[index] = [element, Math.round(salary/numberPeopleDpartment)]
     });
      this.chartDataPie =  dataPie
     }
   },
   fillDataBar(){
     
   },
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
.small {
  max-width: 600px;
  margin:  150px auto;
}

.column-chart{
  background-color:lavender;
}
</style>
