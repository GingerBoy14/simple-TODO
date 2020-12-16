import { Col, Row, List, Typography, Checkbox } from 'antd'
import { DropDown } from '../DropDown'
import { useTasksContext } from '../../context'

const { Item } = List
const { Text } = Typography
const TodoListItem = ({ item, idCurrentUser }) => {
  const { dispatch } = useTasksContext()

  const onChangeSetDone = (id) => {
    dispatch({
      type: 'SET_DONE',
      payload: { taskId: item.id, idCurrentUser: idCurrentUser }
    })
  }

  return (
    <Item
      style={{
        backgroundColor: item.status.pinned && '#1890ff1f'
      }}>
      <Row wrap={false} gutter={[16, 0]} align="middle">
        <Col>
          <Checkbox
            checked={item.status.done}
            onChange={() => onChangeSetDone(item.id)}
          />
        </Col>
        <Col>
          <Text strong={item.status.important}>{item.text}</Text>
        </Col>
      </Row>
      <DropDown
        status={item.status}
        taskId={item.id}
        dispatch={dispatch}
        idCurrentUser={idCurrentUser}
      />
    </Item>
  )
}
export default TodoListItem
