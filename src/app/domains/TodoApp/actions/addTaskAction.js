import _ from 'lodash'

const dataRequested = () => {
  return { type: 'ADD_TODO_REQUEST' }
}
// const dataLoaded = (task) => {
//   return { type: 'ADD_TODO_SUCCESS', payload: task }
// }
const dataError = (error) => {
  return { type: 'ADD_TODO_ERROR', payload: error }
}

const addTask = (payload) => async (dispatch, store, { firestore, user }) => {
  let task = {
    text: payload,
    id: store.tasks.length,
    status: { done: false, important: false, pinned: false }
  }
  let tasks = [...store.tasks]
  dispatch(dataRequested())
  //when click add task | set loading
  try {
    const unpinned = _.remove(tasks, ({ status }) => !status.pinned)
    unpinned.unshift(task)
    tasks = tasks.concat(unpinned)

    await firestore.update('userTasks', user.tasksId, { tasks })

    //tasks added to base useFirebaseListener work | set loading to false

    // dispatch({ type: 'ADD_TODO', payload: task })
  } catch (e) {
    //set error ui should show message.error
    dispatch(dataError(e))
  }
}

export default addTask
