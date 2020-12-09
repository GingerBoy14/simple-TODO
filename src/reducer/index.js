import _ from 'lodash'
import firebase from '../config'

const deleteTaskInFirestore = async (collectionName, docId) => {
  await firebase.firestore().collection(collectionName).doc(docId).delete()
}

const statusToggle = (state, statusName, id) => {
  return {
    ...state,
    tasks: state.tasks.map((todo) => {
      if (todo.id !== id) return todo
      const data = {
        status: {
          ...todo.status,
          [statusName]: !todo.status[statusName]
        }
      }
      firebase.firestore().collection('tasks').doc(todo.id).update(data)
      return { ...todo, ...data }
    })
  }
}

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'GET_TASKS':
      return { ...state, tasks: action.payload }
    case 'ADD_TODO':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case 'DELETE_TODO': {
      deleteTaskInFirestore('tasks', action.payload)
      const newTasks = _.remove(state.tasks, (item) => {
        return item.id === action.payload
      })
      return {
        ...state,
        tasks: state.tasks.filter((it) => it.id !== newTasks[0])
      }
    }
    case 'SET_DONE':
      return statusToggle(state, 'done', action.payload)
    case 'SET_IMPORTANT':
      return statusToggle(state, 'important', action.payload)
    case 'SET_PIN_TO_TOP':
      const tasks = state.tasks.map((todo) => {
        if (todo.id !== action.payload) return todo
        const data = {
          ...todo,
          status: { ...todo.status, pinned: !todo.status.pinned }
        }
        if (data.status.pinned) {
          data.pinnedTimeStamp = new Date()
        } else {
          delete data.pinnedTimeStamp
        }
        const firebaseData = { ...data }
        delete firebaseData.id
        firebase.firestore().collection('tasks').doc(todo.id).set(firebaseData)
        return data
      })

      const unpinned = _.remove(tasks, ({ status }) => !status.pinned)
      unpinned.sort((a, b) => a.timestamp - b.timestamp)
      if (tasks.length !== 0) {
        const temp = tasks.pop()
        tasks.unshift(temp)
      }
      return { ...state, tasks: tasks.concat(unpinned) }

    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.payload
      }
    case 'SEARCH':
      return {
        ...state,
        query: action.payload
      }
    default:
      return state
  }
}

export default rootReducer
