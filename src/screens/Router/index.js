import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from '../Home';
import Login from "../Login";
import SignUpUserFree from "../SignUpUserFree";
import SignUpUserBand from "../SignUpUserBand";
import SignUpUserAdmin from "../SignUpUserAdmin";
import DashboardBand from "../DashboardBand";
import AdminPanel from '../AdminPanel';
import ManageAlbums from "../ManageAlbums";
import ManageSongs from "../ManageSongs";
import ManageProfile from "../ManageProfile";
import CreateAlbum from "../CreateAlbum";
import CreateSong from "../CreateSong";
import ManageGenders from "../ManageGenders";
import CreateGender from "../CreateGender";
import ManageBands from "../ManageBands";


export const routes = {
  root: "/",
  login: "/user/login",
  signUpUserFree: "/user/signup",
  signUpUserBand: "/user/signupBand",
  signUpUserAdmin: "/user/signupAdmin",
  dashboardBand: "/dashboardBand",
  adminPanel: "/admin",
  manageAlbums: "/albums",
  manageSongs: "/songs",
  manageProfile: "/profile",
  createAlbum: "/albums/create",
  createSong: "/songs/create",
  manageGenders: "/genders",
  createGender: "/genders/create",
  manageBands: "/bands"
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
          <Route exact path={routes.dashboardBand} component={DashboardBand} />
          <Route exact path={routes.adminPanel} component={AdminPanel} />
          <Route exact path={routes.manageAlbums} component={ManageAlbums} />
          <Route exact path={routes.manageSongs} component={ManageSongs} />
          <Route exact path={routes.manageProfile} component={ManageProfile} />
          <Route exact path={routes.createAlbum} component={CreateAlbum} />
          <Route exact path={routes.createSong} component={CreateSong} />
          <Route exact path={routes.manageGenders} component={ManageGenders} />
          <Route exact path={routes.createGender} component={CreateGender} />
          <Route exact path={routes.manageBands} component={ManageBands} />
        </Switch>
    </ConnectedRouter>
  );
}