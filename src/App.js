import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BudgetPage from './pages/BudgetPage';
import GoalsPage from './pages/GoalsPage';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/budget" element={<BudgetPage />} />
      <Route path="/goals" element={<GoalsPage />} />
    </Routes>
  </Router>
);

export default App;
