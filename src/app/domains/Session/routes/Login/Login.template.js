import {
  Paper,
  Typography,
  Box,
  Grid,
  Divider,
  makeStyles
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import {
  ResetPasswordModal,
  LoginForm,
  SignInWithGoogleButton
} from '../../components'

const useStyles = makeStyles((theme) => ({
  h100: {
    height: '100%'
  },
  devider: {
    margin: `${theme.spacing(1)}px 0`
  }
}))
const Login = () => {
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
            Login
          </Typography>
        </Box>

        <Paper elevation={3}>
          <Box p={2}>
            <SignInWithGoogleButton />
            <Divider className={classes.devider} />
            <LoginForm />
            <ResetPasswordModal />
          </Box>
        </Paper>
        <Box my={1} display="flex" justifyContent="center">
          <Link to="/signUp">
            <Typography color="textPrimary" display="inline">
              Don't have account?
            </Typography>{' '}
            <Typography display="inline">Sign up</Typography>
          </Link>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login
