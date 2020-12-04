import React from 'react'
import { Dropdown as DropDown, Menu } from 'antd'
import {
  DownOutlined,
  DeleteOutlined,
  FireOutlined,
  FireFilled,
  PushpinOutlined,
  PushpinFilled
} from '@ant-design/icons'
import { useStoreContext } from 'context'

const Dropdown = (props) => {
  const { todoId, status } = props
  const { dispatch } = useStoreContext()
  const menu = (
    <Menu>
      <Menu.Item
        icon={status.pinned ? <PushpinOutlined /> : <PushpinFilled />}
        onClick={() => dispatch({ type: 'SET_PIN_TO_TOP', payload: todoId })}>
        {status.pinned ? 'Unpin' : 'Pin to top'}
      </Menu.Item>
      <Menu.Item
        icon={status.important ? <FireOutlined /> : <FireFilled />}
        onClick={() => dispatch({ type: 'SET_IMPORTANT', payload: todoId })}>
        Important
      </Menu.Item>
      <Menu.Item
        danger
        icon={<DeleteOutlined />}
        onClick={() => dispatch({ type: 'DELETE_TODO', payload: todoId })}>
        Delete
      </Menu.Item>
    </Menu>
  )

  return (
    <DropDown overlay={menu} placement="bottomRight" trigger="click">
      <DownOutlined />
    </DropDown>
  )
}
export default Dropdown
