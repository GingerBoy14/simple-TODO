import { List, Typography, Checkbox, Tag } from 'antd'
import { useStoreContext } from '../../context'
import { DropDown } from '../DropDown'
import { ExclamationOutlined, PushpinOutlined } from '@ant-design/icons'

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
      <Tag color={status.pinned ? '#1890ff' : 'transparent'}>
        <PushpinOutlined />
      </Tag>
      <Tag color={status.important ? '#f50' : 'transparent'}>
        <ExclamationOutlined />
      </Tag>

      <DropDown {...props} />
    </Item>
  )
}

export default TodoListItem
