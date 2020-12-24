import _ from 'lodash'
import types from '../constants'

const pinToTop = (payload) => (dispatch, store, { firestore, user }) => {
  try {
    let tasks = [...store.tasks]
    const task = _.remove(tasks, ({ id }) => payload === id)[0]
    task.status.pinned = !task.status.pinned
    if (task.status.pinned) {
      tasks = [task, ...tasks]
    } else {
      const unpinned = _.remove(tasks, ({ status }) => !status.pinned)
      unpinned.unshift(task)
      tasks = tasks.concat(unpinned)
    }
    firestore.update('userTasks', user.tasksId, { tasks })
    dispatch({ type: types.SET_PIN_TO_TOP, payload: tasks })
  } catch (e) {
    console.log(e)
    //set error ui should show message.error
    // dispatch(dataError(e))
  }
}

export default pinToTop
