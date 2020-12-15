import firebase from 'firebase/app'
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDaHGoG1qZJpvlYK_WVaW8ZuLsvBq-v39k',
  authDomain: 'simple-todo-ffb04.firebaseapp.com',
  projectId: 'simple-todo-ffb04',
  storageBucket: 'simple-todo-ffb04.appspot.com',
  messagingSenderId: '671395463458',
  appId: '1:671395463458:web:5949a31719f796859fe57b'
}
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    this.auth = app.auth()
    this.db = app.firestore()
  }
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }
  async register(email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    return this.auth.currentUser.updateProfile({
      displayEmail: email
    })
  }
}

export default new Firebase()
/*
export default firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
export { db, firebaseConfig }*/
