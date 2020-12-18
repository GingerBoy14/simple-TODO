import storeTasksContext, { storeUsersContext } from './context'
import TasksProvider from './TasksProvider'
import UsersProvider from './UsersProvider'
import useStoreTasksContext from './hooks/useStoreTasksContext'
import useStoreUserContext from './hooks/useStoreUserContext'

export default storeTasksContext

export {
  TasksProvider,
  UsersProvider,
  useStoreTasksContext,
  useStoreUserContext,
  storeUsersContext
}
