import { memo } from 'react'
import { useStoreContext } from 'app/domains/TodoApp/context'
import { Input } from 'antd'

const Search = () => {
  const { dispatch } = useStoreContext()
  const onChange = (e) => dispatch({ type: 'SEARCH', payload: e.target.value })

  return (
    <Input
      bordered={false}
      placeholder="Search your todo..."
      size="large"
      onChange={onChange}
    />
  )
}

export default memo(Search)
