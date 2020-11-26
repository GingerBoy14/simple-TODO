import { useState } from 'react'
import { Button, ButtonGroup } from 'base-components'

const buttons = [
  { text: 'All', active: 'primary', inert: 'outline' },
  { text: 'Active', active: 'primary', inert: 'outline' },
  { text: 'Done', active: 'primary', inert: 'outline' }
]

const Filter = () => {
  const [activeButton, setActiveButton] = useState(buttons[0].text)

  return (
    <ButtonGroup>
      {buttons.map(({ text, active, inert }) => (
        <Button
          key={text}
          type={activeButton === text ? active : inert}
          onClick={() => setActiveButton(text)}>
          {text}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default Filter
