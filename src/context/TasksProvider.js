import { useReducer } from 'react'
import storeTasksContext from 'context'
import tasksReducer from '../reducer/tasksReducer'

const TasksProvider = (props) => {
  const { store = {}, ...rest } = props
  const [state, dispatch] = useReducer(tasksReducer, store)
  return (
    <storeTasksContext.Provider value={{ store: state, dispatch }} {...rest} />
  )
}

export default TasksProvider
