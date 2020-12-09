import React from 'react'
import { useStoreContext } from 'context'
import { Input } from 'antd'

const Search = (props) => {
  const { dispatch } = useStoreContext()
  return (
    <Input
      bordered={false}
      placeholder="Type todos..."
      size="large"
      style={{ flex: 1 }}
      onChange={(e) => {
        dispatch({ type: 'SEARCH', payload: e.target.value })
        console.log(e.target.value)
      }}
    />
  )
}

export default Search
