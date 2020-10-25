<template>
  <div>
    <input type="text" v-model="username" class="search-input">
    <button @click="search()">
      <font-awesome-icon icon="search" class="icon"/>
    </button>
  </div>
</template>

<script>

export default {
  name: 'Search',
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
          // console.log(this.userData);
          this.$router.push({ name: 'user-data', params: { userData: JSON.stringify(this.userData) } })
        })
      )
    }
  },  
}
</script>

<style scoped>
  .search-input {
    width: calc(100% - 85px);
    border-radius: 0px;
    height: 40px;
    padding-left: 10px;
  }
  .icon {
    color: #fff;
    font-size: 20px;;
    font-weight: lighter;
  }
  button {
    background-color: #000;
    margin-top: 1px;
    width: 85px;
    height: 40px;
    border: 0px;
  }
</style>