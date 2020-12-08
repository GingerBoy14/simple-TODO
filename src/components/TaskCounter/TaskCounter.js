import { useEffect, useState } from 'react'
import { Typography } from 'antd'
import { useStoreContext } from 'context'

const { Text, Title } = Typography

const TaskCounter = () => {
  const { store } = useStoreContext()
  const [tasksCount, setTasksCount] = useState(0)
  useEffect(() => {
    setTasksCount({
      done: store.tasks
        ? store.tasks.filter(({ status }) => status.done).length
        : 0,
      all: store.tasks ? store.tasks.length : 0
    })
  }, [store])
  return (
    <Title level={4}>
      <Text strong>{tasksCount.done}</Text> /{' '}
      <Text type="secondary">{tasksCount.all}</Text> - done
    </Title>
  )
}

export default TaskCounter
