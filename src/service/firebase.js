import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { firebaseConfig } from 'constants/firebase'

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig)
    this.firestore = firebase.firestore()
  }

  async set(path, docId, data) {
    return this.getCollection(path).doc(docId).set(data)
  }
  async update(path, docId, data) {
    return this.getCollection(path).doc(docId).update(data)
  }
  async add(path, data) {
    return this.getCollection(path).add(data)
  }
  delete(collectionName, docId) {
    return this.getCollection(collectionName).doc(docId).delete()
  }
  getCollection(collectionName) {
    return this.firestore.collection(collectionName)
  }
  async getSortedCollection(collectionName, sort) {
    return this.firestore.collection(collectionName)[sort.func](sort.fieldPath)
  }
  async setListener(ref, onUpdate) {
    return ref.onSnapshot(onUpdate)
  }
}
export default new Firebase()
