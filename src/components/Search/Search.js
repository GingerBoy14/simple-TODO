import React from 'react'
import { useStoreContext } from 'context'
import { Input } from 'antd'

const Search = () => {
  const { dispatch } = useStoreContext()
  const onChange = (e) => dispatch({ type: 'SEARCH', payload: e.target.value })
  return (
    <Input
      placeholder="🔍 Find yours todo"
      size="large"
      // style={{ flex: 1 }}
      onChange={onChange}
    />
  )
}

export default Search
