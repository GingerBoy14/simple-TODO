import React from 'react'
import { Box, Button } from '@material-ui/core'

const SubmitButton = (props) => {
  const { text } = props
  return (
    <Box py={2} display="flex" justifyContent="center">
      <Button variant="contained" color="primary" type="submit">
        {text}
      </Button>
    </Box>
  )
}

export default SubmitButton
