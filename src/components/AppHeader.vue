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
        <li class="auth" v-if="!isLoggedIn" @click="$emit('open-login-modal')">
          Login
        </li>
        <li class="auth" v-else @click="$emit('logout')">
          Logout
          <span class="email">{{ authUserEmail }}</span>
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
    isLoggedIn: { type: Boolean, required: true },
    authUser: Object,
  },
  data() {
    return {
      pages: formattedRoutes,
    }
  },
  computed: {
    authUserEmail() {
      return this.authUser.email.toLowerCase()
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/variables.scss';

.app-header {
  position: fixed;
  top: 0;
  width: 100%;
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

  // underline hover animation & hold on active link
  @mixin hover-animation {
    cursor: pointer;
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

  .nav {
    ul {
      list-style: none;
      display: flex;
      gap: 0.5rem;
      li {
        a {
          @include hover-animation;
        }
        &.auth {
          @include hover-animation;
          .email {
            text-transform: lowercase;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
