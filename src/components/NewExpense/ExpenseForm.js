import React, {useState} from 'react'
import './ExpenseForm.css'
function ExpenseForm(props) {
    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredAmount,setEnteredAmount]=useState('')
    const [enteredDate,setEnteredDate]=useState('')
    const titleChangeHandler = (e)=>{
         setEnteredTitle(e.target.value);
    }
    const AmountChangeHandler = (e)=>{
        setEnteredAmount(e.target.value);
   }
   const DateChangeHandler = (e)=>{
    setEnteredDate(e.target.value);
}
  const SubmitHandler = (e) =>{
      e.preventDefault();
      const expenseData = {
        title: enteredTitle,
        date: new Date(enteredDate),
        amount: +enteredAmount
      };
      props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }
    
  return (
    <form onSubmit={SubmitHandler}>
          <div className='new-expense__controls'>
            <div className='new-expense__controls'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange = {titleChangeHandler}/>
            </div>
            <div className='new-expense__controls'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange = {AmountChangeHandler} value={enteredAmount}/>
            </div>
            <div className='new-expense__controls'>
                <label>Date</label>
                <input type='date' min='2022-01-01' max='2023-12-31' onChange = {DateChangeHandler} value={enteredDate}/>
            </div>
          </div>
          <div className='new-expense__actions'>
              <button type='button' onClick = {props.addNewHandler}>Cancel</button>
              <button type='submit'>Add expense</button>
          </div>
    </form>
  )
}

export default ExpenseForm