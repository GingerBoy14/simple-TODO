import { List, Typography, Checkbox } from 'antd'
import { useStoreContext } from '../../context'
import { DropDown } from '../DropDown'

const { Item } = List
const { Text } = Typography

const TodoListItem = (props) => {
  const { id, text, status } = props
  const { dispatch } = useStoreContext()
  return (
    <Item>
      <Checkbox
        checked={status.done}
        style={{
          marginRight: '16px'
        }}
        onClick={() => dispatch({ type: 'SET_DONE', payload: id })}
      />
      <Text
        ellipsis={true}
        style={{
          flex: 1,
          whiteSpace: 'normal',
          marginRight: '16px'
        }}>
        {text}
      </Text>

      <DropDown {...props} />
    </Item>
  )
}

export default TodoListItem
