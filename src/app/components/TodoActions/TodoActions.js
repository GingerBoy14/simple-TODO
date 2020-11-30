import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faThumbtack,
  faTrash,
  faExclamation,
  faAngleLeft
} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { color } from 'styled-system'

import { Box, DropDown } from 'base-components'

const StyledArrow = styled.div`
  ${color}
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  cursor: pointer;
`

const TodoActions = (props) => {
  const { todoId, pinned } = props
  const [show, setShow] = useState(false)
  const items = [
    {
      text: 'Important',
      icon: faExclamation,
      type: 'default',
      action: (payload) => ({ type: 'SET_IMPORTANT', payload })
    },
    {
      text: pinned ? 'Unpin' : 'Pin to top',
      icon: faThumbtack,
      type: 'default',
      transform: pinned ? { rotate: 135 } : { rotate: -42 },
      action: (payload) => ({ type: 'SET_PIN_TO_TOP', payload })
    },
    {
      text: 'Delete',
      icon: faTrash,
      type: 'danger',
      action: (payload) => ({ type: 'DELETE_TODO', payload })
    }
  ]
  return (
    <Box style={{ position: 'relative' }}>
      <StyledArrow color={show ? 'primary' : 'black'}>
        <FontAwesomeIcon
          icon={faAngleLeft}
          onClick={() => setShow(!show)}
          rotation={show ? 270 : 0}
          size="2x"
        />
      </StyledArrow>

      {show && <DropDown items={items} setShow={setShow} todoId={todoId} />}
    </Box>
  )
}

export default TodoActions
