import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import SellCars from './pages/sellingCars/SellCars'
import BuyCars from './pages/buyCars/BuyCars'
import Message from './pages/message/Message'
import Mine from './pages/mine/Mine.jsx'


function App() {
  return (
    <Router>
      <Route path="/mine" component={Mine}/>
      <Route path="/message" component={Message}/>
      <Route path="/buy" component={BuyCars}/>

    </Router>
    
  );
}

export default App;
