import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/expenseSlice";

function Filter(){
    const dispatch = useDispatch();
    const filter = useSelector(
        state => state.expenses.filter
    );

    return(
    <select value={filter} onChange={(e) => dispatch(setFilter(e.target.value))}>
        <option>All</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Others</option>
    </select>
    );
}

export default Filter;
