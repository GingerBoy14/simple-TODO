import { List, Space, Typography, Checkbox } from 'antd'
import { useStoreContext } from '../../context'
import { DropDown } from '../DropDown'

const { Item } = List
const { Text } = Typography

const TodoListItem = (props) => {
  const { id, text, status } = props
  const { dispatch } = useStoreContext()

  return (
    <Item>
      <Space style={{ width: '100%' }}>
        <Checkbox
          checked={status.done}
          onClick={() => dispatch({ type: 'SET_DONE', payload: id })}
        />
        <Text mark={status.important} ellipsis={true}>
          {text}
        </Text>
      </Space>
      <DropDown id={id} />
    </Item>
  )
}

export default TodoListItem
