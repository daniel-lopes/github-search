<template>
  <div v-if="repositories && repositories.length">
    <div v-for="repository in repositories" v-bind:key="repository.id" class="container">
      <div class="primarySource mb-2"> {{ repository.name }} </div>
      <div v-if="repository.description" class="secondarySource mb-2"> {{ repository.description }} </div>
      <div class="secondarySource mt-1 mb-5">
        <font-awesome-icon :icon="['far', 'star']" class="icon" />
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

  @font-face {
    font-family: MPLUSRounded1cRegular;
    src: url('../assets/fonts/MPLUSRounded1c-Regular.ttf');
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: MPLUSRounded1cRegular;
    line-height: 1;
  }
  .primarySource {
    font-size: 30px;
  }
  .secondarySource  {
    font-size: 25px;
    color: #757575;
  }
  .icon {
    color: #000;
  }
</style>
