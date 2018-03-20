<template>
  <div id="app">
    <h1>Wikipedia Article Selector</h1>
    <div class="container">
      <input id="search-bar" class="form-control" v-model="query">
      <div id="search-buttons">
        <button class="btn btn-outline-light btn-lg">Wikipedia Search</button>
        <button class="btn btn-outline-light btn-lg">I'm feeling Random</button>   
      </div>
    </div>
    <h2>{{ query }}</h2>
  </div>
</template>

<script>
const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=';
export default {
  name: 'app',
  data () {
    return {
      query: ''
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
