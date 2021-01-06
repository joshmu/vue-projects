<template>
  <AppHeader title="Vue Todo App" />
  <TodoList />
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    TodoList,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 16px;
  background-color: rgb(238, 238, 238);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-height: 100vh;
}
</style>
