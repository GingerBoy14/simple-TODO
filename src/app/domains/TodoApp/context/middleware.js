import { firestore } from 'service'

const middleware = (dispatch, store, user) => (action) => {
  if (action instanceof Function) {
    return action(dispatch, store, { firestore, user })
  }
  return dispatch(action)
}

export default middleware
