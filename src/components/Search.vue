<template>
  <div>
    <input type="text" v-model="username" class="search-input" v-on:keyup.enter="search()">
    <button @click="search()">
      <font-awesome-icon icon="search" class="icon"/>
    </button>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Search',
  data() {
    return {
      username: '',
      userData: null,
    }
  },
  methods: {
    getUser: async function(){
      await axios.get(`https://api.github.com/users/${this.username}`)
      // await axios.get(`http://localhost:3000/users/${this.username}`)
      .then(response =>  {

        const result = response.data;
        this.userData = {
          avatar_url: result.avatar_url,
          name: result.name,
          login: result.login,
          company: result.company,
          location: result.location,
          stargazers_count: 0,
          public_repos: result.public_repos,
          followers: result.followers,
          html_url: result.html_url,
          repos: null,
        }
      })
      .catch(() => {
        this.$router.push({ name: 'notFound', params: { catchAll: 'user-not-found', userData: null} })
      })
    },
    getUserRepository: async function(){
      await axios.get(`https://api.github.com/users/${this.username}/repos`)
      // await axios.get(`http://localhost:3000/users/${this.username}/repos`)
        .then(response => {

          const result = response.data;
          this.userData.repos = result;
          this.userData.repos.forEach(element => {
            this.userData.stargazers_count += element.stargazers_count;
          });

          this.userData.repos.sort(
            function(a, b){
              return b.stargazers_count - a.stargazers_count;
            }
          )
        })
        .catch(() => {
          this.$router.push({ name: 'notFound', params: { catchAll: 'user-not-found', userData: null} })
        })
    },
    search: async function(){
      await this.getUser();
      if(this.userData){
        await this.getUserRepository();
        await this.$router.push({ name: 'user-data', params: { userData: JSON.stringify(this.userData) } })
      }
    },
  }
}
</script>

<style scoped>
  .search-input {
    width: calc(100% - 98px);
    border-radius: 0px;
    height: 50px;
    padding-left: 20px;
    color: #757575;
  }
  .icon {
    color: #fff;
    font-size: 20px;;
    font-weight: lighter;
  }
  button {
    background-color: #000;
    margin-top: 1px;
    width: 100px;
    height: 50px;
    border: 0px;
    margin-left: -2px;
  }
</style>