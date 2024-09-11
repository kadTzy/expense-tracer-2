import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/expense-form/ExpenseForm';
import Header from './layout/Header';
import ExpenseItems from './components/expense-items/ExpenseItems';

function App() {

  const [visibleForm , setVisibleForm] = useState(false)
  const [myExpenses , setMyExpenses] = useState([])

  const openFormHandler = () => {
    setVisibleForm((prevState) => !prevState)
  }

  const save = (a) => {
    setMyExpenses((prevState) => {
      return [...prevState , a]
    })
  }

  

  return (
    <div className="App">
     <Header open={openFormHandler} />
     {visibleForm ? <ExpenseForm data={save} close={openFormHandler} /> : null}
     <ExpenseItems expenses={myExpenses} />
    </div>
  );
}

export default App;
