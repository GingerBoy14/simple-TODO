import React, { useCallback } from 'react'
import { ButtonGroup } from '../../components'
import { useDispatch, useStoreContext } from '../../context'

const buttons = [
  { text: 'All', active: 'primary' },
  { text: 'Todo', active: 'primary' },
  { text: 'Done', active: 'primary' }
]
const Filter = () => {
  const dispatch = useDispatch()
  const { filter } = useStoreContext()
  const onClick = useCallback(
    (text, setActive) => {
      setActive(text)
      dispatch({ type: 'CHANGE_FILTER', payload: text.toLowerCase() })
    },
    [dispatch]
  )
  return <ButtonGroup onClick={onClick} buttons={buttons} filterName={filter} />
}

export default React.memo(Filter)
