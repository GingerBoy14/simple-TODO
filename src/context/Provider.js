import { useReducer } from 'react'

import storeContext from 'Context'
import rootReducer from 'reducer'

const Provider = (props) => {
  const { store = {}, ...rest } = props
  const [state, dispatch] = useReducer(rootReducer, store)
  return <storeContext.Provider value={{ store: state, dispatch }} {...rest} />
}

export default Provider
