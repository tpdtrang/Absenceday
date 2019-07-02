import React from 'react'
import { HomeComponent } from '../components/pages/home'
import { Route, Switch } from 'react-router-dom'
import { HomeAdmin } from '../components/pages/admin';
import { TablePermissionPage, TableRolePage, PositionPage, TableTeamPage, UserPage,RegistrationPage } from '../components/pages/admin';
const Routes = () => (
  <Switch>
    <Route path="/" exact={true} component={HomeComponent}></Route>
    <Route path="/admin" component={HomeAdmin}></Route>
    <Route path="/admin" component={HomeAdmin}></Route>
    <Route path="/tableuser" component={UserPage}></Route>
    <Route path="/tableteam" component={TableTeamPage}></Route>
    <Route path="/tableposition" component={PositionPage}></Route>
    <Route path="/tablerole" component={TableRolePage}></Route>
    <Route path="/tablepermission" component={TablePermissionPage}></Route>
    <Route path="/tableregistration" component={RegistrationPage}></Route>
  </Switch>
);
export default Routes;
