import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  // Redirect
} from 'react-router-dom';
import { Header ,Top,Nittei } from './components/index'

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Header />
    //     <Route exact path='/' component={Top} />
    //     <Route exact path='/Nittei' component={Nittei}/>
    //   </div>
    // </Router>
    <Nittei/>
  );
}

export default App;
