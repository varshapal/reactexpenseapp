import React, { useState }from "react";

import './ExpenseForm.css';

function ExpenseForm(e) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const titleChangeHandler= (event) => {
        setEnteredTitle(event.target.value);
    }

    const [enteredAmount, setEnteredAmount] = useState('');
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const [enteredDate, setEnteredDate] = useState('');
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
    }

    
    return (
        <form onClick={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title:</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__controls">
                <label>Amount:</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__controls">
                <label>Date:</label>
                <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button>Add Expense</button>

        </div>
    </form>
    );
    
};



export default ExpenseForm;