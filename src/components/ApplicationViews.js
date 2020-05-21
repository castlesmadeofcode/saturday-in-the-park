import { Route, Redirect } from "react-router-dom";
import React from "react";
import { withRouter } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ParkAreaList from "./parkarea/ParkAreaList";

const ApplicationViews = () => {
  // const hasUser = props.hasUser;

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) => {
          // if (hasUser) {
          return <ParkAreaList {...props} />;
          // } else {
          //   return <Redirect to="/login" />;
          // }
        }}
      />

      <Route
        path="/register"
        render={(props) => {
          return (
            <>
              <Register {...props} />
            </>
          );
        }}
      />

      <Route
        path="/login"
        render={(props) => {
          return (
            <>
              <Login {...props} />
            </>
          );
        }}
      />

      <Route
        path="/myitinerary"
        render={(props) => {
          return (
            <>
              <h1>Placeholder for user's itinerary</h1>
            </>
          );
        }}
      />
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
