import React from 'react'
import "./Header.css"
import Button from '../components/UI/Button'

const Header = (props) => {

  return (
    <header>
         <h1>Logo</h1>
        <Button onClick={props.open} >ADD EXPENSES</Button>
    </header>
  )
}

export default Header

