import { useDispatch } from "react-redux";
import { deleteExpense, setEditingExpense } from "../features/expenseSlice";

function ExpenseCard({ expense}){
    const dispatch = useDispatch();

    return ( <div>
        <div className="expense-card">
            <h3>{expense.title}</h3>
            <p>Rs. {expense.amount}</p>
            <p>{expense.category}</p>
            <p>{expense.date}</p>
        </div>

        <div className="btn-group">
            <button className="edit-btn" onClick={() => dispatch(setEditingExpense(expense))}>Edit</button>
            <button className="delete-btn" onClick={() => dispatch(deleteExpense(expense.id))}>Delete</button>
        </div>
    </div>
    );

}

export default ExpenseCard;