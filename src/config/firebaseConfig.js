import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDvCkv4IdT6k0FGoW0lT2tEypqieY6mQys',
  authDomain: 'simple-todo-a0e47.firebaseapp.com',
  projectId: 'simple-todo-a0e47',
  storageBucket: 'simple-todo-a0e47.appspot.com',
  messagingSenderId: '983968589497',
  appId: '1:983968589497:web:b8015ac83868e1f8091d68'
}

export default firebase.initializeApp(firebaseConfig)
