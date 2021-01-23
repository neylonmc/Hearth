import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Login from "./pages/Login";
import Select from "./pages/Select";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Topic from "./pages/Topic";
import Settings from "./pages/Settings";
import NoMatch from "./pages/NoMatch";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
              <Route exact path={["/", "/login"]}>
                <Login />
              </Route>
              <Route exact path="/select">
                <Select />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route exact path="/topic">
                <Topic />
              </Route>
              <Route exact path="/settings">
                <Settings />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
