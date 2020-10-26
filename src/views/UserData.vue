<template>
  <div class="container">
    <div class="header">
      <h1><strong>Github</strong> <span>Search</span></h1>
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

<style scoped>
  .header {
    display: flex;
    margin-top: 28px;
    margin-bottom: 28px;
  }
  h1 {
    flex: 2;
    margin-left: 12px;
    font-family: RobotoMono;
    font-weight: 700;
    font-size: 42px;
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
    margin-left: 56px;
  }
  span {
    font-family: RubikLightItalic;
    font-weight: 300;
  }
  ::-webkit-scrollbar {
    width: 0px;
  }
</style>