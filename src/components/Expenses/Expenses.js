import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Cards";
import React , {useState} from 'react';
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

  const [filteredYear, setFilteretYear] = useState('2020');
 
  // this will fetch the value from the other component
  const filterChangeHandler = selectedYear => {
      setFilteretYear(selectedYear);
  }

  return (
    <div>
    <Card className="expenses">
      {/* onChangeFilter or can be named anything  */}
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>
    </Card>
    </div>
  );
}

export default Expenses;
