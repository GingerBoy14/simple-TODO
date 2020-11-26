import styled from 'styled-components'
import DropDownItem from './DropDownItem'

const StyledDropDown = styled.div``

const DropDown = (props) => {
  const { items } = props
  return (
    <StyledDropDown>
      {items.map((props) => (
        <DropDownItem {...props} />
      ))}
    </StyledDropDown>
  )
}

export default DropDown
