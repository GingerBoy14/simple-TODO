import { Menu, Dropdown } from 'antd'
import {
  DownOutlined,
  DeleteOutlined,
  ExclamationOutlined,
  PushpinOutlined,
  DingtalkOutlined
} from '@ant-design/icons'
import { useStoreContext } from 'context'

const DropDown = (props) => {
  const { id, status } = props
  const { dispatch } = useStoreContext()

  const DropDownItem = (
    <Menu>
      <Menu.Item
        onClick={() => dispatch({ type: 'PINNED_TODO', payload: id })}
        icon={status.pinned ? <DingtalkOutlined /> : <PushpinOutlined />}>
        {status.pinned ? 'Unpin' : 'Pinned'}
      </Menu.Item>
      <Menu.Item
        onClick={() => dispatch({ type: 'IMPORTANT_TODO', payload: id })}
        icon={<ExclamationOutlined />}>
        {status.important ? 'Casual' : 'Important'}
      </Menu.Item>
      <Menu.Item
        onClick={() =>
          dispatch({ type: 'DELETE_TODO', payload: { id, status } })
        }
        danger={true}
        icon={<DeleteOutlined />}>
        Delete
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={DropDownItem} placement="bottomRight" trigger="click">
      <DownOutlined />
    </Dropdown>
  )
}
export default DropDown