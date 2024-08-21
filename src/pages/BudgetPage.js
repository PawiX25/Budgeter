import { useState } from 'react';

const Budget = ({ income = [], expenses = [] }) => {
  const [budget, setBudget] = useState(0);

  const totalIncome = income.reduce((sum, i) => sum + i.amount, 0);
  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className="page-container">
      <div className="budget-container">
        <h2>Budget</h2>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Set Budget"
        />
        <p>Income: ${totalIncome}</p>
        <p>Expenses: ${totalExpenses}</p>
        <p>Balance: ${balance}</p>
      </div>
    </div>
  );
};

export default Budget;
