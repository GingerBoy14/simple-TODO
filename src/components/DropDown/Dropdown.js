import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

const Dropdown = (props) => {
  const { children } = props
  const [visibility, setVisibility] = useState()

  return (
    <div className="dropdown-wrapper">
      <FontAwesomeIcon
        icon={faAngleLeft}
        size="2x"
        className={visibility ? 'open' : ''}
        rotation={visibility ? 270 : 0}
        onClick={() => setVisibility(!visibility)}
      />
      {visibility && <ul className="dropdown">{children}</ul>}
    </div>
  )
}
export default Dropdown
