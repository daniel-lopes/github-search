<template>
  <div v-if="Object.keys(userData).length">
    <img :src="userData.avatar_url">
    <h1>  <font-awesome-icon icon="archive" /> {{ userData.name }} </h1>
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