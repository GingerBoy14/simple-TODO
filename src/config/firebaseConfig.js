import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

//
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAA-tzXE1cqj5wGAzWrFJMA2MdOMcfPvyw',
  authDomain: 'simple-todo-46e39.firebaseapp.com',
  projectId: 'simple-todo-46e39',
  storageBucket: 'simple-todo-46e39.appspot.com',
  messagingSenderId: '781857568620',
  appId: '1:781857568620:web:2b287c8936dbe8ee5b2549'
}
const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth()
export const firestore = app.firestore()
export default app
