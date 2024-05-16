import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignNav from './components/SignNav';
import AuthForm from './components/SignNav';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="./components/SignNav">Sign Up</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="./components/SignNav" component={SignNav} />
          <AuthForm />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
