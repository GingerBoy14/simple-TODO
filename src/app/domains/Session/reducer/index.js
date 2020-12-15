import types from '../constants'
const rootReducer = (state, action) => {
  switch (action.type) {
    case types.SET_USER_PROFILE:
      return {
        ...state,
        loading: false,
        userProfile: action.payload
      }
    case types.USER_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}

export default rootReducer
