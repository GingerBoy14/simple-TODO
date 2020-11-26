import { useContext } from 'react'
import { Box, Input, Button } from 'base-components'
import storeContext from 'app/context'
const AddTodo = () => {
  const { store } = useContext(storeContext)
  return (
    <Box flexDirection="row" space={2}>
      <Input placeholder="What need to be done?" />
      <Button onClick={() => console.log(store)}>Add Todo</Button>
    </Box>
  )
}
export default AddTodo
