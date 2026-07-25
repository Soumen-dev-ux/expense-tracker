import { useSelector } from "react-redux";
import ExpenseCard from "./ExpenseCard";

function ExpenseList() {
  const { expenses, search, filter } = useSelector((state) => state.expenses);

  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || expense.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <div className="expense-list-header">
        <h2>Transactions</h2>
        <span className="expense-list-count">
          {filteredExpenses.length} {filteredExpenses.length === 1 ? "item" : "items"}
        </span>
      </div>

      {filteredExpenses.length === 0 ? (
        <div className="empty-state">
          <svg
            className="empty-state-icon"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
          </svg>
          <h3>No transactions found</h3>
          <p>Try clearing your search query or choosing another category.</p>
        </div>
      ) : (
        <div className="expense-list-scroll">
          {filteredExpenses.map((expense) => (
            <ExpenseCard
              key={expense.id}
              expense={expense}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseList;