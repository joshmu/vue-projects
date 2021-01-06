<template>
  <header class="appHeader">
    <div class="logo">{{ title }}</div>
    <nav class="nav">
      <ul>
        <li>About</li>
        <li>Contact</li>
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
.appHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  background-color: black;
  color: white;
  padding: 0 2rem;

  .logo {
    font-weight: bold;
    font-size: 1.25rem;
  }
  .nav {
    ul {
      list-style: none;
      display: flex;
      gap: 0.5rem;
    }
  }
}
</style>
