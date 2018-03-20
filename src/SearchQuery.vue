<template>
  <div>
    <h1>{{ query }}</h1>
    <div v-for="article in articles">
      <h2>Title:  {{ article.title }}</h2>
      <p>Description: {{ article.snippet }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     query: this.$route.params.query,
     cors: 'https://cors-anywhere.herokuapp.com/',
     url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=',
     articles: []
    }
  },
  created() {
    this.$http.get(this.cors + this.url + this.query)
      .then(function(data) {
        console.log(data.body.query.search);
        this.articles = data.body.query.search;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
}
</script>

<style scoped>

</style>
