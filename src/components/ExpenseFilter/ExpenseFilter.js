import { useState } from "react";
import "./ExpenseFilter.css";

export default function ExpensesFilter(props) {
  const [year, setYear] = useState("");

  function changeHandler(event) {
    event.preventDefault();
    setYear(event.target.value);
    props.onChangeExpenseFilter(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={changeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
