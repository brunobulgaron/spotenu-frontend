import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Login from "../Login";
import SignUpUserFree from "../SignUpUserFree";
import Home from '../Home';


export const routes = {
  root: "/",
  signUpUserFree: "/user/signup",
  login: "/user/login",
};

export function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
        <Switch>
          <Route exact path={routes.root} component={Home} />
          <Route exact path={routes.signUpUserFree} component={SignUpUserFree} />
          <Route exact path={routes.login} component={Login} />
        </Switch>
    </ConnectedRouter>
  );
}