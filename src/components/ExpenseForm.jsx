import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, updateExpense } from "../features/expenseSlice";

function ExpenseForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  
  const editingExpense = useSelector(
    (state) => state.expenses.editingExpense
  );

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount);
      setCategory(editingExpense.category);
      setDate(editingExpense.date);
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !category || !date) {
      alert("Please fill all fields");
      return;
    }

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

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingExpense ? "Edit Expense" : "Add Expense"}</h2>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option>Food</option>
        <option>Shopping</option>
        <option>Travel</option>
        <option>Bills</option>
        <option>Others</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">{editingExpense ? "Update Expense" : "Add Expense"}</button>
    </form>
  );
}

export default ExpenseForm;