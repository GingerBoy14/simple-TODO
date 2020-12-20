import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { firebaseConfig } from '../constants/firebase'

class Firebase {
  /**
   * Initialize App.
   */
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    } else {
      firebase.app() // if already initialized, use that one
    }
  }

  /**
   * @returns {Firebase} - return firebase instance
   */
  getFirebase = () => firebase
}
export default new Firebase()
export { Firebase, firebase }
