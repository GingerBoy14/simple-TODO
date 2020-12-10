import { Menu } from 'antd'
import { Dropdown } from 'antd'
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
        onClick={() =>
          dispatch({ type: 'PINNED_TODO', payload: { id, status } })
        }
        icon={status.pinned ? <DingtalkOutlined /> : <PushpinOutlined />}>
        {status.pinned ? 'Unpin' : 'Pinned'}
      </Menu.Item>
      <Menu.Item
        onClick={() =>
          dispatch({ type: 'IMPORTANT_TODO', payload: { id, status } })
        }
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
    <DropDown overlay={DropDownItem} placement="bottomRight" trigger="click">
      <DownOutlined />
    </DropDown>
  )
}
export default DropDown
