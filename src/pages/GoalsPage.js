import React from 'react';

const FinancialGoals = () => {
  const goals = [];

  return (
    <div className="page-container">
      <div className="financial-goals-container">
        <div className="financial-goals-content">
          <h2>My Goals</h2>
          <ul>
            {goals.map((goal, index) => (
              <li key={index}>{goal.text}</li>
            ))}
          </ul>
          <button>Add New Goal</button>
        </div>
      </div>
    </div>
  );
};

export default FinancialGoals;
