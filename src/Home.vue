<template>
  <div id="app">
    <h1>Wikipedia Article Selector</h1>
    <div class="container">
      <input id="search-bar" class="form-control" v-model="query">
      <div id="search-buttons">
        <router-link v-bind:to="`/search/${query}`" class="btn btn-outline-light btn-lg">Wikipedia Search</router-link>
        <a target="_blank" v-bind:href="random" class="btn btn-outline-light btn-lg">I'm feeling Random</a>   
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: '',
      random: 'https://en.wikipedia.org/wiki/Special:Random'
    }
  }
}
</script>

<style scoped>
  #search-bar {
    margin-top: 35vh;
  }
  #search-buttons {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
  }

  #search-buttons button {
    width: 30%;
  }
</style>
