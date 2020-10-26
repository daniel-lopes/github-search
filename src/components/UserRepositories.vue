<template>
  <div v-if="repositories && repositories.length">
    <div v-for="repository in repositories" v-bind:key="repository.id" class="container">
      <div class="primarySource mb-2"> {{ repository.name }} </div>
      <div v-if="repository.description" class="secondarySource mb-2"> {{ repository.description }} </div>
      <div class="secondarySource mt-1 marginB44">
        <font-awesome-icon :icon="['far', 'star']" class="icon mr-1" />
        {{ repository.stargazers_count}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserRepositories',
  props: {
    repositories: Array,
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1;
  }
  .marginB44 {
    margin-bottom: 44px;
  }
  .secondarySource {
    line-height: 1.2;
  }
</style>
