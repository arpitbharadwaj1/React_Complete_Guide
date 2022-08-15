import Card from "../UI/Cards";
import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteretYear] = useState("2022");

  // this will fetch the value from the other component
  const filterChangeHandler = (selectedYear) => {
    setFilteretYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    // date will return object so converted into string
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        {/* onChangeFilter or can be named anything  */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
