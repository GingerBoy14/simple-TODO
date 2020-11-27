import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'
const rootReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        tasks: [...state.tasks, { text: action.payload, id: uuidv4() }]
      }
    case 'DELETE_TODO':
      return {
        ...state,
        tasks: _.remove(state.tasks, ({ id }) => id !== action.payload)
      }
    default:
      return state
  }
}

export default rootReducer
