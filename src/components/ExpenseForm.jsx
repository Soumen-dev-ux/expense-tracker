import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, updateExpense, setEditingExpense } from "../features/expenseSlice";
import "../styles/form.css";

function ExpenseForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  
  const editingExpense = useSelector(
    (state) => state.expenses.editingExpense
  );

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount);
      setCategory(editingExpense.category);
      setDate(editingExpense.date);
      setError("");
    } else {
      setTitle("");
      setAmount("");
      setCategory("");
      setDate("");
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !category || !date) {
      setError("Please fill in all fields.");
      return;
    }

    if (amount <= 0) {
      setError("Amount must be greater than 0.");
      return;
    }

    setError("");

    if (editingExpense) {
      dispatch(
        updateExpense({
          id: editingExpense.id,
          title,
          amount: Number(amount),
          category,
          date,
        })
      );
      dispatch(setEditingExpense(null));
    } else {
      dispatch(
        addExpense({
          title,
          amount: Number(amount),
          category,
          date,
        })
      );
    }

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  const handleCancelEdit = () => {
    dispatch(setEditingExpense(null));
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={editingExpense ? "edit-mode-form" : ""}
    >
      <h2>
        {editingExpense ? (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--cat-food)" }}>
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
            Edit Expense
          </>
        ) : (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
              <path d="M12 5v14M5 12h14" />
            </svg>
            Add Expense
          </>
        )}
      </h2>

      {error && (
        <div style={{
          background: "rgba(244, 63, 94, 0.08)",
          border: "1px solid rgba(244, 63, 94, 0.15)",
          color: "var(--danger)",
          padding: "0.75rem",
          borderRadius: "var(--radius-md)",
          fontSize: "0.85rem",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem"
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6M9 9l6 6" />
          </svg>
          {error}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="title">Expense Title</label>
        <input
          id="title"
          type="text"
          placeholder="e.g. Grocery Shopping"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError("");
          }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount (₹)</label>
        <input
          id="amount"
          type="number"
          placeholder="e.g. 1250"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
            if (error) setError("");
          }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            if (error) setError("");
          }}
        >
          <option value="">Select Category</option>
          <option>Food</option>
          <option>Shopping</option>
          <option>Travel</option>
          <option>Bills</option>
          <option>Others</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            if (error) setError("");
          }}
        />
      </div>

      <div className={`form-actions ${editingExpense ? "dual-buttons" : ""}`}>
        <button type="submit">
          {editingExpense ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Update
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5v14" />
              </svg>
              Add Expense
            </>
          )}
        </button>
        {editingExpense && (
          <button type="button" className="cancel-btn" onClick={handleCancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ExpenseForm;