import { memo, useEffect, useState } from 'react'
import { Typography } from 'antd'
import { useStoreContext } from 'app/domains/TodoApp/context'

const { Text, Title } = Typography

const TaskCounter = () => {
  const { tasks } = useStoreContext()
  const [tasksCount, setTasksCount] = useState(0)
  useEffect(() => {
    const done = tasks ? tasks.filter(({ status }) => status.done).length : 0
    const all = tasks ? tasks.length : 0

    setTasksCount({ done, all })
  }, [tasks])

  return <Layout done={tasksCount.done} all={tasksCount.all} />
}

const Layout = memo((props) => {
  const { done, all } = props
  return (
    <Title level={4}>
      <Text strong>{done}</Text> / <Text type="secondary">{all}</Text> - done
    </Title>
  )
})
export default memo(TaskCounter)
