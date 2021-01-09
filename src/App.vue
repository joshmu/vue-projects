<template>
  <div id="app-container">
    <AppHeader title="Vue Projects" />
    <div class="page-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader,
  },
}
</script>

<style lang="scss">
#app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-height: 100vh;

  .page-container {
    max-width: 900px;
    width: 80%;
    margin: 2rem auto;
  }
}
</style>
