import { useSelector } from "react-redux";
import ExpenseCard from "./ExpenseCard";

function ExpenseList() {
  const expenses = useSelector((state) => state.expenses.expenses);

  if (expenses.length === 0) {
    return <h3>No Expenses Found</h3>;
  }

  return (
    <div>
      <h2>Expense List</h2>

      {expenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          expense={expense}
        />
      ))}
    </div>
  );
}

export default ExpenseList;