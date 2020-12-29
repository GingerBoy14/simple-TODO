import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'

const Spinner = (props) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ width: '100%', height: '100%' }}
      {...props}>
      <CircularProgress />
    </Box>
  )
}

export default Spinner
