import { Route } from "react-router-dom";
import React from "react";
import { withRouter } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ParkAreaList from "./parkarea/ParkAreaList";
import ItineraryList from "./itinerary/ItineraryList";

const ApplicationViews = () => {
  // const hasUser = props.hasUser;

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) => {
          return <ParkAreaList {...props} />;
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
              <ItineraryList {...props} />
            </>
          );
        }}
      />
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
