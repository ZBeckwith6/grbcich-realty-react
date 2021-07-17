import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Buyers from './components/pages/Buyers';
import Sellers from './components/pages/Sellers';
import ContactMe from './components/pages/ContactMe';

function App() {
  return (
    <>
      <Router>
        <Navbar />  
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/buyers' exact component={Buyers} />
          <Route path='/sellers' exact component={Sellers} />
          <Route path='/contact-me' exact component={ContactMe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
