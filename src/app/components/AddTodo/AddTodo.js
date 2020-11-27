import { useRef } from 'react'
import { Box, Input, Button } from 'base-components'
import { useStoreContext } from 'app/context'

const AddTodo = () => {
  const { dispatch } = useStoreContext()
  const taskText = useRef()
  return (
    <Box
      as={'form'}
      onSubmit={(e) => {
        e.preventDefault(false)
        taskText.current.value = ''
      }}
      flexDirection="row"
      space={2}>
      <Input placeholder="What need to be done?" ref={taskText} />
      <Button
        onClick={() =>
          taskText.current.value &&
          dispatch({ type: 'ADD_TODO', payload: taskText.current.value })
        }>
        Add Todo
      </Button>
    </Box>
  )
}
export default AddTodo
