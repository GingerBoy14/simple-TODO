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
import { useDispatch } from 'app/domains/TodoApp/context'
import { changeStatus, deleteTask, pinToTop } from '../../actions'

const Dropdown = (props) => {
  const { todoId, status } = props
  const dispatch = useDispatch()
  const menu = (
    <Menu>
      <Menu.Item
        icon={status.pinned ? <PushpinOutlined /> : <PushpinFilled />}
        onClick={() => dispatch(pinToTop(todoId))}>
        {status.pinned ? 'Unpin' : 'Pin to top'}
      </Menu.Item>
      <Menu.Item
        icon={status.important ? <FireOutlined /> : <FireFilled />}
        onClick={() => dispatch(changeStatus('important', todoId))}>
        Important
      </Menu.Item>
      <Menu.Item
        danger
        icon={<DeleteOutlined />}
        onClick={() => dispatch(deleteTask(todoId))}>
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
