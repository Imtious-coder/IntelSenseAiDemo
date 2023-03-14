import React from "react";
import { Route } from "react-router";
import Home from "../../pages/Home";
import { isAuthenticated } from "../../utils/api";

export default function PublicOnly({ component, ...rest }) {
  if (rest.authenticated) return <Route {...rest} component={Home} />;

  return <Route {...rest} component={component} />;
}
