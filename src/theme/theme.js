const colors = {
  primary: 'rgb(23,162,184)',
  secondary: 'rgb(108,117,125)',
  white: 'rgb(255,255,255)',
  black: 'rgb(0,0,0)'
}

const button = {
  bgc: [colors.primary, colors.secondary, 'rgb(215,215,215)'],
  hover: ['rgb(19,132,150)', colors.secondary, colors.primary]
}
colors.button = button

const fontSizes = {
  text: ['', '1rem', '1.2rem', '1.4rem', '1.6rem'],
  title: ['', '4rem', '3.6rem', '3rem', '2.5rem', '2rem', '1.6rem']
}
const lineHeights = {
  text: ['', '1.6rem', '1.6rem', '2.4rem', '2.4rem'],
  title: ['', '6.4rem', '5.4rem', '4.8rem', '4rem', '3.2rem', '2.4rem']
}

const breakpoints = ['576px', '768px']
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]

const theme = {
  rootFontSize: '10px',
  fonts: { title: 'Ubuntu Mono', text: 'Comfortaa' },
  fontSizes,
  lineHeights,
  breakpoints,
  colors
}

export default theme
