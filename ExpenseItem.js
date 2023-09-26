import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';


function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
        setAmount('100');
        console.log(amount);
    }
    const deleteExpense = () => {
        const expenseElement = document.querySelector('.expense-item');
        expenseElement.remove();
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={deleteExpense}>Delete Expense</button>
        </Card>
    );
}

export default ExpenseItem;