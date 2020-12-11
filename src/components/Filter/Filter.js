import { useState } from 'react'
import { useStoreContext } from 'context/TodoListContext'
import { Button } from 'antd'

const buttons = [
  { text: 'All', active: 'primary' },
  { text: 'Todo', active: 'primary' },
  { text: 'Done', active: 'primary' }
]

const Filter = () => {
  const [activeButton, setActiveButton] = useState(buttons[0].text)
  const { dispatch } = useStoreContext()
  return (
    <>
      {buttons.map(({ text, active }) => (
        <Button
          key={text}
          type={activeButton === text ? active : false}
          size="large"
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
