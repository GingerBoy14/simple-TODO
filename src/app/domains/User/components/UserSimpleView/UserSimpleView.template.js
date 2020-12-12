import { Avatar, Row, Col, Grid, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
const { useBreakpoint } = Grid

const { Title, Text } = Typography
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
          <Title level={5}>
            Hi, Maxim
            <br />
            Let's get to work
          </Title>
        )}
      </Col>
      <Col>
        <Avatar size="large" icon={<UserOutlined />} />
      </Col>
    </Row>
  )
}

export default UserSimpleView
