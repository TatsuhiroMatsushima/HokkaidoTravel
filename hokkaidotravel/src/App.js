import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import { Pages ,Nittei } from './components/index'

function App() {
  return (
    <Router>
      <div className="App">
        <Pages />
        <Route exact path='/' component={Nittei} />
        <Route exact path='/Nittei' component={Nittei}/>
      </div>
    </Router>
  );
}

export default App;
