import Overview from '../components/Overview';
import ExpenseForm from '../components/ExpenseForm';
import IncomeForm from '../components/IncomeForm';
import Budget from '../components/Budget';
import { useState } from 'react';

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);

  const addExpense = (expense) => setExpenses([...expenses, expense]);
  const addIncome = (inc) => setIncome([...income, inc]);

  return (
    <div className="home-container">
      <h1>Personal Finance Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <IncomeForm addIncome={addIncome} />
      <Budget income={income} expenses={expenses} />
      <Overview income={income} expenses={expenses} />
    </div>
  );
};

export default Home;
