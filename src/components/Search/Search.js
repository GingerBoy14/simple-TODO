import React from 'react'
import { Input } from 'antd'
import { useStoreContext } from '../../context'

const Search = () => {
  const { dispatch } = useStoreContext()
  const onChangeSearch = (e) => {
    dispatch({ type: 'SEARCH', payload: e.target.value })
  }

  return (
    <Input
      bordered={false}
      placeholder="Type todos..."
      size="large"
      style={{ flex: 1 }}
      onChange={(e) => onChangeSearch(e)}
    />
  )
}

export default Search
