import React from 'react'
import { useStoreContext } from 'context/TodoListContext'
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

export default Search
