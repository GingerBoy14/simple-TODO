import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import DropDownItem from './DropDownItem'

const StyledDropDown = styled.div`
  position: absolute;
  z-index: 99;
  top: 100%;
  right: -100%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25), 0 0.7rem 1rem rgba(0, 0, 0, 0.22);
  padding: ${({ theme }) => theme.space[2]} 0;
  border-radius: 0.5rem;

  &:before {
    content: '';
    position: absolute;
    bottom: 100%;
    right: 6%;
    border-color: #fff transparent;
    border-style: solid;
    border-width: 0 0.7rem 0.7rem;
    -webkit-filter: drop-shadow(0 -0.1rem 0.05rem rgba(0, 0, 0, 0.07));
    filter: drop-shadow(0 -0.1rem 0.05rem rgba(0, 0, 0, 0.07));
    transition: all 0.5s ease;
  }
`

const DropDown = (props) => {
  const { items, setShow, todoId } = props
  const dropdown = useRef()

  useEffect(() => {
    const handleMissClick = (e) => {
      if (dropdown.current && !dropdown.current.contains(e.target)) {
        setShow(false)
      }
    }
    document.addEventListener('click', handleMissClick, false)
    return () => {
      document.removeEventListener('click', handleMissClick, false)
    }
  }, [setShow])
  return (
    <StyledDropDown ref={dropdown}>
      {items.map((props, idx) => (
        <DropDownItem {...props} key={idx} todoId={todoId} />
      ))}
    </StyledDropDown>
  )
}

export default DropDown
