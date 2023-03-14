import React from "react";
import { Route, useHistory } from "react-router";
import { getToken, isAuthenticated } from "../../utils/api";

export default function SecuredRoute({ component: Component, ...rest }) {
  const [isLogged, setLogged] = React.useState();

  const history = useHistory();

  React.useEffect(() => {
    console.log(getToken());
    isAuthenticated()
      .then((response) => {
        setLogged(true);
      })
      .catch((e) => {
        console.log(e);
        history.push("/dashboard/login");
      });
  }, []);

  return isLogged ? (
    <Route
      {...rest}
      logged={isLogged}
      render={() => <Component logged={isLogged} />}
    />
  ) : isLogged !== undefined ? (
    "Unauthorized"
  ) : null;
}
