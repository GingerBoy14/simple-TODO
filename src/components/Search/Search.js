import React from 'react'
import { useStoreContext } from 'context'
import { Input } from 'antd'

const Search = (props) => {
  const { dispatch } = useStoreContext()
  return (
    <Input
      placeholder="Type todos..."
      onChange={(e) => dispatch({ type: 'SEARCH', payload: e.target.value })}
      style={{
        width: '244px'
      }}
    />
  )
}

export default Search
