import { Box, Input, Button } from 'base-components'

const AddTodo = () => {
  return (
    <Box flexDirection="row">
      <Input placeholder="What need to be done?" />
      <Button>Add Todo</Button>
    </Box>
  )
}
export default AddTodo
