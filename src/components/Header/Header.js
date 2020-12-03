import { useEffect, useState } from 'react'
import { Typography } from 'antd'
import { useStoreContext } from 'context'

const { Title } = Typography

const Header = () => {
  const { store } = useStoreContext()
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    setCounter(store.tasks.filter(({ status }) => status.done).length)
  }, [store])
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Title>Todo List</Title>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
        <Title level={4}>
          {store.tasks.length - counter} more to do, {counter} done
        </Title>
      </div>
    </div>
  )
}

export default Header
