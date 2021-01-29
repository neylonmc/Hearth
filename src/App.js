import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "rsuite";
import Login from "./pages/Login/Login";
import Select from "./pages/Select/Select";
import Dashboard from "./pages/Dashboard/Dashboard";
import Topics from "./components/Topics/Topics";
import CreateNew from "./components/CreateNew/CreateNew";
import Nav from "./components/Nav/Nav";
import Profile from "./pages/Profile-Topic/Profile";
import Topic from "./pages/Profile-Topic/Topic";
import Settings from "./pages/Settings/Settings";
import NoMatch from "./pages/NoMatch/NoMatch";
import "rsuite/dist/styles/rsuite-default.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Container>
          <Switch>
            <Route exact path={["/", "/login"]} component={Login} />
            <Route exact path="/select" component={Select}/>
            <Route exact path="/topics" component={Topics} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/create-new" component={CreateNew} />
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
