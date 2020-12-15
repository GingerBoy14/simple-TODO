import { v4 } from 'uuid'
import _ from 'lodash'
import firebase, { db } from '../config'

const userReducer = (state, action) => {
  let id
  switch (action.type) {
    case 'SIGNUP_USER':
      id = v4()
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          action.payload.login,
          action.payload.password
        )
        .then(function (result) {
          console.log(result.user)
          db.collection('users').doc(id).set({
            login: result.user.email
          })
        })

      return {
        ...state
      }
    default:
      return state
  }
}

export default userReducer
