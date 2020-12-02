import { useEffect, useReducer } from 'react'

import storeContext from './context'
import rootReducer from '../reducer/index'

const Provider = (props) => {
  const { store = {}, ...rest } = props
  const [state, dispatch] = useReducer(rootReducer, store)
  return <storeContext.Provider value={{ store: state, dispatch }} {...rest} />
}

export default Provider
