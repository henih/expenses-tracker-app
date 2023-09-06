import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  function titleChangeHandler(event) {
    event.preventDefault();
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    event.preventDefault();
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
  }

  function dateChangeHandler(event) {
    event.preventDefault();
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
