<template>
  <div class="hello">
   <h1>Graficas </h1>

        <div class="form-group">
          <label for="department">Department</label>
          <select v-model="department" type="text" class="form-control" id="department" placeholder="select a department">
            <option>admin</option>
            <option>support</option>
            <option>contracts</option>
            <option>proyects</option>
            <option>rrhh</option>
          </select>
        </div>
      <div class="graphys">
        <div class="card">

        </div>
      </div>
  </div>
</template>


<script>
export default {
  name: 'Graphys',
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
</style>
