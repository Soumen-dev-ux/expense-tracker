import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../features/expenseSlice";

function SearchBar(){
    const dispatch = useDispatch();

    const search = useSelector(
        (state) => state.expenses.search 
    );

    return (
        <input type="text"
        placeholder="Search expenses"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))} />
    );
}

export default SearchBar;
