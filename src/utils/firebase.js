// Add the Firebase products that you want to use
import 'firebase/auth'

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCwbj0mFoU8FG6STcbd2lpvZ1rqxd7YmTg',
  authDomain: 'mu-vue-projects.firebaseapp.com',
  projectId: 'mu-vue-projects',
  storageBucket: 'mu-vue-projects.appspot.com',
  messagingSenderId: '932777820065',
  appId: '1:932777820065:web:0e4f170d690a9c84cd55e0',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
