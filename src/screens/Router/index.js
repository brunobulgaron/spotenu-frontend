import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from '../Home';
import Login from "../Login";
import SignUpUserFree from "../SignUpUserFree";
import SignUpUserBand from "../SignUpUserBand";
import SignUpUserAdmin from "../SignUpUserAdmin";
import Dashboard from "../Dashboard";
import DashboardBand from "../DashboardBand";
import AdminPanel from '../AdminPanel';
import ManageAlbums from "../ManageAlbums";
import ManageSongs from "../ManageSongs";
import ManageProfile from "../ManageProfile";
import CreateAlbum from "../CreateAlbum";
import CreateSong from "../CreateSong";


export const routes = {
  root: "/",
  login: "/user/login",
  signUpUserFree: "/user/signup",
  signUpUserBand: "/user/signupBand",
  signUpUserAdmin: "/user/signupAdmin",
  dashboard: "/dashboard",
  dashboardBand: "/dashboardBand",
  adminPanel: "/admin",
  manageAlbums: "/albums",
  manageSongs: "/songs",
  manageProfile: "/profile",
  createAlbum: "/albums/create",
  createSong: "/songs/create"
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
          <Route exact path={routes.dashboardBand} component={DashboardBand} />
          <Route exact path={routes.adminPanel} component={AdminPanel} />
          <Route exact path={routes.manageAlbums} component={ManageAlbums} />
          <Route exact path={routes.manageSongs} component={ManageSongs} />
          <Route exact path={routes.manageProfile} component={ManageProfile} />
          <Route exact path={routes.createAlbum} component={CreateAlbum} />
          <Route exact path={routes.createSong} component={CreateSong} />
        </Switch>
    </ConnectedRouter>
  );
}