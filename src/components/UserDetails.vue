<template>
  <div v-if="Object.keys(userData).length" class="container">
    <img :src="userData.avatar_url" class="avatar mb-3" />
    <!-- <font-awesome-icon icon="archive" /> -->
    <span class="primarySource"> {{ userData.name }} </span>
    <span class="secondarySource mb-5"> {{ userData.login }} </span>
    <span v-if="userData.company" class="secondarySource mb-2">
      <font-awesome-icon icon="briefcase" class="icon mr-1" />
      {{userData.company }}
    </span>
    <span v-if="userData.location" class="secondarySource mb-2">
      <font-awesome-icon icon="map-marker-alt" class="icon ml-1 mr-2" />
      {{ userData.location }}
    </span>
    <span v-if="userData.stargazers_count" class="secondarySource mb-2">
      <font-awesome-icon :icon="['far', 'star']" class="icon mr-1" />
      {{ userData.stargazers_count }}
    </span>
    <span v-if="userData.public_repos" class="secondarySource mb-2">
      <font-awesome-icon icon="archive" class="icon mr-2" />
      {{ userData.public_repos }}
    </span>
    <span v-if="userData.followers" class="secondarySource mb-2">
      <font-awesome-icon icon="user-friends" class="icon mr-1" />
      {{ userData.followers }}
    </span>
  </div>
</template>

<script>

export default {
  name: 'UserDetails',
  props: {
    userData: Object,
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .avatar {
    width: 300px;
    border-radius: 3px;
    box-shadow: 1px 1px 5px;
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
    /* margin-right: 5px; */
  }
</style>
