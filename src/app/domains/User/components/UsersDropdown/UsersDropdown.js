import React from 'react'
import { Dropdown as DropDown, Menu } from 'antd'
import { AuditOutlined, LogoutOutlined, KeyOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

const UsersDropdown = (props) => {
  let history = useHistory()
  const menu = (
    <Menu>
      <Menu.Item
        icon={<AuditOutlined />}
        onClick={() => console.log('profile')}>
        My profile
      </Menu.Item>
      <Menu.Item
        icon={<KeyOutlined />}
        onClick={() => console.log('Reset password')}>
        Change password
      </Menu.Item>
      <Menu.Item
        danger
        icon={<LogoutOutlined />}
        onClick={() => history.push('login')}>
        Log out
      </Menu.Item>
    </Menu>
  )

  return (
    <DropDown overlay={menu} placement="bottomRight" trigger="click">
      {props.children}
    </DropDown>
  )
}
export default UsersDropdown
