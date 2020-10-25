<template>
  <div>
    <h1><strong>Github</strong> <i>Search</i></h1>
    <input type="text" v-model="username">  
    <button @click="search()">Pesquisar</button>
    <div class="container">
      <UserDetails v-bind:userData="userData" class="userDetails"/>
      <UserRepositories v-bind:repositories="userData.repos" class="userRepositories"/>
    </div>
  </div>
</template>

<script>

import UserDetails from '../components/UserDetails';
import UserRepositories from '../components/UserRepositories';

export default {
  name: 'UserData',
  components: {
    UserDetails,
    UserRepositories
  },
  data() {
    return {
      username: '',
      userData: JSON.parse(this.$route.params.userData)
    }
  },
  beforeMount() {
    console.log(JSON.parse(this.$route.params.userData))
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
          this.userData.repos.sort(
            function(a, b){
              return b.stargazers_count - a.stargazers_count;
            }
          )
          console.log(this.userData);
        })
      )
    }
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    display: flex;
  }
  .userDetails {
    flex: 1;
  }
  .userRepositories {
    flex: 3;
    overflow-y: scroll;
    height: 80vh;
  }
  ::-webkit-scrollbar {
    width: 0px;
  }
</style>