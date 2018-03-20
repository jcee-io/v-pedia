<template>
  <h1>{{ query }}</h1>
</template>

<script>
export default {
  data () {
    return {
     query: this.$route.params.query 
    }
  }
}
</script>

<style scoped>

</style>
