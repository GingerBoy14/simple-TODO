import { v4 } from 'uuid'
import _ from 'lodash'
import { firestore } from 'config'

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'GET_TASKS':
      return {
        ...state,
        tasks: action.payload
      }
    case 'ADD_TODO':
      const id = v4()
      firestore
        .collection(`users/${action.payload.uid}/tasks`)
        .doc(id)
        .set({
          text: action.payload.addTodoName,
          id,
          status: { done: false, important: false, pinned: false },
          creationDate: new Date()
        })
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            text: action.payload.addTodoName,
            id,
            status: { done: false, important: false, pinned: false }
          }
        ]
      }
    case 'DELETE_TODO': {
      const newTasks = _.remove(state.tasks, (item) => {
        return item.id === action.payload
      })
      firestore
        .collection(`users/${action.payload.uid}/tasks`)
        .doc(action.payload.id)
        .delete()
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
          firestore
            .collection(`users/${action.payload.uid}/tasks`)
            .doc(action.payload)
            .update({
              status: {
                ...todo.status,
                done: !todo.status.done
              }
            })
          return {
            ...todo,
            status: {
              ...todo.status,
              done: !todo.status.done
            }
          }
        })
      }
    case 'IMPORTANT_TODO':
      console.log(action.payload.id)
      return {
        ...state,
        tasks: state.tasks.map((todo) => {
          if (todo.id !== action.payload) return todo
          console.log(todo.status.importants)
          firestore
            .collection(`users/${action.payload.uid}/tasks`)
            .doc(action.payload.id)
            .update({
              status: {
                ...todo.status,
                important: !todo.status.important
              }
            })
          return {
            ...todo,
            status: {
              ...todo.status,
              important: !todo.status.important
            }
          }
        })
      }
    case 'PINNED_TODO':
      const tasks = state.tasks.map((todo) => {
        if (todo.id !== action.payload) return todo
        if (!todo.status.pinned) todo.pinnedTime = new Date()
        else todo.pinnedTime = null
        firestore
          .collection(`users/${action.payload.uid}/tasks`)
          .doc(action.payload)
          .update({
            status: {
              ...todo.status,
              pinned: !todo.status.pinned
            },
            pinnedTime: todo.pinnedTime
          })
        return {
          ...todo,
          status: { ...todo.status, pinned: !todo.status.pinned }
        }
      })
      const unpinned = _.remove(tasks, ({ status }) => !status.pinned)
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
