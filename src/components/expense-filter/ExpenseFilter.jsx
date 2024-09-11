import React from 'react'
import classes from "./ExpensesFilter.module.css"

const ExpenseFilter = (props) => {

    const onFiltered = (e) => {
        props.onFilteredYear(e.target.value)
    }

  return (
    <div className={classes.container} >
      <h1>Filtered by Year</h1>

      <select onChange={onFiltered} value={props.value} name="" id="">
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  )
}

export default ExpenseFilter
