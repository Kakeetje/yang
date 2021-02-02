import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './Pages/Home'
import Acties from './Pages/Acties'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Profiel from './Pages/Profiel'
import RegisterForms from "./Components/LoginForms/RegisterForms";
import PrivateRoute from "./Routing/PrivateRoute";
import Menu from './Pages/Menu/Menu';



function App() {
  return (
      <>
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
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>

              {/*Dit is voor wanneer ze klikken op registreren op de login pagina*/}
              <li>
                <Link to="/register">Registreren</Link>
              </li>

              {/*Dit is voor wanneer ze zijn ingelogd*/}
              <li>
                <Link to="/profile">Profiel</Link>
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
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <RegisterForms />
            </Route>
              <PrivateRoute exact path="/profile">
                <Profiel />
              </PrivateRoute>
            <Route path="/">
              <h1>404, Page not found</h1>
            </Route>
          </Switch>
        </div>
      </Router>
        </>
  );
}

export default App;


