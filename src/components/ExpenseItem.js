import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  const expenseTitle = props.expense.title;
  const expenseAmount = props.expense.amount;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price ">CHF {expenseAmount}</div>
    </Card>
  );
}
