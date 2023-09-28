import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  
  const [filteredYear, setFilteredYear] = useState('2020');
  const filteredChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenseHandler = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
 

  
  return(
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter = {filteredChangeHandler} />
          {filteredExpenseHandler.map(expense => (
            <ExpenseItem 
              key={expense.id}
              title={expense.title} 
              amount={expense.amount} 
              date={expense.date}
            />
          ))}

          


          
          {/* <ExpenseItem 
            title={props.items[0].title} 
            amount={props.items[0].amount} 
            date={props.items[0].date}
          />
          <ExpenseItem
            title={props.items[1].title} 
            amount={props.items[1].amount} 
            date={props.items[1].date}
          />
          <ExpenseItem
            title={props.items[2].title} 
            amount={props.items[2].amount} 
            date={props.items[2].date}
          />
          <ExpenseItem
            title={props.items[3].title} 
            amount={props.items[3].amount} 
            date={props.items[3].date}
          /> */}
        </Card>
    )
}


export default Expenses;