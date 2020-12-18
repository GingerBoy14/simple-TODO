import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBhwPwXOtse8QCW-KAHwU5-SECSWYY_YsM',
  authDomain: 'simple-todo-b1427.firebaseapp.com',
  projectId: 'simple-todo-b1427',
  storageBucket: 'simple-todo-b1427.appspot.com',
  messagingSenderId: '879495360255',
  appId: '1:879495360255:web:1c9f1ef90f3fef8f2aa6ca'
}

export default firebase.initializeApp(firebaseConfig)
