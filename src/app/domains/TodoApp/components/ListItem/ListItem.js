import { Checkbox, List, Tag, Typography } from 'antd'
import { FireFilled, PushpinFilled } from '@ant-design/icons'
import { Dropdown } from '../Dropdown'

const { Text } = Typography

const ListItem = (props) => {
  const { positionId, text, status, onChange } = props
  return (
    <List.Item
      actions={[<Dropdown todoId={positionId} status={status} />]}
      style={{ minWidth: 0 }}>
      <Checkbox
        checked={status.done}
        onChange={onChange}
        style={{ marginRight: '16px' }}
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

export default ListItem
