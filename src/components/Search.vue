<template>
  <div>
    <h1>Github <i>Search</i></h1>
    <input type="text" v-model="username">  
    <button @click="search()">Pesquisar</button>
    <UserDetails v-bind:userData="userData" />
  </div>
</template>

<script>

import UserDetails from './UserDetails';

export default {
  name: 'Search',
  components: {
    UserDetails,
  },
  data() {
    return {
      username: '',
      userData: {},
    }
  },
  methods: {
    search: function(){
      fetch(`https://api.github.com/users/${this.username}`)
      .then(response => response.json())
      .then(result => {
        // this.userData = result;
        this.userData = {
          avatar_url: result.avatar_url,
          name: result.name,
          login: result.login,
          company: result.company,
          location: result.location,
          stargazers_count: 0,
          public_repos: result.public_repos,
          followers: result.followers,
          repos: null,
        }
        // console.log(result);
      }).then(
        fetch(`https://api.github.com/users/${this.username}/repos`)
        .then(response => response.json())
        .then(result => {
          this.userData.repos = result;
          this.userData.repos.forEach(element => {
            this.userData.stargazers_count += element.stargazers_count;
          });
          console.log(this.userData);
        })
      )

    }
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>