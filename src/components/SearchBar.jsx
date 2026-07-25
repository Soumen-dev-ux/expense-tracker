import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../features/expenseSlice";

function SearchBar() {
  const dispatch = useDispatch();

  const search = useSelector((state) => state.expenses.search);

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search expenses..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <svg
        className="search-icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </div>
  );
}

export default SearchBar;
