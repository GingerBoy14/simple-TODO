import { useState, memo } from 'react'
import { Button } from 'antd'

const ButtonGroup = (props) => {
  const { buttons, onClick, filterName } = props
  const [activeButton, setActiveButton] = useState(filterName)
  return (
    <>
      {buttons.map(({ text, active }) => (
        <Button
          key={text}
          type={activeButton === text.toLowerCase() ? active : false}
          size="large"
          onClick={() => onClick(text.toLowerCase(), setActiveButton)}>
          {text}
        </Button>
      ))}
    </>
  )
}

export default memo(ButtonGroup)
