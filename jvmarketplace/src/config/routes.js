import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import Home from '../screens/home';
import Navbar from '../components/navbar';
import Jeux from '../screens/jeux';
import Favoris from '../screens/favoris';

const Routes = props => {
    return (
        <Router>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/jeux">
                    <Jeux></Jeux>
                </Route>
                <Route exact path="/favorites">
                    <Favoris></Favoris>
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;