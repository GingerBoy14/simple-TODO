import { useContext } from 'react'
import { storeContext, usersContext } from 'context'

const useStoreContext = () => useContext(storeContext)
const useUsersContext = () => useContext(usersContext)

export { useStoreContext, useUsersContext }
