import { useSelector } from "react-redux";

function Summary(){
    const expenses = useSelector((state) => state.expenses.expenses);

    const total = expenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

    return(
        <div style={{background : "#4CAF50", color : "white", padding : "20px", borderRadius : "10px"}}>
            <h2>Total Expense</h2>
            <h1>Rs. {total}</h1>
        </div>
    );
}

export default Summary;