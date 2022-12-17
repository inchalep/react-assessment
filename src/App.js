import React from 'react';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import EmployeeDetails from './templates/EmployeeDetails';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/employee/:id" element={<EmployeeDetails />} />
      </Routes>
    </>
  );
}

export default App;
