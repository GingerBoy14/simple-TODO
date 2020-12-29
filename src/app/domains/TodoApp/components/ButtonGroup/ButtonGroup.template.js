import { useState, memo } from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => {
  console.log(theme)
  return {
    primary: {
      backgroundColor: `${theme.palette.primary.main} !important`,
      color: `${theme.palette.getContrastText(
        theme.palette.primary.main
      )} !important`
    },
    outline: {
      borderColor: `${theme.palette.primary.main} !important`,
      color: theme.palette.primary.main
    },
    grouped: {
      '&>*': {
        padding: `${theme.spacing(0.75)}px ${theme.spacing(2)}px`
      }
    }
  }
})
const ButtonGroup = (props) => {
  const { buttons, onClick, filterName } = props
  const classes = useStyles()
  const [activeButton, setActiveButton] = useState(filterName)
  return (
    <ToggleButtonGroup value={activeButton} className={classes.grouped}>
      {buttons.map(({ text }) => (
        <ToggleButton
          key={text}
          value={text.toLowerCase()}
          className={
            activeButton === text.toLowerCase()
              ? classes.primary
              : classes.outline
          }
          onClick={() => onClick(text.toLowerCase(), setActiveButton)}>
          {text}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

export default memo(ButtonGroup)
