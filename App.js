import logo from './logo.svg';
import './App.css';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    
  ];
  
  
  const addExpenseHandler = expense => {
    //console.log('In App.js');
    //console.log(expense);
    const displayExpense = document.getElementById('data');
    displayExpense.textContent = JSON.stringify(expense);
    
    
  }
  
  
    
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <NewExpense onAddExpense = {addExpenseHandler}/>
        <Expenses items={expenses} />
        <p id='data'>Dynamic Data</p>
        
        
        
        
        
        
        

        
        
        
            
      </header>
    </div>
  );
}

export default App;
