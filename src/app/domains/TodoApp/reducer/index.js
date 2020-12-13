import _ from 'lodash'
import firebase from 'service'
import types from '../constants/types'

const rootReducer = (draft, action) => {
  switch (action.type) {
    case types.SET_TASKS: {
      const temp = action.payload
      const unpinned = _.remove(temp, ({ status }) => !status.pinned)
      // unpinned.sort((a, b) => a.timestamp - b.timestamp)
      temp.sort((a, b) => b.pinnedTimeStamp - a.pinnedTimeStamp)
      draft.tasks = temp.concat(unpinned)
      break
    }
    case types.ADD_TODO:
      draft.tasks.push(action.payload)
      break
    case types.DELETE_TODO:
      firebase.delete('tasks', action.payload)
      delete draft.tasks.find(({ id }) => id === action.payload)
      break
    case types.SET_DONE: {
      const todo = draft.tasks.find(({ id }) => id === action.payload)
      todo.status.done = !todo.status.done
      firebase.update('tasks', action.payload, { status: todo.status })
      break
    }
    case types.SET_IMPORTANT: {
      const todo = draft.tasks.find(({ id }) => id === action.payload)
      todo.status.important = !todo.status.important
      firebase.update('tasks', action.payload, { status: todo.status })
      break
    }
    case types.SET_PIN_TO_TOP:
      const todo = draft.tasks.find(({ id }) => id === action.payload)
      todo.status.pinned = !todo.status.pinned
      if (todo.status.pinned) {
        todo.pinnedTimeStamp = new Date(Date.now())
      } else {
        delete todo.pinnedTimeStamp
      }
      const unpinned = _.remove(draft.tasks, ({ status }) => !status.pinned)
      unpinned.sort((a, b) => a.timestamp - b.timestamp)
      draft.tasks.sort((a, b) => b.pinnedTimeStamp - a.pinnedTimeStamp)
      if (draft.tasks.length !== 0) {
        const temp = draft.tasks.pop()
        draft.tasks.unshift(temp)
      }
      draft.tasks = draft.tasks.concat(unpinned)
      const firebaseData = { ...todo }
      delete firebaseData.id
      firebase.set('tasks', todo.id, firebaseData)

      break

    case types.CHANGE_FILTER:
      draft.filter = action.payload
      break
    case types.SEARCH:
      draft.query = action.payload
      break
  }
}

export default rootReducer
