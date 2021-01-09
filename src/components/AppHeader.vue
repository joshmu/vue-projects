<template>
  <header class="app-header">
    <div class="logo">
      <h1>
        <router-link to="/">{{ title }}</router-link>
      </h1>
    </div>
    <nav class="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/todo">Todo</router-link></li>
        <li><router-link to="/calendar">Calendar</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  background-color: black;
  color: white;
  padding: 0 2rem;

  .logo {
    h1 {
      font-size: 1.5rem;
    }
  }
  .nav {
    ul {
      list-style: none;
      display: flex;
      gap: 0.5rem;
      // underline hover animation & hold on active link
      a {
        &:after {
          content: '';
          display: block;
          background-color: white;
          width: 0%;
          height: 1px;
          margin: auto;
          transition: width 0.3s ease-out;
        }
        &:hover {
          &:after {
            width: 100%;
          }
        }
        &.router-link-exact-active {
          &:after {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
