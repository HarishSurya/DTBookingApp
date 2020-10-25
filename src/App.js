import React from "react";
import "./App.css";
import Appointment from "./components/Appointment";
import AppointmentDetails from "./components/AppointmentDetails";
import { Provider } from "react-redux";
import store from "./store.js";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route
            path="/:date/:month/:year/:timeFrom/details"
            component={AppointmentDetails}
          />
          <Route path="/:date?/:month?/:year?/" component={Appointment} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
