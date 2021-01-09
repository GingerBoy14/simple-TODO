import React, { useEffect } from 'react'
import {
  Grid,
  Typography,
  Hidden,
  Button,
  Box,
  makeStyles
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import ReplayIcon from '@material-ui/icons/Replay'
import { auth } from 'service'
import { useUserDispatch } from '../../context'
import type from '../../constants'

const useStyles = makeStyles((theme) => ({
  h100: {
    height: '100%'
  },
  strong: {
    fontWeight: 'bold'
  }
}))
const EmailVerify = () => {
  const classes = useStyles()
  let history = useHistory()
  const dispatch = useUserDispatch()
  useEffect(() => {
    dispatch({ type: type.USER_LOADING, payload: false })
  }, [])

  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      className={classes.h100}>
      <Grid item xs={12} sm={10} md={6} lg={5} xl={4}>
        <Grid container justify="center">
          <Grid item>
            <Hidden xsDown>
              <Typography variant="h3" paragraph>
                Please verify your email
              </Typography>
            </Hidden>
            <Hidden smUp>
              <Typography variant="h4">Please verify your email</Typography>
            </Hidden>
          </Grid>
          <Grid container justify="center">
            <Typography>
              We have send email to:
              <Typography display="inline" className={classes.strong}>
                {' '}
                {auth.getCurrentUser().email}
              </Typography>
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              py={1}>
              <Box display="flex" justifyContent="center" py={1}>
                <Typography>Already confirmed email?</Typography>
              </Box>
              <Box display="flex" justifyContent="center" py={1}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => history.push('login')}>
                  Go to Login
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Typography gutterBottom>
                Don't get a confirmation email?
              </Typography>
            </Box>
          </Grid>

          <Grid item>
            <Typography display="inline">Check your spam or</Typography>
            <Button
              color="primary"
              size="small"
              onClick={() => auth.sendVerifyEmail()}>
              <ReplayIcon /> Send again
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default EmailVerify
