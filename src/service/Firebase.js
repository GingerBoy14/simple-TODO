import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { firebaseConfig } from '../constants/firebase'

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    } else {
      firebase.app() // if already initialized, use that one
    }
    this.firestore = firebase.firestore()
    this.auth = firebase.auth()
  }

  /**
   * Set data to document in firestore collection
   * @param {string} path - collection path
   * @param {string} docId - document ID in this collection
   * @param {object} data - data that need to set
   */
  async set(path, docId, data) {
    return this.getCollection(path).doc(docId).set(data)
  }
  async get(path, docId) {
    return this.getCollection(path).doc(docId).get()
  }
  /**
   * Update document data in firestore collection
   * @param {string} path - collection path
   * @param {string} docId - document ID in this collection
   * @param {object} data - data that need to set
   */
  async update(path, docId, data) {
    return this.getCollection(path).doc(docId).update(data)
  }
  /**
   * Add data to firestore collection
   * @param {string} path - collection path
   * @param {object} data - data that need to set
   */
  async add(path, data) {
    return this.getCollection(path).add(data)
  }
  /**
   * Delete document from firestore collection
   * @param {string} path - collection path
   * @param {string} docId - document ID in this collection
   */
  delete(path, docId) {
    return this.getCollection(path).doc(docId).delete()
  }
  /**
   * Get full firestore collection
   * @param {string} collectionName - collection path
   */
  getCollection(collectionName) {
    return this.firestore.collection(collectionName)
  }
  /**
   * Get full but sorted firestore collection
   * @param {string} collectionName - collection path
   * @param {Object} sort - sort configuration
   * @param {string} sort.func - name of sorting function
   * @param {string} sort.fieldPath - name of field witch we should use to sort
   */
  async getSortedCollection(collectionName, sort) {
    return this.firestore.collection(collectionName)[sort.func](sort.fieldPath)
  }
  /**
   * Set listener for some collection update
   * @param {*} ref - collection reference
   * @param {callback} onUpdate - function witch will be execute on listener response
   */
  async setListener(ref, onUpdate) {
    return ref.onSnapshot(onUpdate)
  }
  /**
   * Send email for user password resetting
   * @param {string} email - user's email
   */
  sendPasswordResetEmail(email) {
    return this.auth.sendPasswordResetEmail(email)
  }
  /**
   * User login with email
   * @param {string} email - user's email
   * @param {string} password - user's password
   */
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
    //new to send confirmation email
  }
  /**
   * User login with google. Creating his profile and tasks collection in firestore.
   * @async
   */
  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    this.auth.signInWithRedirect(provider)
  }
  async getUser(user) {
    const data = await this.get('users', user.uid)

    return data.data()
  }
  async getRedirectResult() {
    const res = await this.auth.getRedirectResult()
    if (res.user !== null && res.additionalUserInfo.isNewUser) {
      const { user } = res
      const { id } = await this.add('userTasks', { tasks: [] })
      const data = {
        displayName: user.displayName,
        avatar: user.photoURL,
        tasksId: id
      }
      await this.set('users', user.uid, data)
    }
  }

  onAuthChange(callback) {
    return this.auth.onAuthStateChanged(callback)
  }
  /**
   * Logout user from app
   */
  logout() {
    this.auth.signOut()
  }
}
export default new Firebase()
