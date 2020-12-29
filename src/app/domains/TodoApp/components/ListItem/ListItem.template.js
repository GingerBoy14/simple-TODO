import { List, Tag, Typography } from 'antd'
import Checkbox from '@material-ui/core/Checkbox'

import { FireFilled, PushpinFilled } from '@ant-design/icons'
import { Dropdown } from '../Dropdown'

const { Text } = Typography

const ListItem = (props) => {
  const { id, text, status, onChange } = props
  return (
    <List.Item
      actions={[<Dropdown todoId={id} status={status} />]}
      style={{ minWidth: 0 }}>
      <Checkbox checked={status.done} onChange={onChange} color="primary" />
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
