import React from 'react'
import { Input } from 'antd'

const Search = ({ dispatch }) => {
  return (
    <Input
      bordered={false}
      placeholder="Type todos..."
      size="large"
      style={{ flex: 1 }}
      onChange={(e) => {
        dispatch({ type: 'SEARCH', payload: e.target.value })
      }}
    />
  )
}

export default Search
