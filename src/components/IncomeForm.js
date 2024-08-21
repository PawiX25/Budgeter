import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const IncomeForm = ({ addIncome }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome({ id: uuidv4(), amount: parseFloat(amount), description });
    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Add Income</button>
    </form>
  );
};

export default IncomeForm;
