import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  const [expenseTitle, setExpenseTitle] = useState(props.expense.title);
  const expenseAmount = props.expense.amount;

  function clickHandler(event) {
    event.preventDefault();
    setExpenseTitle("Changed");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price ">CHF {expenseAmount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
