import { v4 } from 'uuid'
import _ from 'lodash'
import firebase from '../config'

const userReducer = (state, action) => {
  console.log(state)

  switch (action.type) {
    case 'SIGNUP_USER':
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          action.payload.login,
          action.payload.password
        )

      return {
        ...state
      }
    default:
      return state
  }
}

export default userReducer
