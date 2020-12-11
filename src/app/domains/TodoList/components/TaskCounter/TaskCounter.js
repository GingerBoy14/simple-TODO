import { useEffect, useState } from 'react'
import { Typography } from 'antd'
import { useStoreContext } from 'app/domains/TodoList/context'

const { Text, Title } = Typography

const TaskCounter = () => {
  const { store } = useStoreContext()
  const [tasksCount, setTasksCount] = useState(0)
  useEffect(() => {
    const done = store.tasks
      ? store.tasks.filter(({ status }) => status.done).length
      : 0
    const all = store.tasks ? store.tasks.length : 0

    setTasksCount({ done, all })
  }, [store])
  return (
    <Title level={4}>
      <Text strong>{tasksCount.done}</Text> /
      <Text type="secondary"> {tasksCount.all}</Text> - done
    </Title>
  )
}

export default TaskCounter
