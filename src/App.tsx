import { Route, Routes } from 'react-router-dom';
import PortfolioView from './view/PortfolioView';
import CvView from './view/CvView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioView />} />
      <Route path="/cv" element={<CvView />} />
    </Routes>
  );
}

export default App;
