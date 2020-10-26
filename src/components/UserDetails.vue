<template>
  <div v-if="Object.keys(userData).length" class="container">
    <img :src="userData.avatar_url" class="avatar" />
    <div class="primarySource"> {{ userData.name }} </div>
    <div class="secondarySource marginT-5 marginB44"> {{ userData.login }} </div>
    
    <div v-if="userData.company" class="secondarySource margin-and-font">
      <font-awesome-icon icon="briefcase" class="icon mr-1" />
      {{userData.company }}
    </div>
    <div v-if="userData.location" class="secondarySource margin-and-font">
      <font-awesome-icon icon="map-marker-alt" class="icon ml-1 mr-2" />
      {{ userData.location }}
    </div>
    <div v-if="userData.stargazers_count" class="secondarySource margin-and-font">
      <font-awesome-icon :icon="['far', 'star']" class="icon mr-1" />
      {{ userData.stargazers_count }}
    </div>
    <div v-if="userData.public_repos" class="secondarySource margin-and-font">
      <font-awesome-icon icon="archive" class="icon mr-2" />
      {{ userData.public_repos }}
    </div>
    <div v-if="userData.followers" class="secondarySource margin-and-font">
      <font-awesome-icon icon="user-friends" class="icon mr-1" />
      {{ userData.followers }}
    </div>
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
    height: 300px;
    border-radius: 3px;
    box-shadow: 1px 1px 5px;
    margin-bottom: 12px;
  }
  .marginT-5 {
    margin-top: -5px;
  }
  .margin-and-font {
    margin-bottom: 5px;
    font-size: 20px;
  }
  .marginB44 {
    margin-bottom: 44px;
  }
</style>
