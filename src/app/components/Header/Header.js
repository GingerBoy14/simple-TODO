import { Box, Typography } from 'components'

const { Title } = Typography

const Header = () => {
  return (
    <Box width={1} alignItems="center">
      <Title>Todo List</Title>
      <Box width={1} alignItems="flex-end">
        <Title level={4} color="secondary">
          0 more to do, 0 done
        </Title>
      </Box>
    </Box>
  )
}

export default Header
