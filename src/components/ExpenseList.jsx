import { useSelector } from "react-redux";
import ExpenseCard from "./ExpenseCard";

function ExpenseList() {
  const { expenses, search } = useSelector((state) => state.expenses);

  const filteredExpenses = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(search.toLowerCase())
  );

  if (filteredExpenses.length === 0) {
    return <h3>No Expenses Found</h3>;
  }

  return (
    <div>
      <h2>Expense List</h2>

      {filteredExpenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          expense={expense}
        />
      ))}
    </div>
  );
}

export default ExpenseList;