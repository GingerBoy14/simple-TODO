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
        tasks: _.remove(state.tasks, ({ id }) => id !== action.payload)
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

    default:
      return state
  }
}

export default rootReducer
