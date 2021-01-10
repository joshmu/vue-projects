import firebase from '../../utils/firebase'

const emailPasswordLogin = {
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    login(email, password) {
      this.isLoading = true
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          // Signed in
        })
        .catch(console.error)
        .finally(() => (this.isLoading = false))
    },
    logout() {
      this.isLoading = true
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
        })
        .catch(console.error)
        .finally(() => (this.isLoading = false))
    },
  },
}

export default emailPasswordLogin
