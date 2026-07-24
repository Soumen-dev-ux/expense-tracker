import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  expenses: [],
  editingExpense: null,
  search: "",
  filter: "All"
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push({
        id: uuidv4(),
        ...action.payload,
      });
    },

    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },

    setEditingExpense: (state, action) => {
      state.editingExpense = action.payload;
    },
    
    updateExpense: (state, action) => {
        const { id, title, amount, category, date } = action.payload;

        const index = state.expenses.findIndex((expense) => expense.id === id);

        if(index !== -1){
            state.expenses[index] = { id, title, amount, category, date };
        }

        state.editingExpense = null;
    },

    setSearch: (state, action) => {
        state.search = action.payload;
    },

    setFilter: (state, action) => {
        state.filter = action.payload;
    }
  },
});

export const { addExpense, deleteExpense, setEditingExpense, updateExpense, setSearch, setFilter } = expenseSlice.actions;
export default expenseSlice.reducer;