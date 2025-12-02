
import React, { useState } from 'react';
import logo from './somasmart.png';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            &#9776;
          </button>
          <h1 className="header-title">SOMASMARTAI</h1>
        </div>
      </header>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
      <div className="main-content">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Soon on release
        </p>
        <a
          className="App-link"
          href="https://codeskytz.site"
          target="_blank"
          rel="noopener noreferrer"
        >
         BROUGHT BY @CODESKYTZ
        </a>
      </div>
    </div>
  );
}

export default App;
