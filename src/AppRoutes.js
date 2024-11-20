import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Test from './pages/Test'; 
import Alltests from './pages/Alltests';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} /> {/* Новый маршрут */}
        <Route path="/alltests" element={<Alltests />} /> 
      </Routes>
    </Router>
  );
};

export default AppRoutes;