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
  set(path, docId, data) {
    return this.getCollection(path).doc(docId).set(data)
  }
  /**
   * Get document from firestore collection
   * @param {string} path - collection path
   * @param {string} docId - document ID in this collection
   */
  async get(path, docId) {
    const res = await this.getCollection(path).doc(docId).get()
    return res.data()
  }
  /**
   * Update document data in firestore collection
   * @param {string} path - collection path
   * @param {string} docId - document ID in this collection
   * @param {object} data - data that need to set
   */
  update(path, docId, data) {
    return this.getCollection(path).doc(docId).update(data)
  }
  /**
   * Add data to firestore collection
   * @param {string} path - collection path
   * @param {object} data - data that need to set
   */
  add(path, data) {
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
  getSortedCollection(collectionName, sort) {
    return this.firestore.collection(collectionName)[sort.func](sort.fieldPath)
  }
  /**
   * Set listener for some collection update
   * @param {*} ref - collection reference
   * @param {callback} onUpdate - function witch will be execute on listener response
   */
  setListener(ref, onUpdate) {
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
  async signUp(email, password) {
    try {
      return await this.auth.createUserWithEmailAndPassword(email, password)
      //new to send confirmation email
    } catch (e) {
      // to throw error to upper func you need to return rejected promise from async func
      switch (e.code) {
        case 'auth/email-already-in-use':
          return Promise.reject(new Error(e.message))
        default:
          return Promise.reject(new Error(e))
      }
    }
  }
  async createUser(uid, name, avatar) {
    const { id } = await this.add('userTasks', { tasks: [] })
    const data = {
      name,
      avatar,
      tasksId: id
    }

    await this.set('users', uid, data)
    console.log('add data')
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
    const res = await this.get('users', user.uid)
    return { ...res, uid: user.uid }
  }
  async getRedirectResult() {
    const res = await this.auth.getRedirectResult()
    //TODO need try catch
    if (res.user !== null && res.additionalUserInfo.isNewUser) {
      const { user } = res
      await this.createUser(user.uid, user.displayName, user.photoURL)
      return
    } else if (res.user !== null) {
      //if user create account with email and password but logged with google
      const snapshot = await this.get('users', res.user.uid)
      if (snapshot.name === res.user.email && snapshot.avatar === '') {
        const { user } = res
        await this.update('users', res.user.uid, {
          avatar: user.photoURL,
          name: user.displayName
        })
      }
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
