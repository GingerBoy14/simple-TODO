import { useState, useEffect, useRef } from 'react'
import { List } from 'antd'
import { useStoreContext } from 'context'
import { TodoListItem } from '../TodoListItem'
import { Row, Col } from 'antd'
import './style.css'

const TodoList = () => {
  const { store } = useStoreContext()
  const [filteredTasks, setFilteredTasks] = useState(store.tasks)
  let temp
  const filter = (tasks) => {
    temp = tasks
    if (store.filter === 'active') {
      temp = tasks.filter(({ status }) => !status.done)
    } else if (store.filter === 'done') {
      temp = tasks.filter(({ status }) => status.done)
    }
    if (store.query.length > 0) {
      temp = temp.filter((item) => {
        return item.text.toLowerCase().indexOf(store.query.toLowerCase()) > -1
      })
    }
    setFilteredTasks(temp)
  }
  useEffect(() => filter(store.tasks), [store])

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
              return <TodoListItem item={item} />
            }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default TodoList
