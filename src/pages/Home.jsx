import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import SearchBar from "../components/SearchBar";
import Summary from "../components/Summary";
import Filter from "../components/Filter";


function Home() {
    return(
        <div>
            <h1>Expense Tracker</h1>
            <Summary />
            <ExpenseForm />
            <SearchBar />
            <Filter />
            <ExpenseList />
        </div>
    );
}

export default Home;
