import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Button from '../UI/Button'


let currencyID = 0

function Expenses(props){

    const [currency,changeCurrency] = useState(props.currency[0])

    const clickHandler = () => {

        currencyID += 1
        if (currencyID < props.currency.length)
            changeCurrency(props.currency[currencyID])
        else{
        currencyID = 0
        changeCurrency(props.currency[currencyID])
         }

    }

    return (
        <div className = 'expenses'>
        <Button>
        <button
        onClick = {clickHandler}>
        Switch Currency </button>
        </Button>
        
        {props.expenseData.map((expense) =>  <ExpenseItem title = {expense.title} amount = {expense.amount} date = {expense.date} currency = {currency} />)}
          </div>
        
    )
}

export default Expenses