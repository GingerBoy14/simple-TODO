import React, { useState } from 'react'
import _ from 'lodash'
import GlobalStyle from './style'
import { Box, Button } from 'base-components'
import { Header, Search, Filter, AddTodo, TodoList } from './components'
import { ThemeProvider } from 'styled-components'
import { theme as baseTheme } from '../theme'

const getTheme = (mode) =>
  _.merge({}, baseTheme, {
    colors: _.get(baseTheme.colors.modes, mode, baseTheme.colors)
  })
const App = () => {
  const [mode, setMode] = useState(baseTheme.defaultThemeMode)
  const theme = getTheme(mode)
  return (
    <ThemeProvider theme={theme}>
      <Box alignItems="center">
        <Box width={{ _: 1, sm: '520px', md: '450px' }}>
          <GlobalStyle />
          <Header />
          <Box flexDirection="row" space={[2, 3]}>
            <Search />
            <Filter />
          </Box>
          <TodoList />
          <AddTodo />
        </Box>
        <Button
          onClick={() => {
            setMode(mode === 'dark' ? 'light' : 'dark')
          }}>
          change theme
        </Button>
      </Box>
    </ThemeProvider>
  )
}

export default App
