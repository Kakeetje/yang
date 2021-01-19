import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home'
import Acties from './Pages/Acties'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Profiel from './Pages/Profiel'
import RegisterForms from "./Components/LoginForms/RegisterForms";

export default function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/acties">Acties</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/profile">Profiel</Link>
              </li>
              <li>
                <Link to="/register">Registreren</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/acties">
              <Acties />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profile">
              <Profiel />
            </Route>
            <Route path="/register">
              <RegisterForms />
            </Route>
            <Route path="/">
              <h1>404, Page not found</h1>
            </Route>

          </Switch>
        </div>
      </Router>
  );
}




