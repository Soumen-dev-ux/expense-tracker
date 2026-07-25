import { useSelector } from "react-redux";

function Summary() {
  const expenses = useSelector((state) => state.expenses.expenses);

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const categories = ["Food", "Shopping", "Travel", "Bills", "Others"];

  const categoryBreakdown = categories.map((cat) => {
    const amount = expenses
      .filter((exp) => exp.category === cat)
      .reduce((sum, exp) => sum + exp.amount, 0);
    const percentage = total > 0 ? Math.round((amount / total) * 100) : 0;
    return { name: cat, amount, percentage };
  });

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="premium-card summary-card">
      <div className="summary-total-label">Total Spent</div>
      <div className="summary-total-amount">{formatCurrency(total)}</div>

      {total > 0 && (
        <div className="summary-breakdown">
          <h3 className="breakdown-title">Breakdown by Category</h3>
          {categoryBreakdown.map((cat) => (
            <div key={cat.name} className="category-stat-row">
              <div className="category-stat-info">
                <span className={`category-stat-name ${cat.name.toLowerCase()}`}>
                  {cat.name}
                </span>
                <span className="category-stat-value">
                  {formatCurrency(cat.amount)} ({cat.percentage}%)
                </span>
              </div>
              <div className="category-progress-bar-bg">
                <div
                  className={`category-progress-bar-fill ${cat.name.toLowerCase()}`}
                  style={{ width: `${cat.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Summary;