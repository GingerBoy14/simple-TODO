import _ from 'lodash'
import { v4 } from 'uuid'
import firebase from '../config'

const addTaskToFirestore = async (collectionName, data, uid) => {
  await firebase.firestore().collection(collectionName).doc(uid).set(data)
}
const deleteTaskInFirestore = async (collectionName, docId) => {
  await firebase.firestore().collection(collectionName).doc(docId).delete()
}

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'GET_TASKS':
      return { ...state, tasks: action.payload }
    case 'ADD_TODO':
      const id = v4()
      const data = {
        id,
        timestamp: new Date(),
        text: action.payload,
        status: { done: false, important: false, pinned: false }
      }
      addTaskToFirestore('tasks', data, id)
      return {
        ...state,
        tasks: [...state.tasks, data]
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
      return {
        ...state,
        tasks: state.tasks.map((todo) => {
          if (todo.id !== action.payload) return todo
          const data = {
            status: {
              ...todo.status,
              done: !todo.status.done
            }
          }
          firebase.firestore().collection('tasks').doc(todo.id).update(data)
          return data
        })
      }
    case 'SET_IMPORTANT':
      return {
        ...state,
        tasks: state.tasks.map((todo) => {
          if (todo.id !== action.payload) return todo
          const data = {
            ...todo,
            status: {
              ...todo.status,
              important: !todo.status.important
            }
          }
          firebase.firestore().collection('tasks').doc(todo.id).update(data)
          return data
        })
      }
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
        console.log(data)
        firebase.firestore().collection('tasks').doc(todo.id).set(data)
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
