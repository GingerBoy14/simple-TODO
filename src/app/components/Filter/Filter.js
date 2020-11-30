import { useState } from 'react'
import { Button, ButtonGroup } from 'base-components'
import { useStoreContext } from 'app/context'

const buttons = [
  { text: 'All', active: 'primary', inert: 'outline' },
  { text: 'Active', active: 'primary', inert: 'outline' },
  { text: 'Done', active: 'primary', inert: 'outline' }
]

const Filter = () => {
  const [activeButton, setActiveButton] = useState(buttons[0].text)
  const { dispatch } = useStoreContext()
  return (
    <ButtonGroup>
      {buttons.map(({ text, active, inert }) => (
        <Button
          key={text}
          type={activeButton === text ? active : inert}
          onClick={() => {
            setActiveButton(text)
            dispatch({ type: 'CHANGE_FILTER', payload: text.toLowerCase() })
          }}>
          {text}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default Filter
