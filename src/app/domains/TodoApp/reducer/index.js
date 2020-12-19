import _ from 'lodash'
import { firestore } from 'service'
import types from '../constants/types'

const rootReducer = (state, action) => {
  switch (action.type) {
    case types.SET_TASKS:
      console.log(action.payload)
      return { ...state, tasks: action.payload }
    case types.ADD_TODO:
      console.log('add')
      return { ...state, tasks: [...state.tasks, { ...action.payload }] }
    case types.DELETE_TODO:
      return state
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
