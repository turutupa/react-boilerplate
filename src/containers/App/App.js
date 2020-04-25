import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Home from "containers/Home";
import Error from "containers/Error";

// PrivateRoutes
// import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={Error} />
      </Switch>
    </>
  );
}

export default App;
