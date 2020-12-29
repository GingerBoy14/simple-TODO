import { TodosProvider } from '../../context'
import { App } from '../App'
import { Profile } from 'app/domains/User/routes'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const TodoApp = () => {
  return (
    <Grid container style={{ height: '100%' }}>
      <Grid item direction="column" xs={12} style={{ display: 'flex' }}>
        <Grid container justify="flex-end">
          <Grid item md={2} />
          <Grid item xs>
            <Box display="flex" justifyContent="center">
              <Typography variant="h2" gutterBottom>
                Todo List
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Profile />
          </Grid>
        </Grid>
        <Grid container style={{ flex: 1 }} justify="center">
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            direction="column"
            style={{ display: 'flex' }}>
            <TodosProvider store={{ tasks: [], filter: 'all', query: '' }}>
              <App />
            </TodosProvider>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TodoApp
