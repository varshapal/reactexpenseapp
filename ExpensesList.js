import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';


const ExpensesList = (props) =>  {
    
  
    if(props.items.length === 0 )
    {
        return <p>No items found.</p>
    }
    if(props.items.length === 1 )
    {
        return (<div><ExpenseItem title = {props.items[0].title} amount = {props.items[0].amount} date = {props.items[0].date} /><p>Only single Expense here. Please add more..."</p></div>)
    }

    return (
        <ul className='expenses-list'>
            {props.items.map(expense => (
            <ExpenseItem 
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}
        />
        ))}
        </ul>
    )
}



export default ExpensesList;