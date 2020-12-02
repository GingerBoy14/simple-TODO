import { typography, colors, breakpoints, space } from './config'

const { fontSizes, lineHeights, fonts, rootFontSize } = typography

const theme = {
  defaultThemeMode: 'light',
  rootFontSize,
  fonts,
  fontSizes,
  lineHeights,
  breakpoints,
  colors,
  space
}

export default theme
