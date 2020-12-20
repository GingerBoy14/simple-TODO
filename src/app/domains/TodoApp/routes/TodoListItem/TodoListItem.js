import { useCallback } from 'react'
import { ListItem } from '../../components'
import { useDispatch } from '../../context'
import { changeStatus } from '../../actions'

const TodoListItem = (props) => {
  const { id } = props
  const dispatch = useDispatch()
  const onChange = useCallback(() => {
    dispatch(changeStatus('done', id))
  }, [id, dispatch])

  return <ListItem onChange={onChange} {...props} />
}

export default TodoListItem
