import React from 'react'
import { Col, Drawer, Row, Grid } from 'antd'
import { UserEditableProfileName } from '../UserEditableProfileName'
import { UserEditableAvatar } from '../UserEditableAvatar'

const { useBreakpoint } = Grid

const ProfileView = (props) => {
  const { visible, setVisible } = props
  const screen = useBreakpoint()
  const onClose = () => {
    setVisible(false)
  }
  return (
    <Drawer
      width={screen.xs ? 268 : 380}
      visible={visible}
      onClose={onClose}
      closable={false}>
      <Row justify="center" gutter={[0, 16]}>
        <Col span={24}>
          <Row justify="center">
            <Col>
              <UserEditableAvatar />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <UserEditableProfileName />
        </Col>
      </Row>
    </Drawer>
  )
}

export default ProfileView
