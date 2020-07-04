import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import BreadCrumb from './components/BreadCrumb';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <NavBar />
      <BreadCrumb />
      <Dashboard />
    </>
  );
}

export default App;
