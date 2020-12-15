import { useContext } from 'react'
import { userDispatch } from '../context'

const useUserDispatch = () => useContext(userDispatch)

export default useUserDispatch
