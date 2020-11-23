import React from 'react'
import './style.scss'

const Input = (props) => {
  const { placeholder } = props
  return <input className="form-control mr-2" placeholder={placeholder} />
}
export default Input
