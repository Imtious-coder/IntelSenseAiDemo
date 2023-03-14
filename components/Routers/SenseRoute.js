import React from "react";
import { Route, useHistory } from "react-router";
import { AUTH_KEY, isAuthenticated } from "../../utils/api";

export default function SenseRoute({ component: Component, ...rest }) {
  const [login, setLogin] = React.useState(false);

  return (
    <Route
      {...rest}
      render={(props) => <Component {...props} logged={login} />}
    />
  );
}
