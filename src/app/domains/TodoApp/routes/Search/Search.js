import React, { useCallback } from 'react'
import { useDispatch } from '../../context'
import { SearchInput } from '../../components'

const Search = () => {
  const dispatch = useDispatch()
  const onChange = useCallback(
    (e) => dispatch({ type: 'SEARCH', payload: e.target.value }),
    [dispatch]
  )
  return <SearchInput onChange={onChange} />
}

export default Search
