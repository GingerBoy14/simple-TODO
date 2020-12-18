import { ExclamationCircleOutlined, PushpinOutlined } from '@ant-design/icons'
import { List, Space, Typography, Checkbox, Tag } from 'antd'
import { DropDown } from '../'
import { useStoreTasksContext } from 'context'

const { Item } = List
const { Text } = Typography

const TodoListItem = (props) => {
  const { id, text, status } = props
  const { dispatch } = useStoreTasksContext()
  return (
    <Item>
      <Space style={{ width: '100%' }}>
        <Checkbox
          checked={status.done}
          onClick={() => dispatch({ type: 'SET_DONE', payload: id })}
        />
        <Text ellipsis={true}>{text}</Text>
      </Space>
      {status.important ? (
        <Tag color="orange">
          <ExclamationCircleOutlined style={{ fontSize: '10px' }} />
        </Tag>
      ) : null}
      {status.pinned ? (
        <Tag color="blue">
          <PushpinOutlined style={{ fontSize: '10px' }} />
        </Tag>
      ) : null}
      <DropDown id={id} />
    </Item>
  )
}

export default TodoListItem
