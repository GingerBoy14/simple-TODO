import _ from 'lodash'
import type from '../constants'
const dataError = (error) => {
  return { type: 'DELETE_TODO_ERROR', payload: error }
}
const dataSuccess = (tasks) => {
  return { type: type.DELETE_TODO, payload: tasks }
}

const deleteTask = (payload) => (dispatch, store, { firestore, user }) => {
  const tasks = _.filter(
    store.tasks,
    ({ positionId }) => positionId !== payload
  )
  try {
    firestore.update('userTasks', user.tasksId, { tasks })
    dispatch(dataSuccess(tasks))
  } catch (e) {
    dispatch(dataError(e))
  }
}

export default deleteTask
