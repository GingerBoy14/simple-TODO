import { useCallback } from 'react'
import { ButtonGroup } from '../../components'
import { useDispatch, useStoreContext } from '../../context'

const buttons = [{ text: 'All' }, { text: 'Todo' }, { text: 'Done' }]
const Filter = () => {
  const dispatch = useDispatch()
  const { filter } = useStoreContext()
  const onClick = useCallback(
    (text, setActive) => {
      setActive(text)
      dispatch({ type: 'CHANGE_FILTER', payload: text })
    },
    [dispatch]
  )
  return <ButtonGroup onClick={onClick} buttons={buttons} filterName={filter} />
}

export default Filter
