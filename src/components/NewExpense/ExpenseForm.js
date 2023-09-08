import { useState } from "react";
import "./ExpenseForm.css";

// prop comes from NewExpense form
export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  // function titleChangeHandler(event) {
  //   event.preventDefault();
  //   setEnteredTitle(event.target.value);
  // }

  // function amountChangeHandler(event) {
  //   event.preventDefault();
  //   setEnteredAmount(event.target.value);
  //   console.log(event.target.value);
  // }

  // function dateChangeHandler(event) {
  //   event.preventDefault();
  //   setEnteredDate(event.target.value);
  //   console.log(event.target.value);
  // }

  //Handle all input change within 1 function.
  //We use an arrow function below that sends the identifier and the value to inputChangeHandler function.

  function inputChangeHandler(identifier, value) {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    } else {
      setEnteredAmount(value);
    }
  }

  //Combine all the inputs in 1 function that gets called once the form is submitted
  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // 2. Receives props from NewExpense.js and executes onSaveExpenseData function and sends expenseData to NewExpense.js as an argument and that's the value we receive as a parameter in NewExpense as enteredExpenseData
    props.onSaveExpenseData(expenseData);
    //Two way binding - Once the form is submitted, the value of the form is resetted to the initial state
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
