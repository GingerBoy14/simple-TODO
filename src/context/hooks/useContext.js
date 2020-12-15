import { useContext } from 'react'
import { storeContext, userContext } from 'context'

const useStoreContext = () => useContext(storeContext)
const useUserContext = () => useContext(userContext)

export { useStoreContext, useUserContext }
