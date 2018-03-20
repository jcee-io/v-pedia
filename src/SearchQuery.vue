<template>
  <div>
    <h1>{{ query }}</h1>
    <div v-for="article in articles">
      <div class="article-box container">
        <h2>{{ article.title }}</h2>
        <h3><span v-html="article.snippet">{{ article.snippet }}</span>...</h3>
      </div>
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
.article-box {
  margin: 20px auto;
  background: whitesmoke;
  color: black;
  height: 300px;
  border-radius: 10px;
  padding: 30px;
}

.article-box h3 {
  margin-top: 2%;
};
</style>
