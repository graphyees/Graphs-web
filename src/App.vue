<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" name="home">Home</router-link>
    </div>
    <div>
      <div class="logo mb-5">
        <img alt="Vue logo" src="./assets/logo.png">
      </div>
      <Home/>
      <router-view />
    </div>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: -webkit-fill-available;

  background: rgba(218,247,191,1);
  background: -moz-linear-gradient(-45deg, rgba(218,247,191,1) 0%, rgba(218,247,191,1) 8%, rgba(252,255,245,1) 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(218,247,191,1)), color-stop(8%, rgba(218,247,191,1)), color-stop(100%, rgba(252,255,245,1)));
  background: -webkit-linear-gradient(-45deg, rgba(218,247,191,1) 0%, rgba(218,247,191,1) 8%, rgba(252,255,245,1) 100%);
  background: -o-linear-gradient(-45deg, rgba(218,247,191,1) 0%, rgba(218,247,191,1) 8%, rgba(252,255,245,1) 100%);
  background: -ms-linear-gradient(-45deg, rgba(218,247,191,1) 0%, rgba(218,247,191,1) 8%, rgba(252,255,245,1) 100%);
  background: linear-gradient(135deg, rgba(218,247,191,1) 0%, rgba(218,247,191,1) 8%, rgba(252,255,245,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#daf7bf', endColorstr='#fcfff5', GradientType=1 );
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
img{
width: 75px; height: 75px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
