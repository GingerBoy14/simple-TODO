const dataRequested = () => {
  return { type: 'ADD_TODO_REQUEST' }
}
// const dataLoaded = (task) => {
//   return { type: 'ADD_TODO_SUCCESS', payload: task }
// }
const dataError = (error) => {
  return { type: 'ADD_TODO_SUCCESS', payload: error }
}

export const addTask = (payload) => async (
  dispatch,
  store,
  { firestore, user }
) => {
  let task = {
    text: payload,
    status: { done: false, important: false, pinned: false }
  }
  dispatch(dataRequested())
  //when click add task | set loading
  try {
    store.tasks.push(task)

    await firestore.update('userTasks', user.tasksId, { tasks: store.tasks })

    //tasks added to base useFirebaseListener work | set loading to false

    // dispatch({ type: 'ADD_TODO', payload: task })
  } catch (e) {
    //set error ui should show message.error
    dispatch(dataError(e))
  }
}
