import { v4 } from 'uuid'
import _ from 'lodash'

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            text: action.payload.text,
            id: v4(),
            status: { done: false, important: false, pinned: false }
          }
        ]
      }
    case 'DELETE_TODO': {
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
