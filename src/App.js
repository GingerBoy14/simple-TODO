import 'antd/dist/antd.css'
import { Row, Col, Space } from 'antd'
import { useState } from 'react'
import { FetchData } from './hook'
import { MainForm } from './components'
import { useStoreContext } from 'context'

const App = () => {
  const [loading, setLoading] = useState(true)
  const { store, dispatch } = useStoreContext()
  FetchData({ loading, setLoading })

  return (
    <Row justify="center">
      <Col xs={22} sm={22} md={14} lg={10} xl={7} xxl={6}>
        <MainForm />
      </Col>
    </Row>
  )
}

export default App
