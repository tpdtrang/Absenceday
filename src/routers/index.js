import React from 'react'
import { HomeComponent } from '../components/pages/home'
import { Route, Switch } from 'react-router-dom'
import { HomeAdmin } from '../components/pages/admin';
import { TablePermissionPage, TableRolePage, PositionPage, TableTeamPage, UserPage, RegistrationPage, TrackPage } from '../components/pages/admin';
const Routes = () => (
  <Switch>
    <Route path="/" exact={true} component={HomeComponent} ></Route>
    <Route path="/admin" component={HomeAdmin} exact></Route>
    <Route path="/admin/user" component={UserPage} exact></Route>
    <Route path="/admin/team" component={TableTeamPage} exact></Route>
    <Route path="/admin/role" component={TableRolePage} exact></Route>
    <Route path="/admin/position" component={PositionPage} exact></Route>
    <Route path="/admin/permission" component={TablePermissionPage} exact></Route>
    <Route path="/admin/registration" component={RegistrationPage} exact></Route>
    <Route path="/admin/track" component={TrackPage} exact></Route>
  </Switch>
);
export default Routes;
