import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h1>{props.title}</h1>
      </div>
      <div className="expense-item__price">₹{props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
