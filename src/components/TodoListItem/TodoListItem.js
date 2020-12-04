import { Checkbox, List, Tag, Typography } from 'antd'
import { FireFilled, PushpinFilled } from '@ant-design/icons'
import { Dropdown } from '../Dropdown'
import { useStoreContext } from 'context'

const { Text } = Typography

const TodoListItem = (props) => {
  const { id, text, status } = props
  const { dispatch } = useStoreContext()
  return (
    <List.Item
      actions={[<Dropdown todoId={id} status={status} />]}
      style={{
        minWidth: '0'
      }}>
      <Checkbox
        checked={status.done}
        style={{ marginRight: '16px' }}
        onChange={() => dispatch({ type: 'SET_DONE', payload: id })}
      />
      {status.pinned && (
        <Tag color="processing">
          <PushpinFilled />
        </Tag>
      )}
      {status.important && (
        <Tag color="magenta">
          <FireFilled />
        </Tag>
      )}

      <Text
        ellipsis
        style={{ flex: 1, whiteSpace: 'normal', marginRight: '16px' }}>
        {text}
      </Text>
    </List.Item>
  )
}

export default TodoListItem
