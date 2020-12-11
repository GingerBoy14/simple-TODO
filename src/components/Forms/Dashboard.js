import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { Col, Row } from 'antd'

export default function Dashboard() {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError('')

    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Failed to log out')
    }
  }

  return (
    <>
      <Row justify="center">
        <Col xs={22} sm={22} md={14} lg={10} xl={9} xxl={8}>
          <Row gutter={[0, 8]}>
            <Col style={{ width: '100%' }}>
              <Card>
                <Card.Body>
                  <h2 className="text-center mb-4">Profile</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <strong>Email:</strong> {currentUser.email}
                  <Link
                    to="/update-profile"
                    className="btn btn-primary w-100 mt-3">
                    Update Profile
                  </Link>
                </Card.Body>
              </Card>
              <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>
                  Log Out
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}
