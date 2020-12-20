import types from '../constants'
const changeStatus = (field, payload) => (
  dispatch,
  store,
  { firestore, user }
) => {
  let task = store.tasks.find(({ id }) => payload === id)

  try {
    switch (field) {
      case 'important':
        task.status[field] = !task.status[field]
        break
      case 'done':
        task.status[field] = !task.status[field]
        break
    }

    firestore.update('userTasks', user.tasksId, { tasks: store.tasks })

    dispatch({ type: types.SET_TASKS, payload: store.tasks })
  } catch (e) {
    //set error ui should show message.error
    // dispatch(dataError(e))
  }
}

export default changeStatus
