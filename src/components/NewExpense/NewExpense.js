import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  // used to take data from the child component
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // now sending data from this component to parent component i.e. App.js
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  // To show button
  let [isEditing, setEditing] = useState(false);

  const startEditingHandler = () => {
    setEditing(true);
  };

  const stopEditingHandler = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancle={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
