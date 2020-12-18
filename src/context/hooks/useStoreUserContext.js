import { useContext } from 'react'
import { storeUsersContext } from 'context'

const useStoreUserContext = () => useContext(storeUsersContext)

export default useStoreUserContext
