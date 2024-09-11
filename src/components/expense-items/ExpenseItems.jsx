import React, { useState } from 'react'
import classes from "./ExpenseItem.module.css"
import ExpenseFilter from '../expense-filter/ExpenseFilter'
import Chart from '../chart/Chart'
// import { Fragment } from 'react'


const ExpenseItems = (props) => {
    
    const [selectedYear , setSelectedYear] = useState("2021")

    const yearChangeHandler = (year) => {
        setSelectedYear(year)
    }

    const newFilteredData = props.expenses.filter((el) => {
        let newDate = new Date(el.date)
        return newDate.getFullYear().toString() === selectedYear
    })

  return (
    <div className={classes.parentExpenseItemsContainer} >
        <ExpenseFilter onFilteredYear={yearChangeHandler} value={selectedYear} />
        <Chart items={newFilteredData} />
        {props.expenses.length === 0 ? <h1 style={{color: "white"}} >Not Expenses</h1> : newFilteredData.map((item) => {
      return (
        <div className={classes.containerItems} key={item.id}>
          <h1 className={classes.title} >{item.title}</h1>
          <h1 className={classes.title} >{item.price}$</h1>
          <h1 className={classes.title}>{item.date}</h1>
        </div>
      )
     })}
       
    </div>
  )
}

export default ExpenseItems
