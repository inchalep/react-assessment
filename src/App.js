import React from 'react';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import EmployeeDetails from './templates/EmployeeDetails';
import RegisterEmployee from './pages/home/register';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employee/register" element={<RegisterEmployee />} />
        <Route path="/home/employee/:id" element={<EmployeeDetails />} />
      </Routes>
    </>
  );
}

export default App;
