import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FinancialGoals = () => {
  const [goal, setGoal] = useState('');
  const [amount, setAmount] = useState('');
  const [goals, setGoals] = useState([]);

  const handleAddGoal = () => {
    setGoals([...goals, { id: uuidv4(), goal, amount: parseFloat(amount) }]);
    setGoal('');
    setAmount('');
  };

  return (
    <div>
      <h2>Financial Goals</h2>
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Goal"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map(g => (
          <li key={g.id}>{g.goal}: ${g.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default FinancialGoals;
