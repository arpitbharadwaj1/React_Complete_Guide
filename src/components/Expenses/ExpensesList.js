import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {

  // logic to show default message if item is not present in the desired year
  if(props.items.length === 0 ) {
    return <h2 className="expenses-list__fallback">Uh oh.. Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          // Adding unique key to avoid console warnings
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
