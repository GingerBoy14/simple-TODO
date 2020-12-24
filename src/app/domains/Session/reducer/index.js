import type from '../constants'

const rootReducer = (state, action) => {
  switch (action.type) {
    case type.SET_USER_PROFILE:
      return {
        ...state,
        loading: false,
        userProfile: action.payload
      }
    case type.UPDATE_USER:
      return {
        ...state,
        loading: false,
        userProfile: { ...state.userProfile, ...action.payload }
      }
    case type.USER_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case type.USER_SIGN_UP:
      return {
        ...state,
        signup: action.payload
      }
    case type.USER_LOGOUT:
      return {
        userProfile: null,
        loading: true
      }
    default:
      return state
  }
}

export default rootReducer
