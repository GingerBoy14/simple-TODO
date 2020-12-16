import type from '../constants'

const rootReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case type.SET_USER_PROFILE:
      return {
        ...state,
        loading: false,
        signup: false,
        userProfile: action.payload
      }
    case type.USER_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case type.USER_SIGN_UP:
      console.log('sign up', action.payload)
      return {
        ...state,
        loading: true,
        signup: action.payload
      }
    case type.USER_LOGOUT:
      return {
        userProfile: null,
        loading: true,
        signup: false
      }
    default:
      return state
  }
}

export default rootReducer
