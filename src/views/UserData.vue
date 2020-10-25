<template>
  <div class="container">
    <div class="header">
      <h1 class="title"><strong>Github</strong> <i>Search</i></h1>
      <Search class="search"/>
    </div>
    <div class="page">
      <UserDetails v-bind:userData="userData" class="userDetails"/>
      <UserRepositories v-bind:repositories="userData.repos" class="userRepositories"/>
    </div>
  </div>
</template>

<script>

import UserDetails from '../components/UserDetails';
import UserRepositories from '../components/UserRepositories';
import Search from '../components/Search'

export default {
  name: 'UserData',
  components: {
    Search,
    UserDetails,
    UserRepositories
  },
  data() {
    return {
      username: '',
      userData: JSON.parse(this.$route.params.userData)
    }
  },
  watch: {
    $route: function() {
      this.userData = JSON.parse(this.$route.params.userData)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .title {
    flex: 2;
    margin-left: 11px;
  }
  .search {
    flex: 2;
  }
  .page {
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