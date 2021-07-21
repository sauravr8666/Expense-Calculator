import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filteredYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expenseFilteredYear = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilteredYear={filteredYearHandler}
        />
        <ExpenseChart expenses={expenseFilteredYear} />
        <ExpensesList items={expenseFilteredYear} />
      </Card>
    </li>
  );
};

export default Expenses;
