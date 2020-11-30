import { useEffect, useState } from 'react'
import { Box, Typography } from 'base-components'
import { useStoreContext } from 'app/context'

const { Title } = Typography

const Header = () => {
  const { store } = useStoreContext()
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    setCounter(store.tasks.filter(({ status }) => status.done).length)
  }, [store])
  return (
    <Box width={1} alignItems="center" style={{ marginTop: '16px' }}>
      <Title>Todo List</Title>
      <Box width={1} alignItems="flex-end">
        <Title level={4} color="secondary">
          {store.tasks.length - counter} more to do, {counter} done
        </Title>
      </Box>
    </Box>
  )
}

export default Header
