import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link } from 'react-router-dom';
import GerechtenCards from "../Pages/Menu/GerechtenCards";



function Redirect() {

    return (
        <>
          <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/menu/gerechten">Bekijk onze gerechten</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                <Route exact path="/menu/gerechten">
                    <GerechtenCards />
                </Route>
                    </Switch>
                </div>
          </Router>
         </>
    );
}

export default Redirect;
