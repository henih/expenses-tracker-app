import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList";

export default function Expenses(props) {
  const [year, setYear] = useState("2022");

  // The expenseFilterHandler function updates the selected year when the user changes the year filter.
  function expenseFilterHandler(selectedYear) {
    setYear(selectedYear);
    console.log(selectedYear);
  }

  // Filter method to create a new array filteredExpenses that contains only the expenses with a year matching the selected year.
  const filteredExpenses = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  // Check if there are no expenses for the selected year and display a message accordingly.
  // If there are expenses for the selected year, we map over filteredExpenses to render the ExpenseItem components.
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={year}
          onChangeExpenseFilter={expenseFilterHandler}
        />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}
