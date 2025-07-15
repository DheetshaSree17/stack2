import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import LoginReset from './components/LoginReset';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginReset />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
