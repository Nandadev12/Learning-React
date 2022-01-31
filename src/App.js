import React from 'react';
import Expenses from './components/Expenses/Expenses'
import Card from './components/UI/Card.js'
import NewExpense from './components/NewExpenseInput/NewExpense';
import FilterByYear from './components/FilterArea/FilterByYear'
import { useState } from 'react';

function App() {
  const currenciesArray =['USD ','INR ', 'EUR ', 'AUD ']
  const [expensesArray,updateExpensesArray] = useState([]);

  let yearShown = 'All';

  const addExpenseHandler = (expenseData) =>{
    updateExpensesArray((prevExpenses)=>{ return [expenseData,...prevExpenses]})
  }
  


  const changeYearHandler = (year) =>{
    yearShown = year;
    console.log(yearShown)
    updateExpensesArray(expensesArray.filter(expense => expense.date.getFullYear() == yearShown));
    console.log(expensesArray.filter(expense => expense.date.getFullYear() == yearShown));
 
  }
  
  return (
    <div>
       <h2 style = {{textAlign : 'center'}}> Expense Chart </h2>
       <NewExpense onAddNewExpense = {addExpenseHandler}/>
       <FilterByYear  onYearChange = {changeYearHandler}/>
       <Card>
        <Expenses expenseData = {expensesArray} currency = {currenciesArray}/>
      </Card>
    </div>
  );
}


export default App;
