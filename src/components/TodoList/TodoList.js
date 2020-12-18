import { useEffect, useState } from 'react'
import { useStoreTasksContext, useStoreUserContext } from 'context'
import { List } from 'antd'
import { TodoListItem } from '../'
import { firebase } from 'config'

const TodoList = () => {
  const { dispatch, store } = useStoreTasksContext()
  const { userStore } = useStoreUserContext()
  const [filteredTasks, setFilteredTasks] = useState()

  const fetchData = async () => {
    const query = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', userStore.id)
    const dataSnaphots = await query.get()
    const data = dataSnaphots.docs.map((snapshot) => snapshot.data())
    dispatch({ type: 'SET_DATA_IN_STATE', payload: data })
  }

  useEffect(() => fetchData(), [])

  const filter = (tasks) => {
    let temp = tasks
    if (store.filter === 'active') {
      temp = tasks.filter(({ status }) => !status.done)
    }
    if (store.filter === 'done') {
      temp = tasks.filter(({ status }) => status.done)
    }
    if (store.query.length > 0) {
      temp = temp.filter((item) => {
        return item.text.toLowerCase().indexOf(store.query.toLowerCase()) > -1
      })
    }
    setFilteredTasks(
      temp.sort((a, b) => (a.lastPinDate > b.lastPinDate ? -1 : 1))
    )
  }

  useEffect(() => filter(store.tasks), [store])

  return (
    <List
      bordered
      dataSource={filteredTasks}
      renderItem={(item) => <TodoListItem {...item} />}
    />
  )
}

export default TodoList
