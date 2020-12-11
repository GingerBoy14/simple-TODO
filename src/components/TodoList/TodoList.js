import { useState, useEffect, useRef } from 'react'
import { List } from 'antd'
import { TodoListItem } from '../TodoListItem'
import { Row, Col } from 'antd'
import { filter } from '../../utilities'
import './style.css'

const TodoList = ({ store, dispatch }) => {
  const [filteredTasks, setFilteredTasks] = useState(store.tasks)

  useEffect(() => {
    filter(store, setFilteredTasks)
  }, [store])

  return (
    <div style={{ maxHeight: '400px', overflow: 'auto' }} className="style-1">
      <Row gutter={[0, 0]}>
        <Col span={24}>
          <List
            size="large"
            bordered={false}
            style={{ maxWidth: '100%', alignItems: 'center' }}
            dataSource={filteredTasks}
            renderItem={(item) => {
              return <TodoListItem item={item} dispatch={dispatch} />
            }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default TodoList
