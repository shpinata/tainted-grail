import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Heroes from '../heroes';
import Locations from '../locations';
import Statuses from '../statuses';
import './index.css';
import logo from './logo.png';

const App = () => (
  <>
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
    </main>
  </>
)

export default App
