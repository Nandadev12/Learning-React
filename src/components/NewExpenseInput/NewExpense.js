import React from 'react';

import './NewExpense.css'

import ExpenseForm from './ExpenseForm';


const  NewExpense = (props) => {

function updateExpenseData(enteredExpenseData){
    const expenseData = {
        ...enteredExpenseData,
        id: new Date().toString()
    }

 props.onAddNewExpense(expenseData);
}


return (
    <div className = 'new-expense'>
        <ExpenseForm onSaveExpenseData = {updateExpenseData}
        />
    </div>
)

}

export default NewExpense