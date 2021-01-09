<template>
  <header class="app-header">
    <div class="logo">
      <h1>
        <router-link to="/">{{ title }}</router-link>
      </h1>
    </div>
    <nav class="nav">
      <ul v-if="pages.length > 0">
        <li v-for="page in pages" :key="page.title">
          <router-link :to="page.to">{{ page.title }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { routes } from '../router'
const formattedRoutes = routes.map(r => ({ title: r.name, to: r.path }))
export default {
  name: 'AppHeader',
  props: {
    title: { type: String, required: true },
  },
  data() {
    return {
      pages: formattedRoutes,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/variables.scss';

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $header-height;
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
        text-transform: capitalize;
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
