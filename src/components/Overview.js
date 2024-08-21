import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Overview = ({ income, expenses }) => {
  const incomeLabels = income.map(i => i.description);
  const incomeData = income.map(i => i.amount);

  const expenseLabels = expenses.map(e => e.description);
  const expenseData = expenses.map(e => e.amount);

  const data = {
    labels: [...incomeLabels, ...expenseLabels],
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Expenses',
        data: expenseData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Overview</h2>
      <Bar data={data} />
    </div>
  );
};

export default Overview;
