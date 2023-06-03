import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
import React from 'react'

function NewExpense(props) {
    const[addNewCheck, setAddNewCheck] = React.useState(false)
    
    const newExpenseHandler = ()=>{
      setAddNewCheck(true);
    }
    const newExpenseHandler2 = ()=>{
      setAddNewCheck(false);
    }
    const saveExpenseDataHandler = (enteredExpenseData) =>{
             const expenseData = {
                ...enteredExpenseData,
                id : Math.random().toString()
             }
             props.onAddExpense(expenseData);
    }
    if(addNewCheck){
      return <div className='new-expense'>
      
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} addNewHandler = {newExpenseHandler2}/>
</div>
    }
  return (
    <div className='new-expense'>
           <button onClick={newExpenseHandler}>Add new expense</button>
    </div>
  )
}

export default NewExpense