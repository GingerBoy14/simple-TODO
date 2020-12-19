import { firestore } from 'service'

const middleware = (dispatch, user) => (action) => {
  if (action instanceof Function) {
    return action(dispatch, { firestore, user })
  }
  return dispatch(action)
}

export default middleware
