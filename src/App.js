import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Login from './pages/login';
import Clients from './pages/clients';
import General from './pages/general';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <ColorModeSwitcher />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/general" element={<General />} />
      </Routes>
    </>
  );
}

export default App;
