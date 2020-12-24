import React from 'react'
import { Dropdown as DropDown, Menu } from 'antd'
import { AuditOutlined, LogoutOutlined, KeyOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { auth } from 'service'
import { useUserDispatch } from 'app/domains/Session/context'
import type from 'app/domains/Session/constants'

const UsersDropdown = (props) => {
  const { openProfile, profileStatus, setModal } = props
  let history = useHistory()
  const dispatch = useUserDispatch()
  const menu = (
    <Menu>
      <Menu.Item
        icon={<AuditOutlined />}
        onClick={() => openProfile(!profileStatus)}>
        My profile
      </Menu.Item>

      <Menu.Item icon={<KeyOutlined />} onClick={() => setModal(true)}>
        Change password
      </Menu.Item>

      <Menu.Item
        danger
        icon={<LogoutOutlined />}
        onClick={async () => {
          dispatch({ type: type.USER_LOGOUT })
          await auth.logout()
          history.push('login')
        }}>
        Log out
      </Menu.Item>
    </Menu>
  )

  return (
    <DropDown overlay={menu} placement="bottomRight" trigger="click" arrow>
      {props.children}
    </DropDown>
  )
}
export default UsersDropdown
