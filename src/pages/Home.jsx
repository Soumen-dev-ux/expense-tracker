import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import SearchBar from "../components/SearchBar";
import Summary from "../components/Summary";
import Filter from "../components/Filter";


function Home() {
  return (
    <div className="app-wrapper">
      <header>
        <h1>
          <svg className="brand-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" />
            <path d="M21 12H17a2 2 0 0 0 0 4h4" />
          </svg>
          Expense Tracker
        </h1>
      </header>

      <main className="main-grid">
        {/* Left Column: Summary and Form */}
        <div className="left-col">
          <Summary />
          <div className="premium-card">
            <ExpenseForm />
          </div>
        </div>

        {/* Right Column: Filters and List */}
        <div className="right-col">
          <div className="premium-card" style={{ padding: "1.5rem" }}>
            <h2 className="section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Search & Filter
            </h2>
            <div className="filter-section-group">
              <SearchBar />
              <Filter />
            </div>
          </div>

          <div className="premium-card" style={{ padding: "1.5rem 1.25rem" }}>
            <ExpenseList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
