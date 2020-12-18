import { firebase } from 'config'

const usersReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_UP_USER':
      const { userId, username } = action.payload
      const user = {
        id: userId,
        username
      }
      firebase.firestore().collection('users').doc(userId).set(user)
      return { ...state, id: userId }
    case 'SIGN_IN_USER_IN_STATE':
      return { ...state, id: action.payload }
    case 'SIGN_OUT':
      return { ...state, id: '' }
    default:
      return state
  }
}

export default usersReducer
