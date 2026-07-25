import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/expenseSlice";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.expenses.filter);

  const categories = ["All", "Food", "Shopping", "Travel", "Bills", "Others"];

  return (
    <div className="filter-pills-container">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          className={`filter-pill ${filter === cat ? "active" : ""} ${cat.toLowerCase()}`}
          onClick={() => dispatch(setFilter(cat))}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Filter;
