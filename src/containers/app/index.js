import React from 'react';
import { Route, Link } from 'react-router-dom';
import Heroes from '../heroes';
import Locations from '../locations';
import Statuses from '../statuses';
import './index.css'

const App = () => (
  <div>
    <header>
      <div id="heroes">
        <Link to="/">Герои</Link>  
      </div>
      <div id="locations">
        <Link to="/locations">Локации</Link>  
      </div>
      <div id="statuses">
        <Link to="/statuses">Достижения</Link>  
      </div>
    </header>

    <main>
      <Route exact path="/" component={Heroes} />
      <Route exact path="/locations" component={Locations} />
      <Route exact path="/statuses" component={Statuses} />
    </main>
  </div>
)

export default App
