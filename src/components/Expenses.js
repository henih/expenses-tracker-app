import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

export default function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem expense={props.expense[0]} />
      <ExpenseItem expense={props.expense[1]} />
      <ExpenseItem expense={props.expense[2]} />
      <ExpenseItem expense={props.expense[3]} />
    </Card>
  );
}
