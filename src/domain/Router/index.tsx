import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "./services";
import Dashboard from "../Dashboard";

const Router: React.FC = () => (
  <Switch>
    <Route path={routes.ROOT} component={Dashboard} />
  </Switch>
);

export default Router;
