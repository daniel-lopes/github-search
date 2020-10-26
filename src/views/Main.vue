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
    font-family: RobotoMono;
    font-size: 64px;
    font-weight: 700;
    color: #000;
  }
  span {
    font-family: RubikLightItalic;
    font-weight: 300;
    margin-left: 0px;
  }
  .search {
    width: 701px;
    margin-top: 1px;
  }
</style>