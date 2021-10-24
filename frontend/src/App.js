import React from 'react';

import './App.css';

import logo from './assets/Logo.png';

import Routes from './routes';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="ideaçu"  style={{width: 250,height:160}}/>

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
