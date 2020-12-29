import { memo, useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { useStoreContext } from 'app/domains/TodoApp/context'

const TaskCounter = () => {
  const { tasks } = useStoreContext()
  const [tasksCount, setTasksCount] = useState({})
  useEffect(() => {
    const done = tasks ? tasks.filter(({ status }) => status.done).length : 0
    const all = tasks ? tasks.length : 0

    setTasksCount({ done, all })
  }, [tasks])
  return <Layout done={tasksCount.done} all={tasksCount.all} />
}

const Layout = (props) => {
  const { done, all } = props
  return (
    <Typography variant="h5">
      {done} /{' '}
      <Typography variant="h5" component="span" color="textSecondary">
        {all}
      </Typography>{' '}
      - done
    </Typography>
  )
}
export default TaskCounter
