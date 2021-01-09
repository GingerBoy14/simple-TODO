import { SignUpForm, SignInWithGoogleButton } from '../../components'
import { Link } from 'react-router-dom'
import {
  Box,
  Divider,
  Grid,
  Paper,
  Typography,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  h100: {
    height: '100%'
  },
  devider: {
    margin: `${theme.spacing(1)}px 0`
  }
}))

const SignUp = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      className={classes.h100}>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Box display="flex" justifyContent="center">
          <Typography variant="h2" gutterBottom>
            Sign up
          </Typography>
        </Box>

        <Paper elevation={3}>
          <Box p={2}>
            <SignInWithGoogleButton />
            <Divider className={classes.devider} />
            <SignUpForm />
          </Box>
        </Paper>
        <Box my={1} display="flex" justifyContent="center">
          <Link to="/login">
            <Typography color="textPrimary" display="inline">
              Already have an account?
            </Typography>{' '}
            <Typography display="inline">Login</Typography>
          </Link>
        </Box>
      </Grid>
    </Grid>
  )
}

export default SignUp
