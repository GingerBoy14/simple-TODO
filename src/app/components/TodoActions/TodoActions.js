import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faThumbtack,
  faTrash,
  faExclamation,
  faAngleLeft
} from '@fortawesome/free-solid-svg-icons'

import { Box, DropDown } from 'base-components'

const items = [
  { text: 'Important', icon: faExclamation, type: 'default' },
  {
    text: 'Pin to top',
    icon: faThumbtack,
    type: 'default',
    transform: { rotate: 42 }
  },
  { text: 'Delete', icon: faTrash, type: 'danger' }
]

const TodoActions = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Box>
        <FontAwesomeIcon
          icon={faAngleLeft}
          onClick={() => setShow(!show)}
          rotation={show ? 270 : 0}
        />
      </Box>
      {show && <DropDown items={items} />}
    </>
  )
}

export default TodoActions
