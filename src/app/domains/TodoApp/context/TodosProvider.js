import { useMemo } from 'react'
import { useImmerReducer } from 'use-immer'
import { storeContext, dispatchContext } from './context'
import rootReducer from '../reducer'
import middleware from './middleware'

const TodosProvider = (props) => {
  const { store = {}, ...rest } = props
  const [state, dispatch] = useImmerReducer(rootReducer, store)
  // useEffect(() => console.log('todoListStore', state), [state])

  const middlewareDispatch = useMemo(() => middleware(dispatch), [dispatch])
  const data = useMemo(() => state, [state])
  return (
    <dispatchContext.Provider value={middlewareDispatch}>
      <storeContext.Provider value={data} {...rest} />
    </dispatchContext.Provider>
  )
}

export default TodosProvider
