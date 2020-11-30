import { useState, useEffect } from 'react'
import { TodoListItem } from '../TodoListItem'
import { Box } from 'base-components'
import { useStoreContext } from 'app/context'
import empty from './empty.svg'

const TodoList = (props) => {
  const { store } = useStoreContext()
  const [filteredTasks, setFilteredTasks] = useState(store.tasks)

  //todo refactor
  const filter = (tasks) => {
    let temp
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
    <Box direction="vertical" space={4}>
      <ul>
        {store.tasks.length === 0 && (
          <Box justifyContent="center" flexDirection="row">
            <img src={empty} alt="" style={{ width: '50%' }} />
          </Box>
        )}
        {store.tasks &&
          filteredTasks.map((item) => <TodoListItem {...item} key={item.id} />)}
      </ul>
    </Box>
  )
}

export default TodoList
