import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            text: action.payload,
            id: uuidv4(),
            status: { done: false, pinned: false, important: false }
          }
        ]
      }
    case 'DELETE_TODO':
      return {
        ...state,
        tasks: _.filter(state.tasks, ({ id }) => id !== action.payload)
      }
    case 'SET_DONE':
      return {
        ...state,
        tasks: state.tasks.map((todo) => {
          if (todo.id !== action.payload) return todo

          return {
            ...todo,
            status: { ...todo.status, done: !todo.status.done }
          }
        })
      }
    case 'SET_IMPORTANT':
      return {
        ...state,
        tasks: state.tasks.map((todo) => {
          if (todo.id !== action.payload) return todo

          return {
            ...todo,
            status: { ...todo.status, important: !todo.status.important }
          }
        })
      }
    case 'SET_PIN_TO_TOP':
      let tasks = state.tasks.map((todo) => {
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
      return {
        ...state,
        tasks: tasks.concat(unpinned)
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
