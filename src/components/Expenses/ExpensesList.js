import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function expensesList(props) {
  if (props.items.length === 0) {
    return <h1 className="expenses-list__fallback">No Expense Found</h1>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
}

export default expensesList;
