import styled, { css } from 'styled-components'
import { color } from 'styled-system'
import PropTypes from 'prop-types'

const StyleTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.title};
  ${({ theme, level }) => css`
    font-size: ${theme.fontSizes.title[level]};
  `};
  ${color}
`

const Title = (props) => {
  const { level } = props
  return <StyleTitle as={`h${level}`} {...props} />
}

Title.defaultProps = {
  level: 1
}
Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
}
export default Title
