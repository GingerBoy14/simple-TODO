import { List, Typography, Checkbox, Space } from 'antd'
import { useStoreContext } from '../../context'
import { LeftOutlined } from '@ant-design/icons'

const { Item } = List
const { Text } = Typography

const TodoListItem = (props) => {
  const { id, text, status } = props
  const { dispatch } = useStoreContext()

  return (
    <Item
      style={{
        listStyle: 'none',
        width: '100%',
        display: 'flex',
        border: '1px solid rgba(108, 117, 125, 0.6)',
        padding: '0.75rem 1rem',
        borderRadius: '0.5rem',
        justifyContent: 'space-between',
        marginBottom: '5px'
      }}>
      <Space>
        <Checkbox checked={status.done} />
        <Text onClick={() => dispatch({ type: 'SET_DONE', payload: id })}>
          {text}
        </Text>
      </Space>
      <LeftOutlined onClick={() => console.log('Clicked')} />
    </Item>
  )
}

export default TodoListItem
