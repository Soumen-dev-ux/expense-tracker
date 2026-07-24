import { useSelector } from "react-redux";
import ExpenseCard from "./ExpenseCard";

function ExpenseList() {
  const { expenses, search, filter } = useSelector((state) => state.expenses);

  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || expense.category === filter;
    return matchesSearch && matchesFilter;
  });

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