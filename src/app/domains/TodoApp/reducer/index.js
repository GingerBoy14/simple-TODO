import types from '../constants/types'

const rootReducer = (state, action) => {
  switch (action.type) {
    case types.SET_TASKS:
      return { ...state, tasks: action.payload, taskAdded: true }
    case 'ADD_TODO_REQUEST':
      return { ...state, taskAdded: false }

    case types.SET_PIN_TO_TOP:
      return { ...state, tasks: action.payload }

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
