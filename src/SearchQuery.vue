<template>
  <div>
    <router-link v-bind:to="'/'" class="header">v-pedia</router-link>
    <div id="mini-search-box" class="container">
      <form class="form-group" v-bind:action="`/search/${input}`">
        <input class="form-control" v-model="input">
        <button class="btn btn-outline-light btn-lg">Search</button>
        <a target="_blank" v-bind:href="random" class="btn btn-outline-light btn-lg">Random</a> 
      </form>
    </div>
    <h1 id="loading" v-if="loading">Loading Articles...</h1>
    <div v-if="!loading" v-for="article in articles">
      <div class="article-box container">
        <h2><a target="_blank" v-bind:href="`http://en.wikipedia.org/wiki/${article.title}`">{{ article.title }}</a></h2>
        <h3><span v-html="article.snippet">{{ article.snippet }}</span>...</h3>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  data () {
    return {
     input: '',
     query: this.$route.params.query,
     cors: 'https://cors-anywhere.herokuapp.com/',
     url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=',
     loading: true,
     articles: [],
     random: 'https://en.wikipedia.org/wiki/Special:Random'
    }
  },
  created() {
    this.$http.get(this.cors + this.url + this.query)
      .then(function(data) {
        console.log(data.body.query.search);
        this.articles = data.body.query.search;
        this.loading = false;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
}
</script>

<style scoped>
.header {
  font-size: 3.5em;
  text-decoration: none;
  color: inherit;
}
#mini-search-box {
  padding: 0;
}

#mini-search-box form{
  display: flex;
  padding: 0;
}

#loading {
  font-size: 5em;
  margin-top: 32vh;
}
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
