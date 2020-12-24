import { Avatar, Row, Col, Grid, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { UsersDropdown } from '../UsersDropdown'
import { useUserContext } from 'app/domains/Session/context'

const { useBreakpoint } = Grid
const { Text } = Typography

const UserSimpleView = (props) => {
  const { openProfile, profileStatus } = props
  const screens = useBreakpoint()
  const { userProfile } = useUserContext()
  return (
    <Row
      justify={screens.xs ? 'space-between' : 'end'}
      align="middle"
      gutter={[8, 0]}
      wrap={false}>
      <Col>
        {screens.md && <Text>{userProfile.name}</Text>}
        {/*TODO fix layout*/}
        {screens.xs && (
          <Text strong>
            {/*{userProfile.name.split(' ')}*/}
            Hi, {userProfile.name.split(' ')[0]}
            <br />
            Let's get to work
          </Text>
        )}
      </Col>
      <Col>
        <UsersDropdown openProfile={openProfile} profileStatus={profileStatus}>
          <Avatar
            size="large"
            src={userProfile.avatar}
            icon={<UserOutlined />}
            style={{ cursor: 'pointer' }}
          />
        </UsersDropdown>
      </Col>
    </Row>
  )
}

export default UserSimpleView
