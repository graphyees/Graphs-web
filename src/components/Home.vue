<template>
  <div class="hello">
    <ul class="list-group-flush">
      <li class="list-group-item">
        <div class="card bg-info">
          <div class="card-body">
            <h5 class="card-title">Employees List</h5>
            <a href="/employees-list" class="btn btn-primary text-dark">Go</a>
          </div>
        </div>
      </li>

      <li class="list-group-item">
        <div class="card bg-warning">
          <div class="card-body">
            <h5 class="card-title">Add new employee</h5>
            <a href="/my-employees/newemployee" class="btn btn-primary text-dark">Go</a>
          </div>
        </div>
      </li>

      <li class="list-group-item">
        <div class="card bg-success">
          <div class="card-body">
            <h5 class="card-title">Graphics</h5>
            <a href="/graphyees" class="btn btn-primary text-dark">Go</a>
          </div>
        </div>
      </li>      
    </ul>
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
