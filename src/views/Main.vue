<template>
  <div class="container">
    <h1>Github <span>Search</span></h1>
    <Search class="search"/>
  </div>
</template>

<script>

import Search from '../components/Search'

export default {
  name: 'Main',
  components: {
    Search
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width: 100vh;
  }
  h1 {
    font-size: 55px;
    font-weight: 550;
  }
  span {
    font-weight: normal;
    margin-left: 15px;
    font-style: oblique;
  }
  .search {
    width: 95%;
  }
</style>