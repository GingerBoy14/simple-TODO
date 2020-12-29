import React, { useState } from 'react'
import { Menu, MenuItem, ListItemIcon } from '@material-ui/core'
import { AuditOutlined, LogoutOutlined, KeyOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { auth } from 'service'
import { useUserDispatch } from 'app/domains/Session/context'
import type from 'app/domains/Session/constants'

const UsersDropdown = (props) => {
  const { openProfile, setModal, children } = props
  const [anchorEl, setAnchorEl] = useState(null)
  let history = useHistory()
  const dispatch = useUserDispatch()
  const handleClick = (callback) => {
    setAnchorEl(null)
    if (callback) {
      callback()
    }
  }
  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const Dropdown = () => (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => handleClick()}>
      <MenuItem
        onClick={() => handleClick(() => openProfile((status) => !status))}>
        <ListItemIcon>
          <AuditOutlined />
        </ListItemIcon>
        My profile
      </MenuItem>

      <MenuItem onClick={() => handleClick(() => setModal(true))}>
        <ListItemIcon>
          <KeyOutlined />
        </ListItemIcon>
        Change password
      </MenuItem>

      <MenuItem
        danger
        onClick={() =>
          handleClick(async () => {
            dispatch({ type: type.USER_LOGOUT })
            await auth.logout()
            history.push('login')
          })
        }>
        <ListItemIcon>
          <LogoutOutlined />
        </ListItemIcon>
        Log out
      </MenuItem>
    </Menu>
  )

  return (
    <>
      <div onClick={handleOpen}>{children}</div>
      <Dropdown />
    </>
  )
}
export default UsersDropdown
