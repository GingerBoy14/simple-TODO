import types from '../constants/types'

const rootReducer = (state, action) => {
  switch (action.type) {
    case types.SET_TASKS:
      return { ...state, tasks: action.payload, taskAdded: true }
    case 'ADD_TODO_REQUEST':
      return { ...state, taskAdded: false }
    case types.DELETE_TODO:
      return { ...state, tasks: action.payload }
    case types.SET_DONE: {
      // const todo = draft.tasks.find(({ id }) => id === action.payload)
      // todo.status.done = !todo.status.done
      // firebase.update('tasks', action.payload, { status: todo.status })
      return state
    }
    case types.SET_IMPORTANT: {
      // const todo = draft.tasks.find(({ id }) => id === action.payload)
      // todo.status.important = !todo.status.important
      // firebase.update('tasks', action.payload, { status: todo.status })
      return state
    }
    case types.SET_PIN_TO_TOP:
      return state

    case types.CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload
      }

    case types.SEARCH:
      return {
        ...state,
        query: action.payload
      }

    default:
      return state
  }
}

export default rootReducer
