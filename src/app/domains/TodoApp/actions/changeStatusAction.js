const changeStatus = (field, payload) => (
  dispatch,
  store,
  { firestore, user }
) => {
  const tasks = store.tasks
  const task = tasks.find(({ id }) => payload === id)

  try {
    switch (field) {
      case 'important':
        task.status[field] = !task.status[field]
        break
      case 'done':
        task.status[field] = !task.status[field]
        break
    }

    firestore.update('userTasks', user.tasksId, { tasks })
  } catch (e) {
    //set error ui should show message.error
    // dispatch(dataError(e))
  }
}

export default changeStatus
