import { useReducer, useEffect, useMemo } from 'react'

import storeContext from './context'
import rootReducer from '../reducer'
import middleware from './middleware'

const TodosProvider = (props) => {
  const { store = {}, ...rest } = props
  const [state, dispatch] = useReducer(rootReducer, store)
  useEffect(() => console.log('todoListStore', state), [state])

  const middlewareDispatch = useMemo(() => middleware(dispatch), [dispatch])

  return (
    <storeContext.Provider
      value={{ store: state, dispatch: middlewareDispatch }}
      {...rest}
    />
  )
}

export default TodosProvider
