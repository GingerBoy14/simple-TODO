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
      <Menu.Item icon={<PushpinOutlined />}>
        <Text>Pinned</Text>
      </Menu.Item>
      <Menu.Item icon={<ExclamationOutlined />}>
        <Text>Important</Text>
      </Menu.Item>
      <Menu.Item icon={<DeleteOutlined />}>
        <Text type="danger">Delete</Text>
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <Dropdown overlay={DropDownItem} placement="bottomRight">
        <DownOutlined />
      </Dropdown>
    </>
  )
}
export default DropDown
