import React from 'react';
import Header from './components/layouts/Header';
import Dashboard from './components/pages/Dashboard';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
