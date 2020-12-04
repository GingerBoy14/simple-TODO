import React, { useState } from 'react'
import { Menu, Dropdown, Typography } from 'antd'
import {
  DownOutlined,
  DeleteOutlined,
  ExclamationOutlined,
  PushpinOutlined
} from '@ant-design/icons'

const { Text } = Typography
const DropDown = (props) => {
  const { children } = props
  const [visibility, setVisibility] = useState()

  const DropDownItem = (
    <Menu>
      <Menu.Item icon={<PushpinOutlined />}>Pinned</Menu.Item>
      <Menu.Item icon={<ExclamationOutlined />}>Important</Menu.Item>
      <Menu.Item danger={true} icon={<DeleteOutlined />}>
        Delete
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <Dropdown
        overlay={DropDownItem}
        placement="bottomRight"
        trigger={['click']}>
        <DownOutlined />
      </Dropdown>
    </>
  )
}
export default DropDown
