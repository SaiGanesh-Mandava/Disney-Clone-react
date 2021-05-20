import React from 'react';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './components/Details/Details'
import Login from './components/Login/Login'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
      <Route path="/login">
            <Login/>
        </Route>
        <Route path="/details/:id">
            <Details/>
        </Route>
        <Route path="/">
            <Home />
        </Route>
      </Switch>
      </Router>
    
    </div>
  );
}

export default App;
