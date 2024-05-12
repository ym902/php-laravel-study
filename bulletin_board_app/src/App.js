import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './_components/Home/Home';
import BulletinBoard from './_components/BulletinBoard/BulletinBoard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bulletinBoard" element={<BulletinBoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
