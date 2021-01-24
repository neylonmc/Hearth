import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Container } from 'rsuite';
import Login from "./pages/Login";
import Select from "./pages/Select";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Topic from "./pages/Topic";
import Settings from "./pages/Settings";
import NoMatch from "./pages/NoMatch";
import './App.css';
import 'rsuite/lib/styles/themes/dark/index.less'

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
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
          </Container>
      </div>
    </Router>
  );
}

export default App;
