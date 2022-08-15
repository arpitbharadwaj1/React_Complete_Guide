import Expenses from './components/Expenses/Expenses';
import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Dosa',
      amount: 100,
      date: new Date(2022, 7, 13),
    },
    {
      id: 'e2',
      title: 'Pizza',
      amount: 400,
      date: new Date(2022, 4, 23),
    },
    {
      id: 'e3',
      title: 'Burger',
      amount: 150,
      date: new Date(2022, 1, 17),
    },
    {
      id: 'e4',
      title: 'Pattez',
      amount: 80,
      date: new Date(2022, 5, 18),
    }
  ] 

  const addExpenseHandler = expense => {
    console.log('in App Js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items = {expenses}></Expenses>
    </div>
  );
}

export default App;
