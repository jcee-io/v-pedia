<template>
  <div id="app">
    <div id="search-box" class="container">
      <h1>v-pedia</h1>
      <p>The minimalist Wiki API application that's easy on the eyes</p>
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
  #search-box {
    margin-top: 25vh;
  }

  #search-box h1 {
    font-size: 7em;
  }

  #search-box p {
    font-size: 2em;
    margin-bottom: 5vh;
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
