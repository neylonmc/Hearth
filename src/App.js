import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "rsuite";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Select from "./components/Select/Select";
import CreateNew from "./components/CreateNew/CreateNew";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile";
import Topic from "./pages/Topic";
import Settings from "./pages/Settings";
import NoMatch from "./pages/NoMatch";
import LoginForm from "./components/LoginForm/LoginForm";
import "./App.css";
import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Container>
          <Switch>
            <Route exact path="/login">
              <LoginForm />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/select" component={Select} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/createnew" component={CreateNew} />
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
