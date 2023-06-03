import React, {useState} from 'react'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState(2019)
  const filterHandler = (year)=>{
          setFilteredYear(year);
  }
  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString()==filteredYear;
  })
  
  return (
    <div>
    <Card className='expenses'>
    <ExpensesFilter selected = {filteredYear} changeHandler = {filterHandler}/>
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList items = {filteredExpenses}/>

    </Card>
    </div>
  )
}

export default Expenses