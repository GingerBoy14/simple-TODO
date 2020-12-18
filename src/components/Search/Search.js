import React from 'react'
import { useStoreTasksContext } from 'context'
import { Input } from 'antd'

const Search = () => {
  const { dispatch } = useStoreTasksContext()
  return (
    <Input
      placeholder="Type todos..."
      size="large"
      style={{ flex: 1 }}
      onChange={(e) => dispatch({ type: 'SEARCH', payload: e.target.value })}
    />
  )
}

export default Search
