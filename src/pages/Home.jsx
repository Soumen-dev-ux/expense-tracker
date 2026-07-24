import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import SearchBar from "../components/SearchBar";
import Summary from "../components/Summary";

function Home() {
    return(
        <div>
            <h1>Expense Tracker</h1>
            <Summary />
            <ExpenseForm />
            <SearchBar />
            <ExpenseList />
        </div>
    );
}

export default Home;
