import { useMemo, useReducer } from 'react'
import { storeContext, dispatchContext } from './context'
import rootReducer from '../reducer'
import middleware from './middleware'
import { useUserContext } from 'app/domains/Session/context'

const TodosProvider = (props) => {
  const { store = {}, ...rest } = props
  const [state, dispatch] = useReducer(rootReducer, store)
  // useEffect(() => console.log('todoListStore', state), [state])
  const { userProfile } = useUserContext()
  const middlewareDispatch = useMemo(() => middleware(dispatch, userProfile), [
    dispatch
  ])
  const data = useMemo(() => state, [state])
  return (
    <dispatchContext.Provider value={middlewareDispatch}>
      <storeContext.Provider value={data} {...rest} />
    </dispatchContext.Provider>
  )
}

export default TodosProvider
