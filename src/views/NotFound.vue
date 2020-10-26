<template>
  <div class="container">
    <h1 class="mb-5">Ooops... Usuário não encontrado!</h1>
    <img src="../assets/images/github-not-found.png" class=""/>
    <h2 class="mt-3">Tente uma nova busca!</h2>
    <Search class="search"/>
  </div>
</template>

<script>

import Search from '../components/Search'

export default {
  name: 'NotFound',
  components: {
    Search
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .search {
    width: 100%;
  }
</style>