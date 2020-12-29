import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'

const AddTaskForm = (props) => {
  const { handleSubmit, register, taskLoading } = props
  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      style={{ display: 'flex' }}>
      <Box flex={1} mr={1}>
        <TextField
          id="standard-basic"
          placeholder="What need to be done?"
          fullWidth
          name={'task'}
          inputRef={register}
        />
      </Box>
      <Button color="primary" variant="contained" type="submit">
        Add Todo
      </Button>
    </form>
  )
}

export default AddTaskForm
