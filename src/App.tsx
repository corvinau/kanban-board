import React from 'react';
import './App.css';

import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app-header">Kanban Board</div>
      <div className="app-body">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
