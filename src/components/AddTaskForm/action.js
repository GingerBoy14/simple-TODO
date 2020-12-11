const dataRequested = () => {
  return { type: 'ADD_TODO_REQUEST' }
}
const dataLoaded = (task) => {
  return { type: 'ADD_TODO_SUCCESS', payload: task }
}
const dataError = (error) => {
  return { type: 'ADD_TODO_SUCCESS', payload: error }
}

export const addTask = (payload) => async (dispatch, firebase) => {
  let task = {
    timestamp: new Date(Date.now()),
    text: payload,
    status: { done: false, important: false, pinned: false }
  }
  dispatch(dataRequested())
  try {
    const snapshot = await firebase.firestore().collection('tasks').add(task)
    task.id = snapshot.id
    dispatch(dataLoaded(task))
  } catch (e) {
    dispatch(dataError(e))
  }
}
