import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Detail from './pages/Detail';
// import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts/:id" element={<Detail />} />
            {/* <Route path='/results' element={<ResultsPage />} /> */}
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
