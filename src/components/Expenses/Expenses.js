import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

export default function Expenses(props) {

  function changeExpenseFilterHandler(year) {
    console.log(year);
  }

  return (
    <div>
      <ExpenseFilter onChangeExpenseFilter={changeExpenseFilterHandler} />
      <Card className="expenses">
        <ExpenseItem expense={props.expense[0]} />
        <ExpenseItem expense={props.expense[1]} />
        <ExpenseItem expense={props.expense[2]} />
        <ExpenseItem expense={props.expense[3]} />
      </Card>
    </div>
  );
}
