import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Heroes from '../heroes';
import Locations from '../locations';
import Statuses from '../statuses';
import './index.css';
import logo from './logo.png';
import CardDeck from '../heroes/CardDeck';

const App = () => (
  <HashRouter basename="/">
    <header>
      <div className="logo">
        <img src={logo} alt=""/>
      </div>        
      <div className="links">
        <div id="heroes">
          <NavLink exact to="/">Герои</NavLink>  
        </div>
        <div id="locations">
          <NavLink to="/locations">Локации</NavLink>  
        </div>
        <div id="statuses">
          <NavLink to="/statuses">Достижения</NavLink>  
        </div>          
      </div>
    </header>      

    <main>
        <Route exact path="/" component={Heroes} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/statuses" component={Statuses} />
        <Route exact path="/card-deck/:number" component={CardDeck} />
    </main>
  </HashRouter>
)

export default App
