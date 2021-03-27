import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "pages/Login/Login";
import Home from "pages/Home/Home";

const RootReducer = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default RootReducer;