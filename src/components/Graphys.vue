<template>
  <div class="hello">
   <h1>GRAPHYS</h1>
      <div class="graphys mt-5">
        <button class="btn btn-info" @click="fillDataCharts()">Visualizar/Cargar</button>
        <div class="card mb-5 mt-3 mx-5 p-1 column-chart">
          <p>Sueldo medio por departamento</p>
          <pie-chart :data="chartDataPie" :download="true" :donut="false"></pie-chart>
        </div>
        <div class="card m-5 mx-2 p-1 column-chart">
          <p>Numero de empleados por departamento</p>
          <column-chart :data="chartDataBar" :download="true" :stacked="true"></column-chart>
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
.card{
  -webkit-box-shadow: 10px 11px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 11px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 11px 5px 0px rgba(0,0,0,0.75);
}
.column-chart{
  background-color:lavender;
}
</style>
