import { List, Typography } from 'antd'
import { useStoreContext } from '../../context'
import { LeftOutlined } from '@ant-design/icons'

const { Item } = List
const data = ['First task.', 'Second task.', 'Third task.', 'Fourth task.']

const TodoListItem = (props) => {
  const { id, text, status } = props
  const { dispatch } = useStoreContext()

  return (
    <List.Item
      style={{
        listStyle: 'none',
        width: '100%',
        display: 'flex',
        border: '1px solid rgba(108, 117, 125, 0.6)',
        padding: '0.75rem 1rem',
        borderRadius: '0.5rem',
        justifyContent: 'space-between'
      }}
      // important={status.important}
      // done={status.done}
      onClick={() => dispatch({ type: 'SET_DONE', payload: id })}>
      <Typography.Text>{data[2]}</Typography.Text>
      <LeftOutlined
        // id={id}
        // pinned={status.pinned}
        onClick={() => console.log('Clicked')}
      />
    </List.Item>
  )
}

export default TodoListItem
