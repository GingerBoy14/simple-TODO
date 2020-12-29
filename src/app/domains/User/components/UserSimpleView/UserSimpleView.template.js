import { Avatar, Typography, Grid, Hidden } from '@material-ui/core'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import { UsersDropdown } from '../UsersDropdown'
import { useUserContext } from 'app/domains/Session/context'

const UserSimpleView = (props) => {
  const { userProfile } = useUserContext()
  return (
    <Grid container justify="flex-end" alignItems="center" spacing={1}>
      <Grid item>
        <Hidden xsDown>
          <Typography variant="subtitle1">{userProfile.name}</Typography>
        </Hidden>
        <Hidden smUp>
          <Typography variant="subtitle2">
            {/*{userProfile.name.split(' ')}*/}
            Hi, {userProfile.name.split(' ')[0]}
            <br />
            Let's get to work
          </Typography>
        </Hidden>
      </Grid>
      <Grid item>
        <UsersDropdown {...props}>
          <Avatar src={userProfile.avatar} style={{ cursor: 'pointer' }}>
            {userProfile.avatar && <PermIdentityIcon />}
          </Avatar>
        </UsersDropdown>
      </Grid>
    </Grid>
  )
}

export default UserSimpleView
