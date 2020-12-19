import { List as AntList } from 'antd'
import SimpleBar from 'simplebar-react'
import { Global, css } from '@emotion/react'
import 'simplebar/dist/simplebar.min.css'
import { TodoListItem } from '../../routes/TodoListItem'

const scrollStyle = css`
  .simplebar-track {
    pointer-events: inherit;
    width: 0.5rem !important;
  }
  .simplebar-scrollbar:before {
    opacity: 1 !important;
    border-radius: 0;
    background-color: #1890ff;
    width: 0.5rem;
  }
  .simplebar-scrollbar.simplebar-visible:before {
    cursor: pointer;
    transition: background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .simplebar-scrollbar.simplebar-hover:before {
    background-color: #40a9ff;
  }
`

const List = (props) => {
  const { tasks, height } = props
  return (
    <>
      {tasks && (
        <SimpleBar autoHide={false} style={{ maxHeight: height }}>
          <Global styles={scrollStyle} />
          <AntList
            size="large"
            dataSource={tasks}
            renderItem={(item) => <TodoListItem {...item} />}
          />
        </SimpleBar>
      )}
    </>
  )
}

export default List
