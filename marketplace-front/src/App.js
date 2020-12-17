import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import logo from './logo.svg'
import './App.css'
import MyFooter from './components/footer/footer'
import MyHeader from './components/header/header'
import Home from'./routes/home/home'
import AchatsImmob from './routes/achats/achats'
import VentesImmob from './routes/ventes/ventes'
import EntryPoint from './routes/default/entry-point'
//import MenuRoute from './models/consts'

//import {Instance} from './models/smart-contract-account';

function App() {
  return (
    <div className="view">
      <Suspense fallback={<div>Loading...</div>}>
        <MyHeader/>
      </Suspense>
      <Router>
        <Menubar/>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={EntryPoint}/>
            <Route path="/home" component={Home}/>
            <Route path="/achats" component={AchatsImmob}/>
            <Route path="/ventes" component={VentesImmob}/>
          </Switch>
        </Suspense>
      </Router>
      <Suspense fallback={<div>Loading...</div>}>
        <MyFooter/>
      </Suspense>
    </div>
  );
}

function Menubar() {
  return (
    <nav className="menubar">
        <ul >
          <Link to= 'home'>
            <li>HOME</li>
          </Link>
          <Link to='achats'>
            <li>ACHATS</li>
          </Link>
          <Link to='ventes'>
            <li>VENTES</li>
          </Link>
        </ul>
    </nav>
  );
}

export default App;
