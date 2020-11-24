import { createGlobalStyle } from 'styled-components'
import { normalize, reset } from './helpers'

const GlobalStyle = createGlobalStyle`
	${normalize}
	${reset}
	html{
	font-size: ${({ theme }) => theme.rootFontSize};
	}
	html, body, #root{
	 height: 100%;
	}
  body {
    font-family: ${({ theme }) => theme.fonts.text};
  }
`

export default GlobalStyle
