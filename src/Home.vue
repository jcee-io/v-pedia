<template>
  <div id="app">
    <h1>Wikipedia Article Selector</h1>
    <input v-model="query">
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

<style>
  body {
    background: black;
    color: whitesmoke;
    text-align: center;
  }
</style>
