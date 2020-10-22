<template>
  <div>
    <h1>Github <i>Search</i></h1>
    <input type="text" v-model="username">  
    <button @click="search()">Pesquisar</button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      username: '',
      userData: []
    }
  },
  methods: {
    search: function(){
      fetch(`https://api.github.com/users/${this.username}`)
      .then(response => response.json())
      .then(result => {
        this.userData = result;
        console.log("retorno => " + this.userData);
      })

    }
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>