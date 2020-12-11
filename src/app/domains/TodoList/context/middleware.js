import firebase from 'service'

const middleware = (dispatch) => (action) => {
  if (action instanceof Function) {
    return action(dispatch, firebase)
  }
  return dispatch(action)
}

export default middleware
