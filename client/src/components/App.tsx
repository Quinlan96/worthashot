import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './home/Home'
import QR from './qr/QR'
import QRCard from './qr/QRCard'

import '../assets/App.css';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/qr" exact component={QR} />
        <Route path="/qr/:code" exact component={QRCard} />
      </Router>
    </div>
  );
}

export default App;
