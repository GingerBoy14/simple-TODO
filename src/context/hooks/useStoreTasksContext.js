import { useContext } from 'react'
import storeTasksContext from 'context'

const useStoreTasksContext = () => useContext(storeTasksContext)

export default useStoreTasksContext
