import { Menu, Dropdown } from 'antd'
import {
  DownOutlined,
  DeleteOutlined,
  ExclamationOutlined,
  PushpinOutlined
} from '@ant-design/icons'
import { useStoreTasksContext } from 'context'

const DropDown = (props) => {
  const { id } = props
  const { dispatch } = useStoreTasksContext()

  const DropDownItem = (
    <Menu>
      <Menu.Item
        onClick={() => dispatch({ type: 'PINNED_TODO', payload: id })}
        icon={<PushpinOutlined />}>
        Pinned
      </Menu.Item>
      <Menu.Item
        onClick={() => dispatch({ type: 'IMPORTANT_TODO', payload: id })}
        icon={<ExclamationOutlined />}>
        Important
      </Menu.Item>
      <Menu.Item
        onClick={() => dispatch({ type: 'DELETE_TODO', payload: id })}
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
