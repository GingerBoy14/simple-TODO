const colors = {
  primary: 'rgb(23,162,184)',
  secondary: 'rgb(108,117,125)',
  white: 'rgb(255,255,255)',
  black: 'rgb(0,0,0)',
  bg: 'rgb(255,255,255)',
  modes: {
    dark: {
      primary: 'rgb(133,189,194)',
      secondary: 'rgb(65,92,95)',
      bg: 'rgb(18,28,30)'
    }
  }
}
const lightButton = {
  bg: [
    'rgb(46,152,255)' /*primary*/,
    'rgb(229,230,233)',
    'rgb(231,243,255)' /*secondary*/
  ],
  hover: [
    'rgb(45,136,255)' /*primary hover*/,
    'rgb(216,218,223)' /*secondary hover*/,
    'rgb(219,231,242)' /*secondary hover*/
  ]
}
const darkButton = {
  bg: [
    'rgb(45,136,255)' /*primary*/,
    'rgb(58,59,60)' /*secondary*/,
    'rgb(38,57,81)'
  ],
  hover: [
    'rgb(46,152,255)' /*primary hover*/,
    'rgb(78,79,80)' /*secondary hover*/,
    'rgb(60,77,99)'
  ]
}
colors.button = lightButton
colors.modes.dark.button = darkButton

const darkInput = {
  bg: ['rgb(58,59,60)']
}

const lightInput = {
  bg: ['rgb(240,242,245)']
}

colors.input = lightInput
colors.modes.dark.input = darkInput

const typography = {
  title: 'rgb(5, 5, 5)',
  text: 'rgb(101, 103, 107)'
  // color: [
  //   'rgb(5, 5, 5)', //primary
  //   'rgb(101, 103, 107)', //secondary
  //   'rgb(33, 111, 219)', //brand color
  //   colors.white //notification color
  // ]
}
const darkTypography = {
  title: 'rgb(228, 230, 235)',
  text: 'rgb(176, 179, 184)'
  // color: [
  //   'rgb(228, 230, 235)', //primary
  //   'rgb(176, 179, 184)', //secondary
  //   'rgb(69, 153, 255)', //brand color
  //   colors.white //notification color
  // ]
}
colors.typography = typography
colors.modes.dark.typography = darkTypography

export default colors
