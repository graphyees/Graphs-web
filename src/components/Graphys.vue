<template>
  <div class="hello">
   <h1>Graficas </h1>
      <div class="graphys">
        <div class="card m-5 mx-2 p-1">
          <pie-chart class="column-chart" :data="chartDataPie" :download="true" :donut="false"></pie-chart>
        </div>
        <div class="card m-5 mx-2 p-1">
          <column-chart class="column-chart" :data="chartDataBar" :download="true" :stacked="true"></column-chart>
        </div>
        <button class="btn btn-info" @click="fillDataCharts()">Visualizar/Cargar</button>
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
      departments: ["admin", "contracts", "proyects", "rrhh", "support"],
      //departamentos, sueldo medio departamento
      chartDataPie:[],
      //departamentos, numero empleados
      chartDataBar:[],
      loading: true
    }
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
  this.fillDataCharts();
  },
  mounted () {
  
  },
  methods: {
   fillDataCharts(){
     const data = this.data
     let dataPie=[[]]; 
     let dataBar=[[]];
     this.departments.forEach((department, index) => {
       let numberPeopleDpartment = 0;
       let salary = 0;
       data.map( user => {
          if(user.department==this.departments[index]){
            salary+=user.salary;
            numberPeopleDpartment++;
          }
        })
      dataPie[index] = [department, Math.round(salary/numberPeopleDpartment)]
      dataBar[index] = [department, numberPeopleDpartment]
     });
      this.chartDataPie = dataPie;
      this.chartDataBar = dataBar;
     }
   },

   fillDataPie(){

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
.small {
  max-width: 600px;
  margin:  150px auto;
}

.column-chart{
  background-color:lavender;
}
</style>
