import { Row, Col, Dropdown, Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { Typography } from 'antd'
import { useStoreContext } from 'context'
import { Filter } from '../Filter'
import { Link } from 'react-router-dom'
import { auth } from '../../config'
import { firestore } from '../../config/firebaseConfig'

const { Title } = Typography
function handleMenuClick(e) {
  console.log('click', e)
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Link to="/">Dashboard</Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/change-password">Change password</Link>
    </Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
)
const Header = () => {
  const { store } = useStoreContext()
  const [counter, setCounter] = useState(0)
  const [userData, setUserData] = useState({ name: 'none' })
  useEffect(() => {
    setCounter(store.tasks.filter(({ status }) => status.done).length)
    const getUserInfo = async () => {
      const userData = await firestore
        .collection('users')
        .doc(auth.currentUser.uid)
        .get()
      setUserData({ name: userData.data().name })
    }
    getUserInfo()
  }, [store])
  return (
    <Row>
      <Col flex={1}>
        <Row justify="space-between">
          <Col flex={1}>
            <Title>
              <Link to="/app">Todo List</Link>
            </Title>
          </Col>
          <Col>
            <Dropdown.Button overlay={menu}>{userData.name}</Dropdown.Button>
          </Col>
        </Row>
        <Row>
          <Col flex={1}>
            <Title level={5}>
              {store.tasks.length - counter} more to do, {counter} done
            </Title>
          </Col>
          <Col>
            <Filter />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Header
