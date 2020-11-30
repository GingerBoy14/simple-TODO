import { useReducer, useEffect } from 'react'
import storeContext from './context'
import rootReducer from '../reducer'

const Provider = (props) => {
  const { store = {}, ...rest } = props
  const [state, dispatch] = useReducer(rootReducer, store)
  useEffect(() => console.log(state), [state])
  return <storeContext.Provider value={{ store: state, dispatch }} {...rest} />
}

export default Provider
