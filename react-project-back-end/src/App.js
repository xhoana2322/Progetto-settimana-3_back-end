import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Detail from './pages/Detail';
import UsersPage from './pages/UserPage';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts/:id" element={<Detail />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
