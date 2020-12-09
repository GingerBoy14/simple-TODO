import { v4 } from 'uuid'
import _ from 'lodash'
import firebase from '../config'
import { orderByField } from '../helpers'
const rootReducer = (state, action) => {
  let unpinned
  let date = new Date()
  switch (action.type) {
    case 'RELOAD':
      let array = action.payload
      array.sort(orderByField('dateLastEdit'))
      console.log('array', array)
      return { ...state, tasks: array }

    case 'ADD_TODO':
      const id = v4()
      firebase
        .firestore()
        .collection('tasks')
        .doc(id)
        .set({
          text: action.payload,
          id: id,
          dateCreate: Date(date),
          dateLastEdit: Date(date),
          status: { done: false, important: false, pinned: false }
        })
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            text: action.payload,
            id: id,
            dateCreate: Date(date),
            dateLastEdit: Date(date),
            status: { done: false, important: false, pinned: false }
          }
        ]
      }
    case 'DELETE_TODO':
      firebase.firestore().collection('tasks').doc(action.payload).delete()

      const newTasks = _.remove(state.tasks, (item) => {
        return item.id === action.payload
      })

      return {
        ...state,
        tasks: state.tasks.filter((it) => it.id !== newTasks[0])
      }

    case 'SET_DONE':
      return {
        ...state,
        tasks: state.tasks.map((todo) => {
          if (todo.id !== action.payload) return todo
          firebase
            .firestore()
            .collection('tasks')
            .doc(action.payload)
            .set({
              ...todo,
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
      return {
        ...state,
        tasks: state.tasks.map((todo) => {
          if (todo.id !== action.payload) return todo
          firebase
            .firestore()
            .collection('tasks')
            .doc(action.payload)
            .set({
              ...todo,
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
        firebase
          .firestore()
          .collection('tasks')
          .doc(action.payload)
          .update({
            ...todo,
            status: {
              ...todo.status,
              pinned: !todo.status.pinned
            },
            dateLastEdit: todo.status.pinned ? todo.dateCreate : Date(date)
          })
        //  console.log()
        return {
          ...todo,
          status: { ...todo.status, pinned: !todo.status.pinned },
          dateLastEdit: todo.status.pinned ? todo.dateCreate : Date(date)
        }
      })
      unpinned = []
      unpinned = _.remove(tasks, ({ status }) => !status.pinned)
      console.log('unpinned', unpinned)
      if (tasks.length !== 0) {
        const temp = tasks.pop()
        tasks.unshift(temp)
      }
      return {
        ...state,
        tasks: tasks.concat(unpinned).sort(orderByField('dateLastEdit'))
      }
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
