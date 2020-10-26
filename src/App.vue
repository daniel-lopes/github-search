<template>
  <div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>

@font-face {
  font-family: RobotoMono;
  src: url('./assets/fonts/RobotoMono.ttf');
}

@font-face {
  font-family: Rubik;
  src: url('./assets/fonts/Rubik.ttf');
}

@font-face {
  font-family: RubikLightItalic;
  src: url('./assets/fonts/Rubik-LightItalic.ttf');
}

#app {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.primarySource {
  font-family: Rubik;
  font-size: 36px;
  font-weight: 300;
}

.secondarySource  {
  font-family: Rubik;
  font-size: 24px;
  font-weight: 300;
  color: #757575;
}

.icon {
  color: #000;
}
</style>
