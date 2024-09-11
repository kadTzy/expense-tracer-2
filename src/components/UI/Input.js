import React from 'react'
import "./Input.css"

const Input = ({ type , placeholder , value , onChange }) => {
  return (
    <input onChange={onChange} value={value} type={type} placeholder={placeholder} />
  )
}

export default Input
