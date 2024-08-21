const ExpenseList = ({ expenses }) => (
  <ul>
    {expenses.map(expense => (
      <li key={expense.id}>
        {expense.description}: ${expense.amount}
      </li>
    ))}
  </ul>
);

export default ExpenseList;
