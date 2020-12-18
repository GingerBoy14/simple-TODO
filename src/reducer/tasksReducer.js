import { v4 } from 'uuid'
import _ from 'lodash'
import { firebase } from 'config'

const tasksColection = firebase.firestore().collection('tasks')

const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA_IN_STATE':
      return {
        ...state,
        tasks: action.payload.sort((a, b) =>
          a.lastPinDate > b.lastPinDate ? -1 : 1
        )
      }

    case 'ADD_TODO':
      const id = v4()
      const todo = {
        id,
        text: action.payload.addTodoName,
        status: { done: false, important: false, pinned: false },
        creationTime: Date.now(),
        userId: action.payload.userId
      }
      tasksColection.doc(id).set(todo)

      return {
        ...state,
        tasks: [...state.tasks, todo]
      }

    case 'DELETE_TODO': {
      tasksColection.doc(action.payload).delete()
      const newTasks = _.remove(state.tasks, (item) => {
        return item.id !== action.payload
      })
      return {
        ...state,
        tasks: newTasks
      }
    }

    case 'SET_DONE':
      return {
        ...state,
        tasks: state.tasks.map((todo) => {
          if (todo.id !== action.payload) return todo
          tasksColection.doc(action.payload).update({
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
          tasksColection.doc(action.payload).update({
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
        todo.status = { ...todo.status, pinned: !todo.status.pinned }
        todo.status.pinned
          ? (todo.lastPinDate = Date.now())
          : (todo.lastPinDate = todo.creationTime)
        tasksColection.doc(action.payload).update({
          status: {
            ...todo.status,
            pinned: todo.status.pinned
          },
          lastPinDate: todo.lastPinDate
        })
        return {
          ...todo
        }
      })
      const unpinned = _.remove(tasks, ({ status }) => !status.pinned)

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

export default tasksReducer
