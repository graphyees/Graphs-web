
<template>
  <div class="hello">
   <h1>Employee list </h1>
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
}
</script>

  <!-- <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green">
      </v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4
        v-for="(item, index) in wholeResponse"
        :key="index"
        mb-2>
        <v-card>
          <v-img
            :src="item.Poster"
            aspect-ratio="1"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h2>{{item.Title}}</h2>
              <div>Year: {{item.Year}}</div>
              <div>Type: {{item.Type}}</div>
              <div>IMDB-id: {{item.imdbID}}</div>
            </div>
          </v-card-title>

          <v-card-actions class="justify-center">
            <v-btn flat
              color="green"
              @click="singleMovie(item.imdbID)"
              >View</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
  </v-layout>
  </v-container>
</template> -->

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
