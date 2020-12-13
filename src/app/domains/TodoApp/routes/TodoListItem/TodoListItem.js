import { useCallback } from 'react'
import { ListItem } from '../../components'
import { useDispatch } from '../../context'

const TodoListItem = (props) => {
  const dispatch = useDispatch()
  const onChange = useCallback(() => {
    dispatch({ type: 'SET_DONE', payload: props.id })
  }, [props.id, dispatch])

  return <ListItem onChange={onChange} {...props} />
}

export default TodoListItem
