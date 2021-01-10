<template>
  <div id="app-container">
    <AppHeader
      title="Vue Projects"
      @open-login-modal="isLoginOpen = true"
      :isLoggedIn="isLoggedIn"
      @logout="handleLogout"
      :authUser="authUser"
    />
    <div class="page-container">
      <router-view></router-view>
    </div>
    <teleport to="body">
      <LoginModal v-if="isLoginOpen" @close-login-modal="isLoginOpen = false" />
    </teleport>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import LoginModal from './components/Login/LoginModal'
import firebase from './utils/firebase'
import emailPasswordLogin from './components/Login/emailPasswordLogin'

export default {
  name: 'App',
  components: {
    AppHeader,
    LoginModal,
  },
  mixins: [emailPasswordLogin],
  data() {
    return {
      isLoading: false,
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {},
    }
  },
  mounted() {
    // global auth event listener
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('signed in', user)
        // User is signed in.
        this.authUser = user
        this.isLoggedIn = true
        this.isLoginOpen = false
      } else {
        console.log('signed out')
        // No user is signed in.
        this.authUser = {}
        this.isLoggedIn = false
        this.isLoginOpen = false
      }
    })
  },
  methods: {
    handleLogout() {
      this.logout()
    },
  },
}
</script>

<style lang="scss">
@import './styles/variables.scss';

#app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .page-container {
    padding-top: $header-height;
    height: calc(100vh - #{$header-height});
    max-width: 900px;
    width: 80%;
    margin: 2rem auto;
  }
}
</style>
