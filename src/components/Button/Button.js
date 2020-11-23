import React from 'react'
import './style.scss'

const Button = (props) => {
  const { className, type, noBorder, ...rest } = props
  let classesName = `btn no-wrap ${className}`
  switch (type) {
    case 'primary':
      classesName += ' btn-info'
      break
    case 'outline':
      classesName += ' btn-outline-secondary'
      break
    default:
      classesName += ' btn-submit'
      break
  }
  return <button {...rest} className={classesName} />
}

export default Button
