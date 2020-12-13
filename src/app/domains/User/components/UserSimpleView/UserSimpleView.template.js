import { Avatar, Row, Col, Grid, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { UsersDropdown } from '../UsersDropdown'
const { useBreakpoint } = Grid

const { Text } = Typography
const UserSimpleView = () => {
  const screens = useBreakpoint()
  return (
    <Row
      justify={screens.xs ? 'space-between' : 'end'}
      align="middle"
      gutter={[8, 0]}>
      <Col>
        {screens.md && <Text>Maxim Makarov</Text>}
        {screens.xs && (
          <Text strong>
            Hi, Maxim
            <br />
            Let's get to work
          </Text>
        )}
      </Col>
      <Col>
        <UsersDropdown>
          <Avatar
            size="large"
            icon={<UserOutlined />}
            style={{ cursor: 'pointer' }}
          />
        </UsersDropdown>
      </Col>
    </Row>
  )
}

export default UserSimpleView
