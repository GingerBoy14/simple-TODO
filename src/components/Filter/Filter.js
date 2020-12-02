import { useState } from 'react'
import { useStoreContext } from 'Context'
import { Button } from 'antd'

const buttons = [
  { text: 'All', active: 'primary' },
  { text: 'Active', active: 'primary' },
  { text: 'Done', active: 'primary' }
]

const Filter = () => {
  const [activeButton, setActiveButton] = useState(buttons[0].text)
  const { dispatch } = useStoreContext()
  return (
    <>
      {buttons.map(({ text, active, inert }) => (
        <Button
          key={text}
          type={activeButton === text ? active : false}
          onClick={() => {
            setActiveButton(text)
            dispatch({ type: 'CHANGE_FILTER', payload: text.toLowerCase() })
          }}>
          {text}
        </Button>
      ))}
    </>
  )
}

export default Filter
