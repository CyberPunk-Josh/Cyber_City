import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Paginas:
import Index from './pages/principal/indexPrincipal';
import Nosotros from './pages/Nosotros/Nosotros';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/nosotros' exact component={Nosotros} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
