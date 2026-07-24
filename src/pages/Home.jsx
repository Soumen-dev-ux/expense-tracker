import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Summary from "../components/Summary";

function Home() {
    return(
        <div>
            <h1>Expense Tracker</h1>
            <Summary />
            <ExpenseForm />
            <ExpenseList />
        </div>
    );
}

export default Home;
