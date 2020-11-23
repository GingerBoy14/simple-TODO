import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

const Dropdown = () => {
  // const Beverage = () => <FontAwesomeIcon icon={faAngleLeft} />
  const [visibility, setVisibility] = useState()

  return (
    <div className="dropdown-wrapper">
      <FontAwesomeIcon
        icon={faAngleLeft}
        className={visibility ? 'open' : ''}
        rotation={visibility ? 270 : 0}
        onClick={() => setVisibility(!visibility)}
      />
      {visibility && (
        <ul className="dropdown">
          <li className="menu-item-pin" onClick={() => console.log('Pin')}>
            Pin to top
          </li>
          <li
            className="menu-item-important"
            onClick={() => console.log('Important')}>
            Make important
          </li>
          <li
            className="menu-item-delete"
            onClick={() => console.log('Delete')}>
            Delete
          </li>
        </ul>
      )}
    </div>
  )
}
export default Dropdown
