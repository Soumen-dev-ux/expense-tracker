import { useDispatch } from "react-redux";
import { deleteExpense, setEditingExpense } from "../features/expenseSlice";
import "../styles/card.css";

const getCategoryIcon = (category) => {
  const lowercaseCategory = (category || "").toLowerCase();
  switch (lowercaseCategory) {
    case "food":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v8c0 1.1.9 2 2 2h3Z" />
        </svg>
      );
    case "shopping":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4ZM3 6h18M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    case "travel":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 8.88 9.88 16.24 7.76" />
        </svg>
      );
    case "bills":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
          <path d="M16 8H8M16 12H8M13 16H8" />
        </svg>
      );
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
        </svg>
      );
  }
};

function ExpenseCard({ expense }) {
  const dispatch = useDispatch();

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const categoryLower = (expense.category || "others").toLowerCase();

  return (
    <div className="expense-item">
      <div className="expense-info-group">
        <div className={`category-icon-wrapper ${categoryLower}`}>
          {getCategoryIcon(expense.category)}
        </div>
        <div className="expense-text-details">
          <h3 className="expense-title" title={expense.title}>{expense.title}</h3>
          <div className="expense-meta">
            <span>{formatDate(expense.date)}</span>
            <span className="expense-meta-dot"></span>
            <span className={`expense-category-tag ${categoryLower}`}>
              {expense.category}
            </span>
          </div>
        </div>
      </div>

      <div className="expense-value-group">
        <span className="expense-amount">{formatCurrency(expense.amount)}</span>
        <div className="expense-actions">
          <button
            type="button"
            className="action-btn edit-btn"
            title="Edit Expense"
            onClick={() => dispatch(setEditingExpense(expense))}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
          </button>
          <button
            type="button"
            className="action-btn delete-btn"
            title="Delete Expense"
            onClick={() => dispatch(deleteExpense(expense.id))}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseCard;