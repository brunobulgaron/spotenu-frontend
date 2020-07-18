import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from '../Home';
import Login from "../Login";
import SignUpUserFree from "../SignUpUserFree";
import SignUpUserBand from "../SignUpUserBand";
import SignUpUserAdmin from "../SignUpUserAdmin";
import Dashboard from "../Dashboard";


export const routes = {
  root: "/",
  login: "/user/login",
  signUpUserFree: "/user/signup",
  signUpUserBand: "/user/signupBand",
  signUpUserAdmin: "/user/signupAdmin",
  dashboard: "/dashboard"
};

export function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
        <Switch>
          <Route exact path={routes.root} component={Home} />
          <Route exact path={routes.login} component={Login} />
          <Route exact path={routes.signUpUserFree} component={SignUpUserFree} />
          <Route exact path={routes.signUpUserBand} component={SignUpUserBand} />
          <Route exact path={routes.signUpUserAdmin} component={SignUpUserAdmin} />
          <Route exact path={routes.dashboard} component={Dashboard} />
        </Switch>
    </ConnectedRouter>
  );
}