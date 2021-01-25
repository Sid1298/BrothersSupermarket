import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route exact path='/about'><About /></Route>
            <Route exact path='/login'><Login /></Route>
            <Route exact path='/signup'><SignUp /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
