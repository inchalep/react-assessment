import React from 'react';
import Login from './pages/login';
import Clients from './pages/clients';
import General from './pages/general';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/general" element={<General />} />
      </Routes>
    </>
  );
}

export default App;
