<template>
  <div class="hello">
    <ul class="list-group-flush">

      <li class="list-group-item">
        <div class="card bg-info">
          <div class="card-body">
            <h5 class="card-title">Employees List</h5>
            <router-link to="/employees-list" class="btn btn-primary text-dark">Go</router-link>
          </div>
        </div>
      </li>

      <li class="list-group-item">
        <div class="card bg-warning">
          <div class="card-body">
            <h5 class="card-title">Add new employee</h5>
            <router-link to="/my-employees/newemployee" class="btn btn-primary text-dark">Go</router-link>
          </div>
        </div>
      </li>

      <li class="list-group-item">
        <div class="card bg-success">
          <div class="card-body">
            <h5 class="card-title">Graphics</h5>
            <router-link to="/graphyees" class="btn btn-primary text-dark">Go</router-link>
          </div>
        </div>
      </li>      
    </ul>
  <router-view/>
  </div>
</template>


<script>
export default {
  name: 'Home',
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  text-align: center;
  list-style-type: none;
  padding: 10px;
  box-sizing: content-box;
}
li {
  display: flow-root;
    margin: 40px 100px;
    -webkit-box-shadow: 10px 11px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 7px 8px 8px 0px rgba(0,0,0,0.25);
}
a {
  color: #42b983;
}

</style>