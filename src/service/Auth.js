import { Firebase, firebase } from './Firebase'
import firestore from './Firestore'

class Auth extends Firebase {
  constructor() {
    super()
    this.auth = this.getFirebase().auth()
  }
  getCurrentUser = () => {
    try {
      if (this.auth.currentUser === null) {
        throw new Error('No user yet.')
      }
      return this.auth.currentUser
    } catch (e) {
      console.log(e)
      return {}
    }
  }
  /**
   * Send email for user password resetting
   * @param {string} email - user's email
   */
  sendPasswordResetEmail(email) {
    return this.auth.sendPasswordResetEmail(email)
  }
  /**
   * Send email for user verification
   */
  sendVerifyEmail() {
    return this.auth.currentUser.sendEmailVerification()
  }
  changePassword(newPassword, authPassword) {
    console.log(this.auth.currentUser)
    const currentUser = this.auth.currentUser
    if (this.credential) {
      currentUser.reauthenticateWithCredential(this.credential)
    }
    if (authPassword) {
      const credential = firebase.auth.EmailAuthProvider.credential(
        currentUser.email,
        authPassword
      )
      currentUser.reauthenticateWithCredential(credential)
    }
    return currentUser.updatePassword(newPassword)
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
    const { id } = await firestore.add('userTasks', { tasks: [] })
    const data = {
      name,
      avatar,
      tasksId: id
    }
    await firestore.set('users', uid, data)
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
    const res = await firestore.get('users', user.uid)
    const data = { ...res, uid: user.uid }
    return data
  }
  async getRedirectResult() {
    const res = await this.auth.getRedirectResult()
    this.credential = res.credential
    //TODO need try catch
    if (res.user !== null && res.additionalUserInfo.isNewUser) {
      const { user } = res
      await this.createUser(user.uid, user.displayName, user.photoURL)
      return
    } else if (res.user !== null) {
      //if user create account with email and password but logged with google
      const snapshot = await firestore.get('users', res.user.uid)
      if (snapshot.name === res.user.email && snapshot.avatar === '') {
        const { user } = res
        await firestore.update('users', res.user.uid, {
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
    return this.auth.signOut()
  }
}

export default new Auth()
