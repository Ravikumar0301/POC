import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink, Redirect } from "react-router-dom";
import { Login } from "../Component/Login/LoginComponent";
import { Register } from "../Component/Register/RegisterComponent";
import { Home } from "../Component/Home/HomeComponent";
import GridExample from '../Component/AgGridView/AgGridComponent';
function Routers() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routers;