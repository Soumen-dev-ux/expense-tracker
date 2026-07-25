# 💰 Expense Tracker

A modern **Expense Tracker** built with **React** and **Redux Toolkit** that helps users manage their daily expenses efficiently. The application supports complete CRUD operations along with search, category filtering, total expense calculation, and persistent storage using Local Storage.

---

## 📌 Features

- ➕ Add new expenses
- 📋 Display all expenses
- ✏️ Edit existing expenses
- 🗑️ Delete expenses
- 🔍 Search expenses by title
- 🏷️ Filter expenses by category
- 💵 View total expense summary
- 💾 Save data using Local Storage
- 📱 Responsive user interface

---

## 🚀 Tech Stack

### Frontend
- React.js
- Redux Toolkit
- React Redux
- JavaScript (ES6+)
- CSS3

### Tools
- Vite
- UUID
- Local Storage

---

## 📂 Project Structure

```text
expense-tracker/
│
├── public/
│
├── src/
│   ├── app/
│   │     store.js
│   │
│   ├── features/
│   │     expenseSlice.js
│   │
│   ├── components/
│   │     ExpenseForm.jsx
│   │     ExpenseList.jsx
│   │     ExpenseCard.jsx
│   │     Summary.jsx
│   │     SearchBar.jsx
│   │     Filter.jsx
│   │
│   ├── pages/
│   │     Home.jsx
│   │
│   ├── styles/
│   │     app.css
│   │     form.css
│   │     card.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Soumen-dev-ux/expense-tracker.git
```

Navigate to the project directory

```bash
cd expense-tracker
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

The application will run at:

```text
http://localhost:5173
```

---

## 🎯 Redux Toolkit Concepts Used

- configureStore()
- createSlice()
- Provider
- useDispatch()
- useSelector()
- Redux Store
- Reducers
- Actions
- Global State Management

---

## 🔄 Redux Data Flow

```text
User
   │
   ▼
Expense Form
   │
dispatch(addExpense())
   │
   ▼
Expense Slice (Reducer)
   │
   ▼
Redux Store
   │
   ▼
useSelector()
   │
   ▼
Expense List & Summary
   │
   ▼
Updated UI
```

---

## 📖 How the Project Works

1. The user enters expense details in the form.
2. Clicking **Add Expense** dispatches an action to Redux.
3. The reducer updates the global state.
4. Components subscribed to the store automatically re-render.
5. Users can edit or delete any expense.
6. Search and category filters update the displayed data.
7. All expenses are stored in Local Storage to persist after refreshing the page.

---


## ✨ Core Features

### Add Expense
Users can add new expenses with:
- Title
- Amount
- Category
- Date

### Edit Expense
Users can update previously added expenses.

### Delete Expense
Expenses can be removed instantly.

### Search
Search expenses using the expense title.

### Filter
Filter expenses based on categories.

### Summary
Displays the total amount spent.

### Local Storage
Automatically saves expenses so they remain available after refreshing the page.

---

## 🧠 What I Learned

Through this project, I learned:

- Redux Toolkit fundamentals
- Global state management
- Creating Redux slices
- Dispatching actions
- Reading state using useSelector
- Component communication without prop drilling
- CRUD operations with Redux
- Local Storage integration
- Building reusable React components

---

## 🌍 Real-World Applications

Redux Toolkit is commonly used in:

- E-commerce websites
- Banking applications
- Inventory management systems
- Student management portals
- Healthcare systems
- Project management tools
- Food delivery applications

---

## 🚧 Challenges Faced

- Understanding Redux data flow
- Managing edit functionality
- Synchronizing multiple components
- Implementing search and filtering
- Persisting state using Local Storage
- Structuring a scalable React project

---

## 🔮 Future Enhancements

- User authentication
- Monthly expense analytics
- Charts and graphs
- Dark mode
- Export expenses as PDF or CSV
- Budget planning
- Multiple user accounts
- Cloud database integration
- Expense categories with icons

---

## 📦 Dependencies

```json
{
  "@reduxjs/toolkit": "^latest",
  "react-redux": "^latest",
  "react": "^latest",
  "uuid": "^latest",
  "vite": "^latest"
}
```

---

## 👨‍💻 Author

**Soumen Pore**

GitHub: https://github.com/Soumen-dev-ux

LinkedIn: https://linkedin.com/in/soumen-pore

