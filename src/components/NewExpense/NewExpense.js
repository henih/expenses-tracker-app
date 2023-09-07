import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


export default function NewExpense(props) {
  // 3. Receives  expenseData from ExpenseForm.js as parameter, adds ID and sends it thourgh AddExpense
 
  function saveExpenseDataHandler(enteredExpenseData) {
    // Expect to get the parameter of enteredExpenseData which comes from ExpenseFrom submitHandler function object

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  // 1. ExpenseForm has a prop which points to the function saveExpenseDataHandler, but is ONLY executed in ExpenseForm, not here
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
