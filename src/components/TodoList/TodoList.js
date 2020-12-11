import { List } from 'antd'
import { useStoreContext } from 'context'
import { TodoListItem } from '../TodoListItem'
import { useEffect, useState } from 'react'
import firebase from 'config'

const db = firebase.firestore()
const ref = db.collection('tasks')

const TodoList = () => {
  const { store, dispatch } = useStoreContext()
  const [firebaseTasks, setFirebaseTasks] = useState([])
  // const [filteredTasks, setFilteredTasks] = useState()
  // useEffect(() => filter(store.tasks), [store])
  useEffect(() => {
    const unsubscribe = ref.orderBy('creationDate').onSnapshot((snapshot) => {
      dispatch({
        type: 'GET_TASKS',
        payload: snapshot.docs.map((doc) => ({
          ...doc.data()
        }))
      })
    })
    return () => unsubscribe()
  }, [])
  const filter = (tasks) => {
    if (!store) {
      console.log('null')
      return tasks
    }
    let temp
    if (store.filter === 'all') {
      temp = tasks
    }
    if (store.filter === 'active') {
      temp = tasks.filter(({ status }) => !status.done)
      console.log('status.active')
    }
    if (store.filter === 'done') {
      temp = tasks.filter(({ status }) => status.done)
    }
    if (store.query) {
      temp = temp.filter((item) => {
        return item.text.toLowerCase().indexOf(store.query.toLowerCase()) > -1
      })
    }
    // firebaseTasks(temp)
    return temp
  }
  useEffect(() => {
    setFirebaseTasks(store.tasks)
  }, [store.tasks])

  return (
    <List
      bordered
      style={
        firebaseTasks.length > 5
          ? { overflowY: 'scroll', maxHeight: '700px' }
          : {}
      }
      dataSource={filter(
        firebaseTasks.sort((a, b) => b.status.pinned - a.status.pinned)
      )}
      renderItem={(item) => <TodoListItem {...item} />}
    />
  )
}

export default TodoList
