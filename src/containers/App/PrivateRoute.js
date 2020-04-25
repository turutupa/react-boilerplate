import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ component: Component, authed, ...rest }) {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        authed === true || isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
