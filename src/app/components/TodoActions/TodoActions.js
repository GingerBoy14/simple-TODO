import { useState, useEffect, useRef } from 'react'
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

const items = [
  { text: 'Important', icon: faExclamation, type: 'default' },
  {
    text: 'Pin to top',
    icon: faThumbtack,
    type: 'default',
    transform: { rotate: -42 }
  },
  { text: 'Delete', icon: faTrash, type: 'danger' }
]

const StyledArrow = styled.div`
  ${color}
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  cursor: pointer;
`

const TodoActions = () => {
  const [show, setShow] = useState(false)

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

      {show && <DropDown items={items} setShow={setShow} show={show} />}
    </Box>
  )
}

export default TodoActions
